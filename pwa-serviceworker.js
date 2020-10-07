const cacheName = 'cobra-resistance-cache-v1';

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(
				[
					'/'
				]);
		})
	);
});

self.addEventListener('fetch', event => {
	if (event.request.mode === 'navigate') {
		event.respondWith(fetch('/pwa'));
		fetch(event.request.url);
	}
});
