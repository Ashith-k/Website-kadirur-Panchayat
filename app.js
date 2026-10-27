/**
 * ===================================================================
 * KADIRUR GRAMA PANCHAYAT - WEBGIS SPATIAL INFORMATION SYSTEM
 * Optimized Application Controller & PWA Manager
 * Provides: Header control, offline detection, PWA caching,
 * iframe resilience, and accessible mobile navigation.
 * ===================================================================
 */

(function () {
  'use strict';

  // --- 1. Service Worker & PWA Initialization ---
  function registerServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then((reg) => {
            console.log('[Kadirur WebGIS PWA] Service Worker registered:', reg.scope);
            
            // Check for Service Worker updates
            reg.addEventListener('updatefound', () => {
              const newWorker = reg.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[Kadirur WebGIS PWA] New update available.');
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.warn('[Kadirur WebGIS PWA] Service Worker registration failed:', err);
          });
      });
    }
  }

  // --- 2. Live Connectivity Monitor (2G / 3G / Offline) ---
  function setupConnectivityMonitor() {
    const badge = document.getElementById('network-badge');
    const offlineFallback = document.getElementById('iframe-offline-fallback');
    const skeleton = document.getElementById('iframe-skeleton');

    function updateNetworkStatus() {
      const isOnline = navigator.onLine;

      if (badge) {
        const text = badge.querySelector('.status-text');
        if (isOnline) {
          badge.classList.remove('offline');
          if (text) text.textContent = 'Online';
          badge.setAttribute('title', 'Active network connection available');
          if (offlineFallback && offlineFallback.style.display !== 'none') {
            offlineFallback.style.display = 'none';
          }
        } else {
          badge.classList.add('offline');
          if (text) text.textContent = 'Offline Mode';
          badge.setAttribute('title', 'Browsing cached WebGIS data offline');
          if (offlineFallback) {
            offlineFallback.style.display = 'flex';
          }
          if (skeleton) {
            skeleton.classList.add('hidden');
          }
        }
      }
    }

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    updateNetworkStatus();
  }

  // --- 3. Dynamic Header Height & Scroll Behavior ---
  function setupStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    function updateHeaderDimensions() {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', updateHeaderDimensions, { passive: true });
    updateHeaderDimensions();
  }

  // --- 4. Mobile Navigation Drawer Controller ---
  function setupMobileNavigation() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    function openMenu() {
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.removeAttribute('hidden');
    }

    function closeMenu() {
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('hidden', '');
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when clicking any link
    links.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Check if open-menu requested in hash
    if (window.location.hash === '#open-menu') {
      openMenu();
    }
  }

  // --- 5. Active Section Scroll Spy via IntersectionObserver ---
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach((sec) => observer.observe(sec));
  }

  // --- 6. Resilient Embedded Map Iframe Handler ---
  function setupMapIframe() {
    const iframe = document.getElementById('gis-map-iframe');
    const skeleton = document.getElementById('iframe-skeleton');
    const offlineFallback = document.getElementById('iframe-offline-fallback');
    const retryBtn = document.getElementById('retry-iframe-btn');

    if (!iframe) return;

    // When iframe finishes loading, hide skeleton
    iframe.addEventListener('load', () => {
      if (skeleton) {
        skeleton.classList.add('hidden');
      }
    });

    // Safety timeout: if on slow network and not loaded after 9 seconds
    const timeoutTimer = setTimeout(() => {
      if (skeleton && !skeleton.classList.contains('hidden') && !navigator.onLine) {
        if (offlineFallback) offlineFallback.style.display = 'flex';
        skeleton.classList.add('hidden');
      }
    }, 9000);

    // Retry Button
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        if (offlineFallback) offlineFallback.style.display = 'none';
        if (skeleton) skeleton.classList.remove('hidden');
        iframe.src = iframe.src; // Reload iframe
      });
    }
  }

  // --- Initialize All Controllers on DOM Ready ---
  document.addEventListener('DOMContentLoaded', () => {
    registerServiceWorker();
    setupConnectivityMonitor();
    setupStickyHeader();
    setupMobileNavigation();
    setupScrollSpy();
    setupMapIframe();
  });

})();
