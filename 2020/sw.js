var cacheName = 'talkabit-pwa';
var filesToCache = [
  '/',
  '/sw.js',
  '/manifest.json',
  '/favicon.ico',
  '/css/bootstrap/css/bootstrap.min.css',
  '/css/bootstrap/css/bootstrap-reboot.min.css.map',
  '/css/bootstrap/css/bootstrap.css',
  '/css/bootstrap/css/bootstrap-grid.css.map',
  '/css/bootstrap/css/bootstrap-grid.min.css',
  '/css/bootstrap/css/bootstrap.css.map',
  '/css/bootstrap/css/bootstrap.min.css.map',
  '/css/bootstrap/css/bootstrap-reboot.min.css',
  '/css/bootstrap/css/bootstrap-reboot.css',
  '/css/bootstrap/css/bootstrap-grid.css',
  '/css/bootstrap/css/bootstrap-grid.min.css.map',
  '/css/bootstrap/css/bootstrap-reboot.css.map',
  '/css/bootstrap/js/bootstrap.bundle.js',
  '/css/bootstrap/js/bootstrap.bundle.min.js.map',
  '/css/bootstrap/js/bootstrap.bundle.js.map',
  '/css/bootstrap/js/bootstrap.js',
  '/css/bootstrap/js/bootstrap.bundle.min.js',
  '/css/bootstrap/js/bootstrap.min.js',
  '/css/bootstrap/js/popper.min.js',
  '/css/bootstrap/js/bootstrap.js.map',
  '/css/bootstrap/js/bootstrap.min.js.map',
  '/css/bootstrap/js/jquery-3.3.1.slim.min.js',
  '/css/fontawesome/css/all.css',
  '/css/fontawesome/css/v4-shims.css',
  '/css/fontawesome/css/brands.min.css',
  '/css/fontawesome/css/solid.css',
  '/css/fontawesome/css/brands.css',
  '/css/fontawesome/css/regular.css',
  '/css/fontawesome/css/all.min.css',
  '/css/fontawesome/css/svg-with-js.min.css',
  '/css/fontawesome/css/v4-shims.min.css',
  '/css/fontawesome/css/fontawesome.min.css',
  '/css/fontawesome/css/svg-with-js.css',
  '/css/fontawesome/css/regular.min.css',
  '/css/fontawesome/css/fontawesome.css',
  '/css/fontawesome/css/solid.min.css',
  '/css/fontawesome/webfonts/fa-solid-900.ttf',
  '/css/fontawesome/webfonts/fa-regular-400.svg',
  '/css/fontawesome/webfonts/fa-regular-400.woff2',
  '/css/fontawesome/webfonts/fa-solid-900.eot',
  '/css/fontawesome/webfonts/fa-brands-400.svg',
  '/css/fontawesome/webfonts/fa-regular-400.woff',
  '/css/fontawesome/webfonts/fa-brands-400.eot',
  '/css/fontawesome/webfonts/fa-solid-900.svg',
  '/css/fontawesome/webfonts/fa-solid-900.woff',
  '/css/fontawesome/webfonts/fa-regular-400.ttf',
  '/css/fontawesome/webfonts/fa-solid-900.woff2',
  '/css/fontawesome/webfonts/fa-brands-400.woff2',
  '/css/fontawesome/webfonts/fa-brands-400.woff',
  '/css/fontawesome/webfonts/fa-brands-400.ttf',
  '/css/fontawesome/webfonts/fa-regular-400.eot',
  '/css/fonts/Roboto-Medium.ttf',
  '/css/fonts/Roboto-Light.ttf',
  '/css/fonts/decima-light-webfont.woff',
  '/css/fonts/Decima-Pro-A.ttf',
  '/css/fonts/Roboto-Regular.ttf',
  '/css/fonts/Decima-Pro.ttf',
  '/css/fonts/Roboto-MediumItalic.ttf',
  '/css/fonts/Karben_105_W00_Bold.ttf',
  '/css/fonts/Decima-Pro-A-Bold.ttf',
  '/css/fonts/Roboto-ThinItalic.ttf',
  '/css/fonts/Roboto-BoldItalic.ttf',
  '/css/fonts/Roboto-LightItalic.ttf',
  '/css/fonts/Decima-Pro-A-Light.ttf',
  '/css/fonts/Roboto-Italic.ttf',
  '/css/fonts/Roboto-BlackItalic.ttf',
  '/css/fonts/Roboto-Bold.ttf',
  '/css/fonts/Decima-Pro-Bold.ttf',
  '/css/fonts/Roboto-Thin.ttf',
  '/css/fonts/Roboto-Black.ttf',
  '/css/fonts/Calibri.ttf',

  //Pages
  '/pages/speakers.html',
  '/index.html',
  '/pages/program.html',
  '/pages/sponsors.html',
  '/pages/cookies.html',
  '/pages/events.html',

  //CSS
  '/css/footer.css',
  '/css/navbar.css',
  '/css/program.css',
  '/css/speakers.css',
  '/css/sponsors.css',
  '/css/style.css',
  '/css/events.css',
  '/css/location.css',
  '/css/tickets.css',

  //Scripts
  '/js/organization.js',
  '/js/hide-navbar.js',
  '/js/main.js',

  //Images
  '/images/logo_filled.png',
  '/images/feup.jpeg',
  '/images/logo_sem.svg',
  '/images/placeholder_member.png',
  '/images/logo_sem.png',
  '/images/speakers/spk.jpg',
  '/images/speakers/spk2.jpg',
  '/images/speakers/spk_small.png',
  '/images/speakers/spk2_small.png',
  '/images/speakers/spk3.png',
  '/images/speakers/spk4.png',
  '/images/speakers/spk5.png',
  '/images/logo_lg.svg',
  '/images/logo_com.png',
  '/images/logo.png',
  '/images/logo_com.svg',
  '/images/logo_lg.png',
  '/images/logo_app.png',
  '/images/sponsors/bosch.png',
  '/images/sponsors/rumos.png',
  '/images/sponsors/switch_white.png',
  '/images/sponsors/switch.png',
  '/images/sponsors/talkdesk.png',
  '/images/sponsors/xpandit.png',
  '/images/sponsors/inovaria.png',
  '/images/sponsors/jumia.png',
  '/images/sponsors/devscope.png',
  '/images/sponsors/sisqual.jpg',
  '/images/sponsors/finantec.png',
  '/images/sponsors/losch.jpeg',
  '/images/sponsors/inesc.png',
  '/images/sponsors/fraunhoffer.png',
  '/images/sponsors/worten.png',
  '/images/sponsors/jc.png',
  '/images/sponsors/devexperts.png',
  '/images/sponsors/criticalman.png',
  '/images/sponsors/novabase.png',
  '/images/sponsors/semasio.png',
  '/images/sponsors/critical.png',
  '/images/sponsors/platforme.png',
  '/images/sponsors/natixis.png',
  '/images/sponsors/msg-life.png',
  '/images/sponsors/velocidi.png',
  '/images/sponsors/dei.png',
  '/images/sponsors/ieee.png',
  '/images/sponsors/junifeup.png',
  '/images/sponsors/aefeup.png',
  '/images/sponsors/niaefeup.png',
  '/images/sponsors/nortada.png',
  '/images/sponsors/scaleup.jpg',
  '/images/sponsors/alquimiadossabores.png',
  '/2019/res/img/feup-logo.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("ADDING ALL");
      return cache.addAll(filesToCache).catch((error) => {
        console.log(error);
      });
    })
  );
});

self.addEventListener('fetch', function (event) {
  let url = new URL(event.request.url);
  if (filesToCache.indexOf(url.pathname) <= -1) {
    event.respondWith(fetch(event.request));
    console.debug("Not caching " + url.pathname);
  } else {
    event.respondWith(
      fetch(event.request).catch(function () {
        return caches.match(event.request);
      }).then((response) => {
        let responseClone = response.clone();

        caches.open(cacheName).then((cache) => {
          cache.put(event.request, responseClone);
        });

        console.debug("Caching " + url.pathname);

        return response;
      })
    );
  }
});
