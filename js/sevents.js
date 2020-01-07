let isLoggedIn = (localStorage.getItem('jwt')) && ((localStorage.getItem('expiresAt') && new Date(localStorage.getItem('expiresAt')) > new Date()))

if(isLoggedIn)
    document.location.href = './events.html'