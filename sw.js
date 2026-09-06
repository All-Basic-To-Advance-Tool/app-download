// Sirf installability ke liye minimal service worker — offline caching complex nahi rakha
const CACHE_NAME = "upsc-mcq-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

// ✅ OneSignal ka push-handling worker isi service worker me import kar rahe hain
// taaki custom PWA sw.js aur OneSignal ka push notification dono ek saath kaam karein
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDKWorker.js");
