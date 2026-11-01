// Service worker GCS: notifikasi HP (Firebase Cloud Messaging) dan lencana merah di ikon aplikasi.
// Versi library Firebase dikunci agar perilakunya stabil.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
importScripts('firebase-config.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Tidak ada cache: data tugas selalu diambil dari server. Handler ini hanya
// agar aplikasi memenuhi syarat untuk dipasang (install) di Android.
self.addEventListener('fetch', () => {});

const configOk = self.FIREBASE_CONFIG && !/^ISI_/i.test(self.FIREBASE_CONFIG.apiKey || '');
if (configOk) {
    firebase.initializeApp(self.FIREBASE_CONFIG);
    const messaging = firebase.messaging();

    // Notifikasi datang saat aplikasi tertutup/di latar belakang.
    // Lencana merah di ikon = jumlah notifikasi belum dibaca (dikirim server di data.badge).
    messaging.onBackgroundMessage((payload) => {
        const badge = parseInt(payload && payload.data && payload.data.badge, 10);
        if (!isNaN(badge) && 'setAppBadge' in self.navigator) {
            const p = badge > 0 ? self.navigator.setAppBadge(badge) : self.navigator.clearAppBadge();
            if (p && p.catch) p.catch(() => {});
        }
    });
}
