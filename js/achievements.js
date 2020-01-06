getUser()
let userAchievements

function getAchievements() {
    let userToken = localStorage.getItem('jwt')
    if (!userToken) {
        showLoginRequired()
        showLogin()
        return
    }
    let expAt = localStorage.getItem('expiresAt')
    if (expAt && new Date(expAt) < new Date())
        logout()

    let url = `https://api.jflcarvalho.me/api/achievements/`
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        }
    }).then(data => {
        return data.json()
    }).then(achievements => {
        createAchievementsItems(achievements)
    }).catch(err => {
    })
}

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
        userAchievements = user.achievements
        getAchievements()
    }).catch(err => {
    })
}

function createAchievementsItems(achievements) {
    let achievementsContainer = document.getElementById('achievementsContainer')

    for (let achievement of achievements) {
        achievementsContainer.innerHTML += `
            <div class="row mb-1"
                style="background-color: lightgray; opacity: 0.7; height: 3rem; border-radius: 1rem; align-items: center; text-align: left;">
                <div class="col-9 text-dark">
                    ` + achievement.description + `
                </div>
                <div class="col-3 text-dark" style="text-align: right;">
                    ` + isAchieved(achievement) + `
                </div>
            </div>
            `
    }

    updateProgress(achievements)
}

function updateProgress(achievements) {
    let progressBar = document.getElementById('progress-bar')

    let progress = userAchievements.length/achievements.length

    progressBar.style.width = progress + '%'
    progressBar.innerText = progress + '%'
}

function isAchieved(achievement) {
    for(let ach of userAchievements) {
        if (ach.name == achievement.name)
        return 'Achieved <i class="fas fa-check ml-2" style="color: green"></i>'
    }
    return 'Locked <i class="fas fa-lock ml-2" style="color: darkred;"></i>'
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