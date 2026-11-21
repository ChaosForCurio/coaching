// Firebase Cloud Messaging Service Worker for background Chrome notifications
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Initialize with default project config if needed, or rely on service worker registration
self.addEventListener('push', (event) => {
  if (!event.data) return;

  try {
    const data = event.data.json();
    const title = data.notification?.title || data.title || 'Bhavya Career Institute Update';
    const options = {
      body: data.notification?.body || data.body || 'New course or batch update available.',
      icon: data.notification?.icon || '/favicon.svg',
      badge: '/favicon.svg',
      data: {
        url: data.data?.url || data.url || '/courses',
      },
    };

    event.waitUntil(self.registration.showNotification(title, options));
  } catch (err) {
    const text = event.data.text();
    event.waitUntil(
      self.registration.showNotification('Bhavya Career Institute', {
        body: text,
        icon: '/favicon.svg',
      })
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/courses';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
