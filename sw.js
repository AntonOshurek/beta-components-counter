const CACHE_PREFIX = 'aluplast-components-counter-cache';
const CACHE_VER = 'v1';
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VER}`;

// const HTTP_STATUS_OK = 200;
// const RESPONSE_SAFE_TYPE = 'basic';

const urlsToCache = [
  "antonoshurek.github.io/",
  "antonoshurek.github.io/aluplast-components-counter",
  "antonoshurek.github.io/aluplast-components-counter/",
  "antonoshurek.github.io/aluplast-components-counter/index.html",
  "antonoshurek.github.io/aluplast-components-counter/404.html",
  "antonoshurek.github.io/aluplast-components-counter/static/js/main.chunk.js",
  "antonoshurek.github.io/aluplast-components-counter/static/js/bundle.js",
  "antonoshurek.github.io/aluplast-components-counter/static/css/main.chunk.css",
];


// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
});
