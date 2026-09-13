const assert = require("node:assert/strict");
const WebSocket = require(process.argv[process.argv.indexOf("--ws-module") + 1] || "ws");

async function main() {
  const testPin = process.env.PIYAK_TEST_PIN;
  assert.ok(testPin, "Set PIYAK_TEST_PIN to run the protected PWA browser check");
  const pages = await fetch("http://127.0.0.1:9334/json/list").then(response => response.json());
  const socket = new WebSocket(pages.find(page => page.type === "page").webSocketDebuggerUrl);
  await new Promise(resolve => socket.once("open", resolve));
  let id = 0;
  const pending = new Map();
  socket.on("message", data => {
    const message = JSON.parse(data);
    if (!message.id) return;
    const request = pending.get(message.id);
    pending.delete(message.id);
    message.error ? request.reject(message.error) : request.resolve(message.result);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    pending.set(++id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const run = async expression => {
    const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
    return result.result.value;
  };

  await send("Runtime.enable");
  await send("Network.enable");
  await send("Network.emulateNetworkConditions", { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await send("Page.navigate", { url: "http://127.0.0.1:4173/index.html" });
  await new Promise(resolve => setTimeout(resolve, 1200));
  const unlocked = await run(`unlockWithPin(${JSON.stringify(testPin)},true).then(()=>({giftName:CONFIG.giftName,letterCount:CONFIG.letter.length}))`);
  assert.ok(unlocked.giftName);
  assert.ok(unlocked.letterCount > 0);
  const pwa = await run(`(async()=>{
    const registration=await navigator.serviceWorker.ready;
    const cacheNames=await caches.keys();
    const cache=await caches.open(cacheNames.find(name=>name.startsWith('piyak-birthday-')));
    return {active:registration.active?.state,scope:registration.scope,entries:(await cache.keys()).length};
  })()`);
  assert.equal(pwa.active, "activated");
  assert.match(pwa.scope, /127\.0\.0\.1:4173\/$/);
  assert.ok(pwa.entries >= 15);

  await send("Page.reload");
  await new Promise(resolve => setTimeout(resolve, 700));
  assert.equal(await run("document.querySelector('#app .screen') !== null"), true);
  await send("Network.emulateNetworkConditions", { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 });
  try {
    await send("Page.reload");
    await new Promise(resolve => setTimeout(resolve, 700));
    const offlineState = await run(`({
      screen:document.querySelector('#app .screen')!==null,
      characters:document.querySelectorAll('.pixel-character').length,
      title:document.title,
      body:document.body?.innerText?.slice(0,120),
      controller:navigator.serviceWorker?.controller?.scriptURL,
      startGame:typeof window.startGame,
      gameStarted:typeof window.gameStarted==='undefined'?'missing':window.gameStarted
    })`);
    assert.equal(offlineState.screen, true, JSON.stringify(offlineState));
    assert.equal(offlineState.characters, 2);
  } finally {
    await send("Network.emulateNetworkConditions", { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
    await run(`localStorage.removeItem("piyak-unlock-key-v1")`);
  }
  socket.close();
  console.log(`PWA browser checks passed: service worker activated, ${pwa.entries} resources cached, offline launch works.`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
