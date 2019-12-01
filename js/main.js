window.onload = () => {
    'use strict';
    Notification.requestPermission(status => { });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    } else {
        console.error("Could not register service worker")
    }
}