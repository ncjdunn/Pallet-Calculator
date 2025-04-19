self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pallet-app').then(cache =>
      cache.addAll([
        'index.html',
        'manifest.json',
        'app-icon.png',
        'logo.png'
      ])
    )
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});