let userEvents
getUser()

async function getUser() {
    let userToken = localStorage.getItem('jwt')
    if (!userToken) {
        showLoginRequired()
        showLogin()
        return
    }
    let expAt = localStorage.getItem('expiresAt')
    if (expAt && new Date(expAt) < new Date())
        logout()

    let userUuid = localStorage.getItem('uuid')
    if (!userUuid) {
        logout()
        return
    }

    let url = `https://api.jflcarvalho.me/api/users/` + userUuid
    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        }
    }).then(data => {
        return data.json()
    }).then(user => {
        userEvents = user.events
        getEvents()
    }).catch(err => {
    })
}

function getEvents() {
    let userToken = localStorage.getItem('jwt')
    if (!userToken) {
        showLoginRequired()
        showLogin()
        return
    }
    let expAt = localStorage.getItem('expiresAt')
    if (expAt && new Date(expAt) < new Date())
        logout()

    let url = `https://api.jflcarvalho.me/api/events/`
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        }
    }).then(data => {
        return data.json()
    }).then(events => {
        createEventsCards(events)
    }).catch(err => {
    })

}

function createEventsCards(events) {
    let eventsRow = document.getElementById('events_row')
    for (let event of events) {
        let button = getButton(event)
        let description = getDescription(event)
        eventsRow.innerHTML += `<div class="card col-12 col-md-4 col-lg-3 mb-5 mx-2">
        <img src="` + getImage(event) + `" alt="event_logo" style="width: 85%; height: auto" class="mx-auto mt-2">
        <div class="card-body">
            <h4 class="card-title">` + event.name + `</h4>
            <p class="card-text mb-5">` + description + `</p>`
            + button +
            `</div>
    </div>`
    }
}

function getDescription(event) {
    if (event.name.includes('Bosch'))
        return "Why Autonomous Driving is Hard"
    else if (event.name.includes('Visit Switch'))
        return "Take a trip backstage to the offices of Switch, our main sponsor for this edition of TAB, and see for yourself how Switch deals with everyday challenges. Jan,09 2020"
    else if (event.name.includes('Switch'))
        return "Designing a Rest API"
    else if (event.name.includes('XpandIT'))
        return "How to build a multiplatform desktop App (Win, Mac, Linux) using web tecnologies"
    else if (event.name.includes('Dinner'))
        return "Get your chance to dine with some of our partners in a more casual environment. Jan,10 2020 - 19h30"
    else if (event.name.includes('Network'))
        return "Attend a casual pitch with partner companies and exchange information in a more private setup."
}

function getImage(event) {
    if (event.name.includes('Bosch'))
        return "../images/sponsors/bosch.png"
    else if (event.name.includes('Switch'))
        return "../images/sponsors/switch.png"
    else if (event.name.includes('XpandIT'))
        return "../images/sponsors/xpandit.png"
    else if (event.name.includes('Dinner'))
        return "../images/dinner.png"
    else if (event.name.includes('Network'))
        return "../images/network.png"
}

function getButton(event) {
    for (let userEvent of userEvents) {
        if (event.uuid == userEvent.uuid)
            return `<a href="#" onclick="unregisterEvent('` + event.uuid + `')" class="btn btn-danger unregister-btn my-2" style="position: absolute; bottom: 0">Unregister</a>`
    }
    return `<a href="#" onclick="addEvent('` + event.uuid + `')" class="btn btn-primary register-btn my-2" style="position: absolute; bottom: 0">Register</a>`
}


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
            showSuccess("reg")

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

function unregisterEvent(eventId) {
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
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        },
        body: JSON.stringify(data)
    }).then(data => {
        if (data.statusText == 'OK') {
            showSuccess("unr")
        }
        else {
            return data.json()
        }
    }).then(res => {
        if (res)
            showFailure()
    }).catch(err => {
    })
}

function showSuccess(mode) {
    var resultMessage = document.getElementById('resultMessage')
    var msgDiv = document.getElementById('msgDiv')
    msgDiv.innerText = mode == "reg" ? "Registered with success!" : "Unregistered with success!"
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