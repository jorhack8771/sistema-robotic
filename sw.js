// Robotic Latam - Service Worker for Push Notifications & System Updates (2026)
const CACHE_NAME = 'robotic-latam-sw-v1';
const DEFAULT_ICON = './bot-avatar-centered.png';
const DEFAULT_BADGE = './favicon.PNG';

// 1. Service Worker Lifecycle
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 2. Push Notification Event Handler (Server/State-driven push updates)
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { body: event.data.text() };
    }
  }

  // Ensure notifications only trigger for valid state/platform updates
  const title = data.title || 'Robotic Latam - Novedades';
  const options = {
    body: data.body || 'Tenemos nuevas actualizaciones y funciones disponibles.',
    icon: data.icon || DEFAULT_ICON,
    badge: data.badge || DEFAULT_BADGE,
    tag: data.tag || 'robotic-state-update',
    renotify: data.renotify || false,
    requireInteraction: data.requireInteraction || false,
    data: {
      url: data.url || '/',
      id: data.id || 'update_' + Date.now(),
      timestamp: Date.now()
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 3. Notification Interaction / Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Focus existing tab if open
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if ('focus' in client) {
          if (client.url.includes(self.location.origin)) {
            client.navigate(targetUrl);
            return client.focus();
          }
        }
      }
      // Otherwise open a new window
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});

// 4. Message Communication with Web Client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_STATE_UPDATE') {
    const { title, body, url, tag, id } = event.data;
    const options = {
      body: body || 'Nueva actualización disponible en Robotic Latam.',
      icon: DEFAULT_ICON,
      badge: DEFAULT_BADGE,
      tag: tag || 'robotic-state-update',
      renotify: false,
      data: {
        url: url || '/',
        id: id || 'update_' + Date.now()
      }
    };
    self.registration.showNotification(title || 'Robotic Latam', options);
  }
});
