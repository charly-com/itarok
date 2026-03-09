'use client'

import { useEffect } from 'react'

export default function PWA() {
  useEffect(() => {
    // Only register in browser environment
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    // Register service worker after page loads
    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        console.log('Service Worker registered successfully:', registration.scope);

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('New service worker available');
              }
            });
          }
        });

        // Check if service worker is controlling the page
        if (navigator.serviceWorker.controller) {
          console.log('Service Worker is controlling the page');
        } else {
          console.log('Service Worker registered but not yet controlling');
        }

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    };

    // Register immediately if document is ready, otherwise wait for load
    if (document.readyState === 'complete') {
      registerSW();
    } else {
      window.addEventListener('load', registerSW);
    }
  }, [])

  return null
}