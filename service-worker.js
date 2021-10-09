let cacheName = 'notes-son.v.1.0.0';
let filesToCache = [
    '/',
    'index.html',
    'css/colors.css',
    'css/styles.css',
    'js/array.observe.polyfill.js',
    'js/object.observe.polyfill.js',
    'js/scripts.js'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] installer')
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell')
            return cache.addAll(filesToCache);
        })
    );
})

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] activate')
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if(key !== cacheName){
                    console.log('[ServiceWorker] Removing old cache')
                    return cache.delete(key);
                }
            }))
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] fetch', e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});