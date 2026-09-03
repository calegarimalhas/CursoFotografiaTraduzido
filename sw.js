/**
 * Service Worker - Photography Masterclass WebApp (PWA)
 * Caches core static assets for instant offline load and fast mobile performance
 */

const CACHE_NAME = 'photomaster-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/course_data.js',
  './js/dictionary.js',
  './manifest.json',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching static core assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Network-first for dynamic navigation, Cache-first for images and static assets
  const req = event.request;
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cachedResponse => {
      if (cachedResponse) {
        // Fetch background update for cache
        fetch(req).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(req, networkResponse));
          }
        }).catch(() => {/* offline fallback */});
        return cachedResponse;
      }

      return fetch(req).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && req.url.startsWith('http')) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        if (req.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
