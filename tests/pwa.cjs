const fs = require("node:fs");
const assert = require("node:assert/strict");

const html = fs.readFileSync("index.html", "utf8");
const app = fs.readFileSync("app.js", "utf8");
const worker = fs.readFileSync("sw.js", "utf8");
const manifest = JSON.parse(fs.readFileSync("manifest.webmanifest", "utf8"));

assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
assert.match(html, /rel="apple-touch-icon"/);
assert.match(html, /name="robots" content="noindex, nofollow, noarchive"/);
assert.match(app, /serviceWorker\.register\("\.\/sw\.js"\)/);
assert.match(app, /AES-GCM/);
assert.match(app, /["']?data["']?: "[A-Za-z0-9+/=]{500,}"/);
assert.doesNotMatch(app, /const CONFIG = \{/);
assert.equal(manifest.display, "standalone");
assert.equal(manifest.start_url, "./index.html");
assert.equal(manifest.icons.length, 2);

for (const [file, size] of [
  ["assets/icons/apple-touch-icon.png", 180],
  ["assets/icons/icon-192.png", 192],
  ["assets/icons/icon-512.png", 512]
]) {
  const png = fs.readFileSync(file);
  assert.equal(png.readUInt32BE(16), size, `${file}: wrong width`);
  assert.equal(png.readUInt32BE(20), size, `${file}: wrong height`);
}

for (const file of ["index.html", "styles.css?v=8", "app.js?v=9", "manifest.webmanifest", ...manifest.icons.map(icon => icon.src)]) {
  assert.ok(worker.includes(`./${file}`), `Offline cache is missing ${file}`);
}

console.log("PWA checks passed: manifest, standalone mode, service worker, offline shell, and 180/192/512px icons.");
