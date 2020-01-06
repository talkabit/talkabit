var regBtn = document.getElementById('register_button')
regBtn.addEventListener('click', registerUser)

function registerUser() {
    event.preventDefault()
    var error = document.getElementById('error')
    error.style.display = 'none';
    var errorText = document.getElementById('error-text')
    var email = document.getElementById('email')
    var ticket = document.getElementById('ticket')
    var pass = document.getElementById('password')
    var confPass = document.getElementById('conf_password')

    if (pass.value != confPass.value) {
        errorText.innerHTML = 'Passwords don\'t match!'
        error.style.display = 'inline'
        return
    }

    const url = 'https://api.jflcarvalho.me/api/users/register'

    var data = {
        email: email.value,
        password: pass.value,
        orderId: ticket.value
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(data => { 
            if(data.status == 400) {
                errorText.innerHTML = 'Password must have 8 characters, at least a number, Upper and lower case'
                error.style.display = 'inline'
                return -1
            }
            else if (data.status == 403){
                errorText.innerHTML = 'Already registered!'
                error.style.display = 'inline'
                return -1
            }
            else if (data.status == 401){
                errorText.innerHTML = 'Invalid email or ticket number!'
                error.style.display = 'inline'
                return -1
            }
            else if (data.status == 500){
                errorText.innerHTML = 'Something went wrong...'
                error.style.display = 'inline'
                return -1
            }
            return data.json()
        })
        .then(res => {
            if(res == -1)
                return

            localStorage.setItem('jwt', res.token)
            localStorage.setItem('expiresAt', new Date(res.expiresAt))
            window.location.href = './thanks.html'
        })
        .catch(err => {

            if(err.status == 400)
                errorText.innerHTML = 'Password must have 8 characters, at least a number, Upper and lower case'
            else if (err.status == 403)
                errorText.innerHTML = 'Already registered!'
            else if (err.status == 401)
                errorText.innerHTML = 'Invalid email or ticket number!'
            else if (err.status == 500)
                errorText.innerHTML = 'Something went wrong...'

            error.style.display = 'inline'
        })
}


if (localStorage.getItem('jwt')) {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "You are already Register!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'lightgreen'
}