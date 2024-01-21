self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('your-website-cache')
      .then(cache => {
        return cache.addAll([
          '',
          'index.html',
          'styles.css',
          'script.js',
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('in');
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        console.log('fetch', response);
        return response || fetch(event.request);
      })
  );
});
