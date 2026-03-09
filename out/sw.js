const CACHE_NAME = 'itarok-v1.0.0';

// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating');
  event.waitUntil(self.clients.claim());
});

// Basic fetch handler - just log for now
self.addEventListener('fetch', (event) => {
  // For now, just pass through all requests
  // This ensures the service worker is active and detectable
  console.log('Service Worker: Fetching', event.request.url);
});