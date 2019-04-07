
var filesToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/scripts/app.js',
  '/styles/inline.css',
  '/scripts/admin.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});