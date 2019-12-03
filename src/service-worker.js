
let dataCacheName = 'diary-v1';
let cacheName = 'diary-data';
let filesToCache = [
    '/',
    '/index.html',
    '/assets/diary.png',
    '/assets/diarys.png',
    '/main.js'
];


self.addEventListener('install' , e => {
    console.log('service worker installed');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('service worker is caching the app shell')
            return cache.addAll(filesToCache);
        })
    )
})


self.addEventListener('activate' , e => {
    console.log('service worker activated');
    e.waitUntil(
        caches.keys().then(keyList => {
            // console.log('service worker is caching the app shell')
            return Promise.all(keyList.map(key => {
                if(key !== cacheName && key !== dataCacheName){
                    console.log('service worker removing the old cache')
                    return caches.delete(key);
                }
            }));
        })
    )
    return self.clients.claim()
})

self.addEventListener('fetch' , e => {
    console.log('service worker fetch' , e.request.url);
  
})
