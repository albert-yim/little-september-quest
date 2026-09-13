const CACHE_NAME = "piyak-birthday-v2";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css?v=8",
  "./app.js?v=8",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/characters/piyak-neutral.png",
  "./assets/characters/piyak-excited.png",
  "./assets/characters/piyak-love.png",
  "./assets/characters/nyong-neutral.png",
  "./assets/characters/nyong-excited.png",
  "./assets/characters/nyong-love.png",
  "./assets/characters/nyong-nervous.png",
  "./assets/characters/nyong-gift.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(response => {
          if (response.ok || response.type === "opaque") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : undefined);
    })
  );
});
