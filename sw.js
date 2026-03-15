const CACHE_NAME = "routine-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./table.html",
  "./header.css",
  "./routine.css",
  "./table.css",
  "./r.js",
  "./data_r.js",
  "./table.js",
  "./practice.js",
  "./manifest.json"
];

// Install Service Worker and cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate and clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Fetching strategy: Cache first, then Network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
