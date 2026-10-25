// sw.js sederhana
self.addEventListener('install', (e) => {
  console.log('Service Worker terinstal');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong atau tangani fetch standar
});
