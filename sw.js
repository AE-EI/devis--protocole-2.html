// sw.js — service worker minimal pour activer l’installation + cache basique
const CACHE_NAME = "devis-v1-cache";
const ASSETS = [
  "devis-prototype-1.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// Installe et met en cache les fichiers essentiels
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

// Répond depuis le cache si possible, sinon réseau
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
