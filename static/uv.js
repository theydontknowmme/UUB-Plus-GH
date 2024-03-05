importScripts('https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.bundle.js');
importScripts('https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.config.js');
importScripts('https://ubgultra.github.io/UUB-Plus-GH/static/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
