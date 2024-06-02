'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"README.md": "dd14de30d2d22f4b3421850c1ea12d06",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"manifest.json": "32c249842a53704be4b2c262207d31e2",
"assets/AssetManifest.bin.json": "23cab8ba25373dc0867cdb897898f6ea",
"assets/AssetManifest.bin": "83113773ce4028491c04fccf6fabab92",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/background.png": "598991ccc2943c99f25d8359e9879489",
"assets/assets/time/Deborah.png": "bed5b41f539cbabcf620fb45548013c9",
"assets/assets/time/Matheus.png": "464c80b051dd5ad4ff10f175556c6f34",
"assets/assets/time/Daniel.png": "de2474f8598c5363ec7af085ec66d4a9",
"assets/assets/time/Gerson.png": "cb2de6a595df12ee0194779d35eecfeb",
"assets/assets/contact_us.png": "157bd999e9eab8feabe8972f49bc95cc",
"assets/assets/logo.png": "b9be0844941d527ccf41c4ea8d5a3188",
"assets/assets/tecnologias/Trello.png": "ab50be7cb940e6d8ed9be0814fdc7266",
"assets/assets/tecnologias/Figma.png": "6e1da6072db0cd4329945eafa07435e6",
"assets/assets/tecnologias/Github.png": "2a79c75b6bbbef45f0e497611cfa586d",
"assets/assets/tecnologias/Django.png": "39edd1f7af3f46073d7d8130f03d081a",
"assets/assets/tecnologias/PostgreSQL.png": "52b6fef655e75e3fc4fd69436c96828d",
"assets/assets/tecnologias/Flutter.png": "2875ce357fa73ce27d2c981bc1273476",
"assets/assets/Footer_Background.png": "7b46989e6e53611ac214e1a0685a4de0",
"assets/assets/Screenshots.png": "c0de38d362e61e00d3d6b27f64d4964a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "2fae2edb5cfaa5420cf60ab7c562e05d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.json": "9264ec02779fa95dab4e2e18f8f444a0",
".git/logs/refs/heads/main": "20aa3ae7a9da95465c849326c0ed69e4",
".git/logs/refs/remotes/origin/main": "890a840ea400021d5c50a407c300bfdf",
".git/logs/HEAD": "619c856b01584bce8dfaf4c6489536e6",
".git/COMMIT_EDITMSG": "6ca5b94000538404e4f547633213deb7",
".git/FETCH_HEAD": "5e3833ce717e22411bdc282d9b170559",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "72e4e999f713ec34d63c4b960136e806",
".git/refs/remotes/origin/main": "72e4e999f713ec34d63c4b960136e806",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "121cecb61275427b7f2563ebe545ec3e",
".git/ORIG_HEAD": "72e4e999f713ec34d63c4b960136e806",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/index": "da67f53b0e7b46b022750986dbb7f993",
".git/objects/6d/062b5446e66d0c0a6e9ca591f8d9c6caafc628": "a1f9b467099661d22508b412944f61bc",
".git/objects/6d/a4c0523c5a797468a45359f9429da09594d5ed": "2c32001655a303b8284653d38d908e44",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/48/08e80ea4681a411dd1822ed499daaefb9069d9": "f35a13c8567f8d83a50c49fe86221111",
".git/objects/40/aa585021dd0c273525a07d7f2e65366edf3084": "a7f8b52ace382ac5cbdb2a8f163295de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6e/36077a9b74b91958614d8f59fc93b08d83f3d9": "48a210dc6f9a3dca70f9119215f44413",
".git/objects/4f/3fffd85baf5f63a198aaa86aeeda47edafac16": "a43733a1d0795ee33a0d1db0ceb55ca0",
".git/objects/fe/f971198cea7415ea0920fe277f6ff91d1e2038": "e134542e599b9d0eb22c6aa847376624",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/15/435da74b1c7e36c0f28f4cb3f1b16e0fc713a1": "2118242bae834cd647b7277799718a15",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/25/f523333bb6db86a609df5cf6b930eaba145a45": "f31a15f8933147cf712ca05853a56fef",
".git/objects/a0/0b511a8de2e373087fe0ab92e1aa275583804b": "ba09dd6fc248f7cc71ad9fe7b7dc27e5",
".git/objects/6b/153a750f43cbd0efece2be1d6b9bd8b28fa40d": "056e05ac7ab1fcf10f42f7b3f6146c5d",
".git/objects/6b/bdeb0a1eaab0d435c3258711f43d4200725136": "7c301c2e998e412e31e50d7cd78aaf57",
".git/objects/d9/bf4513ffb5e6dd9943877fecd173329794f6dd": "a90fcfb2478a220b8b448975f6a132b1",
".git/objects/19/1f331d8ed276e5aebb3707eafe1723edac3c30": "cff6232d835d65436436ac27b3c3bc11",
".git/objects/c9/46fff29113b5544633e76913d01d3d16578989": "fa85366b42c69f362d91dd6989d67b05",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/13/be9b73c78cb3d392925da4bd5515955e68a2df": "ee865f1dd2dbb87da861773bfbeedb74",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/785ad03317a219fe4c67d871bdb0839ee67398": "d67a7b7256be914340b36f75835cb8fb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/fa/256758bf2c456f0fa9e260102cabfd8ccecaa8": "81ae89fea7583224714115b096331d03",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/8e1a140a7b00b7df570513a91fe96c0f99f86b": "af85766e2573f34d8e6372476fc677c4",
".git/objects/a8/cf1cf69a5006f64326389a22e7fecfda00b669": "8128ad001a2bcdf3b2b380d416258f33",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b7/25535e343e2956a15fddedc67d842de66e13a7": "499b78be80b30f9e2f914068ba44c897",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c0/d5bac32faa7961fdbe8df08a002c68abcecc40": "970e10f64c21ab25b2695972d6e29581",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/12/6cfcb73aaf4a6356ae0ce1020851a3108f7ee7": "4830c06a2b1c2be515cc1edb95c1ae89",
".git/objects/2e/955a79c8279024b35f25601471de45b28479f5": "cea70f8768a5f3e524dd96c44517901a",
".git/objects/2e/8adb2754c06ba7df01c221e06d0e70d4456e8d": "b999394e1dde81d5b52c25481b12a3bf",
".git/objects/2b/14a6d399257a1de862b255a675157ce7072517": "6b448197bc149e901e0cfb3d298ac204",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/4781a97327dd2e2bbad7003697e34989854de4": "ece4967f491bee12d9e53acbd23946b7",
".git/objects/45/4f385cb21a8feaf1fbf8a3faec400683f3784c": "9b8f8604ac0df61d7e685ffe1ad6ad29",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/85/92136b55eda2bbcc02ce8bd49c7ccc4ad3c5a0": "86da4b4493247e05610a3fd5775a8f0b",
".git/objects/85/e7ca51c674d7aefd721ae3f4d2ad4f797ecca5": "25c7d8ea5bae9ffa41acdcf770fcc403",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/72e3a4cd471729e18bf8089a18eb81eaa05a4d": "e5f0ff78325faf0129863d86af86feae",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/1d/c6f3995ff6a5ac5063eafc278fb981debe13fa": "7e6be75c3dd1103cbeae828f7499aa22",
".git/objects/b8/88f073012651e7584719d2a7fcd093fd65ccdc": "2e36c70bc4a52f8de250dd364438dbdf",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/d3/a71c0bad4f01184bdca2a5d132b84159c2864d": "9aaf6e87c7c83c681b461ba6e905ce40",
".git/objects/22/c64c6414f6c614a77e64655f03ae5485a7d392": "4c593e5551f2ffbdb47a8a96e967b980",
".git/objects/de/75e8787e3a3da47fa98f5a4a6aaad248212fa7": "f7c0c2db71e60d5eba4f5a02512b550b",
".git/objects/09/ba3e807b297662922728814882b2f707995384": "2605effd29692a6bd1fafbb0f070b732",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/71dee4ef8c4a5da6acbf4fb8052a194118c6f3": "60ee9580f69e9b1716f09872f6a9647e",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/72/6da70e1a6ba0bc90f428f5254e1d7edac644a2": "5ef2d904173da03b8ba93cfa3338d288",
".git/objects/f5/60af74b06a2ae549dc09a1513361346b94e0db": "4938db7b5b64b62b2de62fc4cbbdd2ed",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/57a58208ebddc85e3e6254151a6489959a352d": "529bdc623f1d83f1643cc4e3b3c50f33",
".git/objects/4a/9dad8275dd25bd5ae0f38ac7d0f894201d8089": "b39f97aa6f3f22e06a5c3984cc030263",
".git/objects/b5/db04f990a22a96bdaf7b12406d482462f9dac5": "17df608332ed25219143fd2687375dd2",
".git/objects/9e/d3578626bc6da2ee7822112ce3ea43d63522f2": "3b92fa047b29f97ca8f002138bccfe9c",
".git/objects/44/554639e189339f9f444fc50d417626c2073da5": "caf1692d85c880936fe7db1f45490d2d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/9b/3be1b6fbb75f150f8e6a6a75eb41a560872c44": "84a5d94beda62252d0a3f0e28e6ad3ae",
".git/objects/02/9f3ddbde6b76dced1171dccdbad32b13cfc982": "1ba33343bf32a2925c9a20a71c75ed60",
".git/objects/02/cd4a8f24194a245283c6b7ba5ea075313c0800": "a494c88784514ffa4e13890c061e3a71",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/37/5b3d60c684134da3053b0785bb5b942975d0ec": "d134547c1841d10fd709dac5ac47e3bc",
".git/objects/92/7e3292760da9a71dd6caec22eb773be9f9f139": "c99c39cb890350f39c59697a56db7cef",
".git/objects/64/387f58313b23f5693c3aea11a8694b02274834": "6a836d357d2c81fe870e4f46d0594c98",
".git/objects/a3/ba38b89f8205c72e4646a4eb13b29d91cd798f": "f92916438a55cf6f1303c88483944412",
".git/objects/db/4ed46a0485d48da5eb45e9c2a46fc14a0d7185": "daffe92e7d610e3f1d5750098c098714",
".git/objects/06/848603eee3d918ebac2ddd82fc2f8679082efc": "c7d6630f89422a06a2ca7858dee2f224",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"index.html": "806462f284db6c3b24550ed4aa2ea62c",
"/": "806462f284db6c3b24550ed4aa2ea62c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c6ccdc35c14de76c58c2f140612f5171",
"main.dart.js": "d7baab03a80ace5230aced279b36cf35",
"version.json": "9396616df3bc1c9bcf9437a78a9c56d2",
"favicon.png": "17bbd931f95304b98cb865e5b584f8bc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
