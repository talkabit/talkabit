var loginBtn = document.getElementById('login-button')

loginBtn.addEventListener('click', login)

function login() {
    event.preventDefault()

    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var error = document.getElementById('error')
    error.style.display = 'none';
    var errorText = document.getElementById('error-text')

    if (email.value == '' || password.value == '') {
        error.style.display = 'inline'
    }

    const url = 'https://api.jflcarvalho.me/api/users/login'

    var data = {
        email: email.value,
        password: password.value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => {
        if (data.status == 403) {
            errorText.innerHTML = 'This account is banned!'
            error.style.display = 'inline'
            return -1
        }
        else if (data.status == 400) {
            errorText.innerHTML = 'Invalid credentials!'
            error.style.display = 'inline'
            return -1
        }
        else if (data.status == 500) {
            errorText.innerHTML = 'Something went wrong...'
            error.style.display = 'inline'
            return -1
        }
        return data.json()
    }).then(res => {
        if (res == -1)
            return

        localStorage.setItem('uuid', res.uuid)
        localStorage.setItem('jwt', res.token)
        localStorage.setItem('expiresAt', new Date(res.expiresAt))

        var redirect = new URL(window.location.href).searchParams.get("redirect");
        if (redirect)
            window.location.href = decodeURI(redirect)
        else
            window.location.href = '../index.html'
    }).catch(err => {
        console.log(err)
    })

}

if (localStorage.getItem('jwt')) {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "You are already Login!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'lightgreen'
}