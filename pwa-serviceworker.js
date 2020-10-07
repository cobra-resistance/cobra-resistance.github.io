const cacheName = 'cobra-resistance-cache-v1';

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(
				[
					'/'
				]);
		})
	);
});
