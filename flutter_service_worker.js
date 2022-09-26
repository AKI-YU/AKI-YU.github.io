'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d23730a412aa79d40ba68c17f025080c",
"index.html": "980cac4e4bbc3bdab82edb7ab3b730fe",
"/": "980cac4e4bbc3bdab82edb7ab3b730fe",
"main.dart.js": "bea4d483a96bbb237a1bebfeadf87138",
"404.html": "779385b8e931c1ca89a7b74363e6c8df",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "e4b8a66bc5ece11caf190054dd9108cc",
"_github-pages-challenge-nobodyyu": "205577103911b4d1a208439a87914fb5",
"icons/favicon-16x16.png": "e4b8a66bc5ece11caf190054dd9108cc",
"icons/favicon.ico": "ea86c7492e5528d9329ffab0b70018c5",
"icons/apple-icon.png": "a023d69aaf1a56562d0e6a98612db0e7",
"icons/apple-icon-144x144.png": "7c916475e48028f27325085b31f02055",
"icons/android-icon-192x192.png": "a72c75c97733811b3bd4a938da049268",
"icons/apple-icon-precomposed.png": "a023d69aaf1a56562d0e6a98612db0e7",
"icons/apple-icon-114x114.png": "c438f1d4cd34ceae39ebca8ce0ecb1f7",
"icons/ms-icon-310x310.png": "4348f3296fa703d8ecfc77df3fb1c8b7",
"icons/ms-icon-144x144.png": "7c916475e48028f27325085b31f02055",
"icons/apple-icon-57x57.png": "c7c7372de29303c55c9e7a60eb39523a",
"icons/apple-icon-152x152.png": "8ae6ce75508694d13ca14523ec52f3fd",
"icons/ms-icon-150x150.png": "45dabf6a0c9fbbd5495a8b7b8b91c7fa",
"icons/android-icon-72x72.png": "f53c2bb4abe2d7cbdbeda6ef26ef1bdb",
"icons/android-icon-96x96.png": "2831ebfee3cbd0c10777828fa700fb89",
"icons/android-icon-36x36.png": "be993d9a3f89661b499018681a953ecc",
"icons/apple-icon-180x180.png": "d1b31e792c9b66e05882892dd21b6302",
"icons/favicon-96x96.png": "00d8b1a7827fdb2cdd8f0c8a96fd62ce",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "3fb6d77f24fca53d44cbd4e2554b2b52",
"icons/apple-icon-76x76.png": "0976b635d641a42df99f3a621d3a962c",
"icons/apple-icon-60x60.png": "a707fce27e85efbeffd0ea4b57ead1bd",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "a78afdf96943ad24920d102b81dc92e0",
"icons/apple-icon-72x72.png": "0526c8994b609622a8d7660bb7902997",
"icons/apple-icon-120x120.png": "0d8fa816c735206cd979da58d4ed30e4",
"icons/favicon-32x32.png": "800efa1c31fca2e5b0ed96bfe46fa9f9",
"icons/ms-icon-70x70.png": "ccd909cd5e24aed6919235a94d97cf55",
"manifest.json": "6811075f68bbfdd0809559e218c3c8b2",
"assets/AssetManifest.json": "267e1115823ea7e8d58de95d21659da8",
"assets/NOTICES": "4c39a1e0f51ddeaf50b52f014dad3159",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f05a050255664ea20b7069ee844d5ded",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/two_swords.png": "f42073e04f5c6c93cd786f38b32acbf0",
"assets/assets/images/mushroom.png": "a0f1099ad41f7244022a6bd298fc47fd",
"assets/assets/images/back01.png": "769da73ff953e5533e3c9ad288e9030b",
"assets/assets/images/magic_bubble.png": "2fd3a3a84200d455f3bd964147b986dc",
"assets/assets/images/hero.png": "ac0a39938f1f0e4ba9c4bea970b5f043",
"assets/assets/images/fire.png": "2b60ebf2f2fbce34ae06f00b34e8caaa",
"assets/assets/images/magician.png": "c5acf9f5e0f66733ce2820a72ffe6537",
"assets/assets/images/swords.png": "004e325d099c6302b3fc60a4634a7f70",
"assets/assets/images/dragon.png": "b6a23a19a64aacd432b00d10f8decd2f",
"assets/assets/images/bottom.png": "2d27f0c748ddeeecc9e2367c0aaffd25",
"assets/assets/images/characters.png": "c74f22e1cb44bc3f7915540548e631b4",
"assets/assets/images/class_back.png": "671531cd32683806a91a40d0c9732490",
"assets/assets/images/frame4.png": "ef51e7049095ffeed658caf980bcf5c8",
"assets/assets/images/header.png": "811df3b05656a497cc01d0ef4009dfb0",
"assets/assets/images/hearts.png": "1da0fa0849fb5016030b0df685973619",
"assets/assets/images/frame3.png": "d9e6f017b87ee469ef67617bd086156f",
"assets/assets/images/frame2.png": "b6fc1d6843dae1bbda03c33bfbbf1685",
"assets/assets/images/ground.png": "5f5f075e5af63346fe1f8be62194c1e6",
"assets/assets/images/phone.png": "db49935e90258a5566d20532cf43e80e",
"assets/assets/images/frame1.png": "c62e14f530a41c5e17e70c8d25dc6cb5",
"assets/assets/images/pipe.png": "1f51c47e00e8df003a403f54ae207f69",
"assets/assets/images/star.png": "715c783fcdd501ab1792ba60e3853542",
"assets/assets/images/tree_back.png": "893f39461746a6158ec92a0aa4826bc6",
"assets/assets/images/line.jpg": "634b258798e0593197ff3d0755f660a2",
"assets/assets/images/scroll.png": "42fe759662ed3f04bda4ebb02b10628d",
"assets/assets/images/coin.png": "c7e18233f12bc3204f7a2b2fd3d77418",
"assets/assets/images/brick.png": "48c22c18c51ddf71b57d57506891d33d",
"assets/assets/images/icon_ken.png": "f68f41599180fbe1e5985b3076b35c24",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
