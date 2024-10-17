self.addEventListener('fetch', event => {
  let url = new URL(event.request.url);

  // Normalize paths so both `/pwa/` and `/pwa/index.html` return the same response
  if (url.pathname === '/pwa/' || url.pathname === '/pwa/index.html') {
    event.respondWith(caches.match('/pwa/index.html'));
  }
});
