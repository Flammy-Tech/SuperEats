// service-worker.js
const cacheName = 'SuperEats-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  './assets/css/common.css',
//   '/path/to/your/scripts.js',
  './assets/images/company/flammyTechLogo.png'
  // Add other static assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
