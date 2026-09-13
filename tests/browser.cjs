// Run with Chrome --headless=new --remote-debugging-port=9334.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const WebSocket = require(process.argv[process.argv.indexOf('--ws-module') + 1] && process.argv.includes('--ws-module') ? process.argv[process.argv.indexOf('--ws-module') + 1] : 'ws');
async function main() {
  const pages = await fetch('http://127.0.0.1:9334/json/list').then(r => r.json());
  const ws = new WebSocket(pages.find(p => p.type === 'page').webSocketDebuggerUrl);
  await new Promise(resolve => ws.once('open', resolve));
  let id = 0;
  const pending = new Map();
  const errors = [];
  ws.on('message', data => {
    const msg = JSON.parse(data);
    if (msg.method === 'Runtime.exceptionThrown') errors.push(msg.params.exceptionDetails.text);
    if (msg.id) { const entry = pending.get(msg.id); pending.delete(msg.id); msg.error ? entry.reject(msg.error) : entry.resolve(msg.result); }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, {resolve, reject}); ws.send(JSON.stringify({ id, method, params })); });
  const run = async expression => {
    const result = await send('Runtime.evaluate', {expression, returnByValue: true, awaitPromise: true});
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const click = selector => run(`document.querySelector(${JSON.stringify(selector)}).click()`);
  await send('Runtime.enable');
  await send('Page.enable');
  await send('Page.addScriptToEvaluateOnNewDocument',{source:`{const timer=setInterval(()=>{if(typeof window.startGame==='function'){clearInterval(timer);window.startGame({giftName:'테스트 선물',letter:['테스트 편지']});}},10);}`});
  await send('Page.reload');
  await new Promise(r => setTimeout(r, 700));
  await run('document.fonts.ready');
  for (const width of [320, 390, 480, 1024]) {
    await send('Emulation.setDeviceMetricsOverride', {width, height:844, deviceScaleFactor:1, mobile:true});
    assert.equal(await run(`document.documentElement.scrollHeight <= innerHeight && document.body.scrollHeight <= innerHeight`),true,`Outer page scrolls at ${width}px`);
    for (let step = 0; step <= 17; step++) {
      await run(`state = {...freshState(), step:${step}, maxStep:${step}, mood:'오늘이 조금 기대돼요', rewardFirst:'letter'}; render()`);
      await run(`Promise.all([...document.querySelectorAll('.pixel-character')].map(img => img.decode()))`);
      assert.equal(await run(`[...document.querySelectorAll('.pixel-character')].every(img => img.tagName === 'IMG' && getComputedStyle(img).objectFit === 'contain' && getComputedStyle(img).clipPath === 'none')`), true);
      const layout = await run(`(() => { const scene = document.querySelector('.scene').getBoundingClientRect(); const speech = document.querySelector('.speech').getBoundingClientRect(); return {overflow:document.documentElement.scrollWidth > innerWidth, overlap:[...document.querySelectorAll('.pixel-character')].some(c => {const r=c.getBoundingClientRect();return r.top < speech.bottom || r.left < scene.left || r.right > scene.right || r.bottom > scene.bottom;})}; })()`);
      assert.equal(layout.overflow, false, `Overflow ${width}/${step}`);
      assert.equal(layout.overlap, false, `Character clipping/overlap ${width}/${step}`);
    }
  }
  await send('Emulation.setDeviceMetricsOverride', {width:390,height:844,deviceScaleFactor:1,mobile:true});
  for (const step of [0,4,8]) {
    await run(`state={...freshState(),step:${step},maxStep:${step}};render()`);
    assert.notEqual(await run(`getComputedStyle(document.querySelector('.pixel-character.chick')).animationName`),'none');
    const positions=[];
    for(const time of [0,150,350,650,1000]) {
      positions.push(await run(`(() => { const chick=document.querySelector('.pixel-character.chick'); chick.getAnimations().forEach(a=>{a.pause();a.currentTime=${time};});return getComputedStyle(chick).translate+' '+getComputedStyle(chick).rotate; })()`));
    }
    assert.ok(new Set(positions).size>1,`Chick pose at ${step} does not move`);
  }
  await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  assert.equal(await run(`getComputedStyle(document.querySelector('.pixel-character.chick')).animationName`),'none');
  await send('Emulation.setEmulatedMedia',{features:[]});
  await run('state=freshState();render()');
  await run('document.querySelector("#app").scrollTop=200');
  await click('[data-action="findStar"]');
  assert.equal(await run('state.stars.length'), 1);
  await click('[data-action="next"]');
  await new Promise(r=>setTimeout(r,400));
  assert.ok(await run('document.querySelector("#app").scrollTop') < 5);
  await click('[data-action="selectMood"]');
  await click('[data-action="next"]');
  await click('[data-action="chooseAndNext"]');
  assert.equal(await run('document.querySelector("#reaction-dialog").open'), true);
  await click('#reaction-continue');
  await click('[data-action="next"]');
  assert.equal(await run('document.querySelector("[data-action=next]").disabled'), true);
  await click('[data-index="0"]'); await click('[data-index="1"]');
  await click('[data-action="next"]'); await click('[data-action="next"]');
  await click('[data-action="chooseAndNext"]'); await click('#reaction-continue');
  await click('[data-action="findStar"]'); await click('[data-action="next"]');
  await click('[data-action="selectCafeTitle"]');
  await click('[data-action="findStar"]');
  assert.equal(await run('document.querySelector("[data-action=next]").disabled'), true);
  await click('[data-index="0"]'); await click('[data-index="1"]');
  await click('[data-action="next"]');
  for (let i=0;i<8;i++) await click('[data-action="tapBalloon"]');
  assert.equal(await run('state.balloonTaps'),8);
  await click('[data-action="next"]'); await click('[data-action="rainCheck"]');
  await click('[data-action="selectBestMoment"]');
  const branchStart = await run('JSON.stringify(state)');
  await click('[data-value="gift"]');
  assert.equal(await run('document.querySelector(".nyong-nervous") !== null'),true);
  await click('[data-action="confirmRewardChoice"][data-value="letter"]');
  assert.equal(await run('state.step'),15);
  assert.equal(await run('state.rewardFirst'),'letter');
  for (const branch of ['letter','gift']) {
    await run(`state=JSON.parse(${JSON.stringify(branchStart)});render()`);
    await click(`[data-value="${branch}"]`);
    if(branch === 'letter') await click('[data-action="next"]');
    if(branch === 'gift') await click('[data-action="confirmRewardChoice"][data-value="gift"]');
    await click('[data-value="expert"]');
    if(branch === 'gift') await click('[data-action="giftToLetter"]');
    await click('[data-action="finish"]');
    assert.equal(await run('state.finished'),true);
    for (const i of [2,0,1]) await click(`[data-action="candle"][data-index="${i}"]`);
    assert.equal(await run('state.candles'),3);
    await run(`document.querySelector('#wish').value = '<우리의 다음 생일>'; document.querySelector('#wish').dispatchEvent(new Event('input',{bubbles:true})); render()`);
    assert.equal(await run('document.querySelector("#wish").value'),'<우리의 다음 생일>');
    assert.equal(await run('document.querySelectorAll("[data-action=saveKeepsake]").length'),3);
    for (const kind of ['memory','letter','gift']) {
      const exported = await run(`(async()=>{const canvas=keepsakeCanvas('${kind}');const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));return {width:canvas.width,height:canvas.height,size:blob.size,data:canvas.toDataURL('image/png')};})()`);
      assert.equal(exported.width,1080);
      assert.ok(exported.height>=1500);
      assert.ok(exported.size>30000,`${kind} export is unexpectedly empty`);
      fs.writeFileSync(`/private/tmp/piyak-${kind}.png`,Buffer.from(exported.data.split(',')[1],'base64'));
    }
    assert.equal(await run('document.querySelector(".bottom-nav")'),null);
  }
  // QA sessions must not write the main save slot.
  const saved = await run('localStorage.getItem(STORAGE_KEY)');
  await run('saveState()');
  assert.equal(await run('localStorage.getItem(STORAGE_KEY)'),saved);
  const pageUrl = await run('location.href');
  await send('Page.navigate', {url:pageUrl.split('?')[0]});
  await new Promise(r=>setTimeout(r,500));
  await run(`state={...freshState(),step:10,maxStep:10,missions:[0,2],cafeTitle:'둘만의 수원',stars:[0,8]};saveState()`);
  await send('Page.reload');
  await new Promise(r=>setTimeout(r,500));
  assert.equal(await run('state.step'),10);
  assert.equal(await run('state.cafeTitle'),'둘만의 수원');
  assert.deepEqual(await run('state.missions'),[0,2]);
  await run(`localStorage.setItem(STORAGE_KEY, '{broken')`);
  await send('Page.reload');
  await new Promise(r=>setTimeout(r,500));
  assert.equal(await run('state.step'),0);
  await run('localStorage.removeItem(STORAGE_KEY)');
  await send('Page.navigate', {url:pageUrl.split('?')[0]+'?qaStep=17&ending=1'});
  await new Promise(r=>setTimeout(r,500));
  assert.equal(await run('document.querySelectorAll("[data-action=saveKeepsake]").length'),3);
  assert.equal(await run('state.finished'),true);
  await send('Page.navigate', {url:pageUrl});
  await new Promise(r=>setTimeout(r,500));
  for (const [name,step] of [['intro',0],['explore',10],['sky',11],['choice',14],['gift',17],['ending',17]]) {
    await run(`state={...freshState(),step:${step},maxStep:${step},finished:${name==='ending'},balloonTaps:4,rewardFirst:'letter'};render();window.scrollTo(0,0)`);
    await new Promise(r=>setTimeout(r,500));
    const screenshot = await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    fs.writeFileSync(`/private/tmp/piyak-v4-${name}.png`,Buffer.from(screenshot.data,'base64'));
  }
  await run(`app.innerHTML='';if(!unlockDialog.open)unlockDialog.showModal()`);
  const lockScreenshot = await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
  fs.writeFileSync('/private/tmp/piyak-lock.png',Buffer.from(lockScreenshot.data,'base64'));
  assert.deepEqual(errors,[]);
  console.log('Browser checks passed: 72 screen sizes, full journey, both endings, missions, hearts, candles, escaping, QA save isolation, reload persistence, corrupt save recovery.');
  ws.close();
}
main().catch(error => { console.error(error); process.exit(1); });
