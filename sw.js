self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("FinanceISK_cache").then((cache) => {
            return cache.addAll([
                "./",
                "./app.js",
                "./index.html",
                "./style.css",
                "./manifest.json",
                "https://cdn.jsdelivr.net/npm/pounchdb@7.2.2/dist/pounchdb.min.js"
            ])
        })) 
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.Request))
    );
});