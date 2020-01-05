var regBts = document.getElementsByClassName('register-btn')
if (localStorage.getItem('jwt')) {
    for (let btn of regBts)
        btn.style.display = 'inline-block'
} else {
    showLoginRequired();
}

function addEvent(eventId) {
    event.preventDefault()
    let userToken = localStorage.getItem('jwt');
    if (!userToken) {
        showLoginRequired()
        showLogin()
        return
    }

    let expAt = localStorage.getItem('expiresAt')
    if (expAt && new Date(expAt) < new Date())
        logout()

    var data = {
        eventUuid: eventId
    }

    let userUID = localStorage.getItem('uuid');
    let url = `https://api.jflcarvalho.me/api/users/` + userUID + '/events'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        },
        body: JSON.stringify(data)
    }).then(data => {
        if (data.statusText == 'OK')
            showSuccess()

        else {
            return data.json()
        }
    }).then(res => {
        if (res.error.message == 'Event is full')
            showEventFull()
        else if (res.error.message == 'CV must be set to attend this event')
            showCVRequired()
        else
            showFailure()
    }).catch(err => {
    })
}

function showSuccess() {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "Registered with success!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'lightgreen'
    window.scrollTo(0, 0)
}

function showEventFull() {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "Sorry, this event is full!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'red'
    window.scrollTo(0, 0)
}

function showCVRequired() {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "Update your CV on your profile to register for this event!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'red'
    window.scrollTo(0, 0)
}

function showLoginRequired() {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "You need to log in to register for an event!"
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'red'
    window.scrollTo(0, 0)
}

function showFailure() {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = "Something went wrong..."
    resultMessage.style.display = 'block'
    resultMessage.style.backgroundColor = 'red'
    window.scrollTo(0, 0)
}