import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (e) => {
  console.log('installing server');
  e.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (e) => {
  console.log('activate service worker ...');
  e.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (e) => {
  // console.log(e.request);
  // e.respondWith(fetch(e.request));
  e.respondWith(CacheHelper.revalidateCache(e.request));
});
