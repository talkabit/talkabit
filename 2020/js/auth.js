function isLoggedIn() {
    return (localStorage.getItem('jwt') && localStorage.getItem('expiresAt') > new Date())
}