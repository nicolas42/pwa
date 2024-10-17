self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-web-app-cache').then((cache) => {
            return cache.addAll([
                'https://nicolas42.github.io/pwa/',
                'https://nicolas42.github.io/pwa/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
