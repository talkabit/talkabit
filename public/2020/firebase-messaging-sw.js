importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBrC06pgCq4FHqoHrgd834JUg-LLfoiNlI",
    authDomain: "talkabit-27bf7.firebaseapp.com",
    databaseURL: "https://talkabit-27bf7.firebaseio.com",
    projectId: "talkabit-27bf7",
    storageBucket: "talkabit-27bf7.appspot.com",
    messagingSenderId: "407146428442",
    appId: "1:407146428442:web:e325cff8151c8bd6ebf9a3",
    measurementId: "G-BP2FVLVCLR"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    if(!payload.notification.title || !payload.notification.body) return;

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/images/logo_app.png'
    };
  
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
});