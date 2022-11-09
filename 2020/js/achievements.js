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
                style="background-color: lightgray; ` + getOpacity(achievement) + `min-height: 3rem; border-radius: 1rem; align-items: center; text-align: left;">
                <div class="col-7 col-md-9 text-dark">
                    ` + achievement.description + `
                </div>
                <div class="col-5 col-md-3 text-dark" style="text-align: right;">
                    ` + isAchieved(achievement) + `
                </div>
            </div>
            `
    }

    updateProgress(achievements)
}

function getOpacity(achievement){
    for (let ach of userAchievements) {
        if (ach.name == achievement.name)
            return ''
    }
    return 'opacity: 0.7; '
}

/*function getAchievementDescription(achievement) {
    if (achievement.name.includes('talk1') || achievement.name.includes('talk2'))
        return achievement.description + ' (concurrent with Workshop Bosch)'
    if (achievement.name.includes('talk3'))
        return achievement.description + ' (concurrent with Workshop XpandIT)'
    if (achievement.name.includes('talk4') || achievement.name.includes('talk5'))
        return achievement.description + ' (concurrent with Workshop Switch)'
    if (achievement.name.includes('workshop1'))
        return achievement.description + ' (concurrent with Talk:The past, present and future of Privacy and Talk:Graphics Technology Evolution During the Current Generation of Consoles'
    if (achievement.name.includes('workshop2'))
        return achievement.description + ' (concurrent with Talk:The Challenges of Software Engineering in F1'
    if (achievement.name.includes('workshop3'))
        return achievement.description + ' (concurrent with Talk:Social Artificial Intelligence and Talk:Building an Internet for Things and Robots and an Internet of Humans for Everyday Life'

    return achievement.description
}*/

function updateProgress(achievements) {
    let progressBar = document.getElementById('progress-bar')
    
    let progress = 0

    for(let ach of userAchievements){
        if(ach.name == 'workshop1' || ach.name == 'workshop3')
            progress += 2
        else
            progress++
    }

    progress = progress / (achievements.length-3) * 100

    if (progress == 0) {
        progressBar.style.color = 'black'
        progressBar.style.marginLeft = '1rem'
    } else {
        progressBar.style.color = 'white'
        progressBar.style.marginLeft = '0rem'
    }
    progressBar.style.width = progress + '%'
    progressBar.innerText = progress + '%'
}

function isAchieved(achievement) {
    for (let ach of userAchievements) {
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