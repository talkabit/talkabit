let PUSH_SUBSCRIBED = false;

window.onload = () => {
    'use strict';
    Notification.requestPermission(status => { });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    } else {
        console.error("Could not register service worker")
    }

    subscribePush();
}

function subscribePush(){
    var firebaseConfig = {
        apiKey: "AIzaSyBrC06pgCq4FHqoHrgd834JUg-LLfoiNlI",
        authDomain: "talkabit-27bf7.firebaseapp.com",
        databaseURL: "https://talkabit-27bf7.firebaseio.com",
        projectId: "talkabit-27bf7",
        storageBucket: "talkabit-27bf7.appspot.com",
        messagingSenderId: "407146428442",
        appId: "1:407146428442:web:e325cff8151c8bd6ebf9a3",
        measurementId: "G-BP2FVLVCLR"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const messaging = firebase.messaging();
    messaging.usePublicVapidKey("BN6gUaR5cmzkobxFwVK_PHCtksf2-P5xq7nkeoJ-18nSHe5Wbec6VyOzWlF68znPYskzRNkeLmIbXGTAgLXQ0Tw");
    messaging.getToken();
    messaging.onMessage((payload) => {
       new Notification(payload.notification.title,{
           body: payload.notification.body,
           icon: '../images/logo_app.png'
       });
    });

    PUSH_SUBSCRIBED = true;
}