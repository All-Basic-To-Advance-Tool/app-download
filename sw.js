// Sirf installability ke liye minimal service worker — offline caching complex nahi rakha
const CACHE_NAME = "upsc-mcq-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
