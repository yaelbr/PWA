self.addEventListener('install', event => {
  const cacheName = 'your-website-cache-v1'; // Update the cache version
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll([
          '',
          'index.html',
          'styles.css',
          'script.js'
        ]);
      })
  );
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== cacheName) { // Update cacheName to your new version
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the response is in the cache, return it
        if (response) {
          return response;
        }

        // If the response is not in the cache, fetch it from the network
        return fetch(event.request).then(response => {
          // Update the cache with the latest version
          return caches.open(cacheName).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
  );
});

