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

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.open(cacheName).then(function(cache) {
			return cache.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function(response) {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
