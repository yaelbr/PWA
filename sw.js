self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('your-website-cache')
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

self.addEventListener('fetch', event => {
  console.log('reqq', event.request);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the response is in the cache, return it
        if (response && response.ok) {
          console.log('okkk');
          //return response;
        }
        console.log('not ok');
        // If the response is not in the cache, fetch it from the network
        //return fetch(event.request);
      })
  );
});
