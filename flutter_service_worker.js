'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d23730a412aa79d40ba68c17f025080c",
"index.html": "832e385f902adf85f93bb11ab7f2f3b3",
"/": "832e385f902adf85f93bb11ab7f2f3b3",
"main.dart.js": "557f95a37ae6390e8b636a785ea79e6c",
"404.html": "779385b8e931c1ca89a7b74363e6c8df",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
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
"assets/AssetManifest.json": "a3b6d083598a260eb32bc97537de2c26",
"assets/NOTICES": "30e4c4447121acdadca7204b26aceb16",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/back01.png": "769da73ff953e5533e3c9ad288e9030b",
"assets/assets/images/fire.png": "2b60ebf2f2fbce34ae06f00b34e8caaa",
"assets/assets/images/dragon.png": "b6a23a19a64aacd432b00d10f8decd2f",
"assets/assets/images/characters.png": "c74f22e1cb44bc3f7915540548e631b4",
"assets/assets/images/phone.png": "db49935e90258a5566d20532cf43e80e",
"assets/assets/images/line.jpg": "634b258798e0593197ff3d0755f660a2",
"assets/assets/images/icon_ken.png": "f68f41599180fbe1e5985b3076b35c24",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
