/**
 * WebGIS Kadirur Grama Panchayat - Service Worker
 * Version: 1.2.0
 * Provides offline caching, network resilience, and fast asset loading
 */

const CACHE_NAME = 'kadirur-webgis-v1.4.0';

// Core shell assets to precache immediately
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './styles.css?v=1.2.1',
  './app.js?v=1.2.1',
  './manifest.json',
  './assets/images/kadirur_landscape_hero.jpg',
  './assets/images/kadirur_temple_heritage.jpg',
  './assets/images/kadirur_temple_heritage.png',
  './assets/images/ponnyathankam_ankathattu.jpg',
  './assets/images/ponnyathankam_logo.png',
  './assets/images/ssus_logo.jpg',
  './assets/images/ssus_logo.png',
  './assets/images/lsgd_logo.png',
  './map/index.html'
];

// Install Event: Precache Application Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate Event: Clear Stale Caches & Claim Clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('kadirur-webgis-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch Event: Stale-While-Revalidate for local assets, Network-First for external
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // For same-origin assets: Stale-While-Revalidate strategy
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Network failure: return cached if available, or fallback
            return cachedResponse;
          });

          // Return cached response immediately if present, otherwise await network
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // For external requests: Network-first with cache fallback
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request);
    })
  );
});
