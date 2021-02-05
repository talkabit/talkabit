const api = async (token, func, method, body = null) => {
  let url = "https://api.jflcarvalho.me/api/" + func;

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: body
  });

  if (response.status != 200) {
    return response
  }

  return response.json();
};

const getUserData = async () => {
  let userToken = localStorage.getItem("jwt");
  let userUuid = localStorage.getItem('uuid')
  if (!userToken) {
    const notLoggedDiv = document.querySelector("#profile #not-logged");

    // show not logged div
    notLoggedDiv.style.display = "block";

    return null;
  }

  let expAt = localStorage.getItem("expiresAt");
  if (expAt && new Date(expAt) < new Date()) logout();

  // fetch user data
  try {
    const user = await api(userToken, "users/" + userUuid, "GET");
    const loggedDiv = document.querySelector("#profile #logged");
    // show logged div
    loggedDiv.style.display = "block";

    // create name label
    const nameDiv = document.createElement("h3");
    nameDiv.innerText = user.name;

    // create evenbrite order label
    const orderLabel = document.createElement("h4");
    orderLabel.innerText = "Eventbrite order: #" + user.orderId;

    // curriculum button
    const cvButton = createCurriculumButton(user, userToken);

    // add divs
    loggedDiv.append(nameDiv);
    loggedDiv.append(orderLabel);
    loggedDiv.append(cvButton);

    // create events and achievements grid
    const grid = document.createElement("div");
    grid.classList.add("row");

    const col1 = document.createElement("div");
    col1.classList.add("col-sm-6");
    col1.append(createAchievementsList(user));
    grid.append(col1);

    const col2 = document.createElement("div");
    col2.classList.add("col-sm-6");
    col2.append(createEventsList(user));
    grid.append(col2);

    // append grid
    loggedDiv.append(grid);
  } catch (e) {
    console.error(e);
  }
};

const createCurriculumButton = (user, userToken) => {
  const div = document.createElement("div");
  div.classList.add("input-group");
  div.style.marginTop = "1rem";
  div.style.maxWidth = "40rem";

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("form-control");
  input.placeholder = user.cv ? user.cv : "Curriculum URL";
  div.append(input);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("input-group-append");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-outline-primary");
  button.type = "button";
  button.innerText = user.cv ? "Add Curriculum" : "Update Curriculum";

  button.onclick = async event => {
    const text = input.value;
    if (text != "") {
      // create msg body
      const body = JSON.stringify({ cv: text });

      // make request
      try {
        var res = await api(userToken, "users/" + user.uuid, "PUT", body);

        if (res.status == 400) {
          showFailure()
        } else {
          showSuccess()
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  buttonDiv.append(button);
  div.append(buttonDiv);

  return div;
};

function showSuccess() {
  var resultMessage = document.getElementById('resultMessage')
  var msgDiv = document.getElementById('msgDiv')
  msgDiv.innerText = "CV updated with success!"
  resultMessage.style.display = 'block'
  resultMessage.style.backgroundColor = 'lightgreen'
}

function showFailure() {
  var resultMessage = document.getElementById('resultMessage')
  var msgDiv = document.getElementById('msgDiv')
  msgDiv.innerText = "Link must be from Google Drive, Github or LinkedIn!"
  resultMessage.style.display = 'block'
  resultMessage.style.backgroundColor = 'red'
}

const createAchievementsList = user => {
  // achievements list
  const achievementsDiv = document.createElement("ul");
  achievementsDiv.classList.add("list-group");
  achievementsDiv.style.marginTop = "2rem";
  achievementsDiv.style.marginBottom = "2rem";

  const achievementsTitle = document.createElement("li");
  achievementsTitle.classList.add("list-group-item", "list-group-item-primary");
  achievementsTitle.innerHTML =
    '<i class="fas fa-trophy" style="margin-right: 1rem;"></i> Achievements';
  achievementsDiv.append(achievementsTitle);

  for (let i = 0; i < user.achievements.length; i++) {
    // create each list item
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    const grid = document.createElement("div");
    grid.classList.add("row");
    grid.style.color = "black";

    const col1 = document.createElement("div");
    col1.classList.add("col-sm-6");
    grid.append(col1);

    const col2 = document.createElement("div");
    col2.classList.add("col-sm-6");
    col2.style.textAlign = "right";
    grid.append(col2);

    // Set fields
    const achievement = user.achievements[i];
    col1.innerText = achievement.name;
    if (achievement.type == "workshop") {
      col2.innerHTML = '<i class="fas fa-chalkboard-teacher"></i>';
    } else if (achievement.type == "social") {
      col2.innerHTML = '<i class="fas fa-users"></i>';
    } else {
      col2.innerText = "Other";
    }

    // add item to achievments list
    item.append(grid);
    achievementsDiv.append(item);
  }

  return achievementsDiv;
};

const createEventsList = user => {
  // eventsDiv list
  const eventsDiv = document.createElement("ul");
  eventsDiv.classList.add("list-group");
  eventsDiv.style.marginTop = "2rem";
  eventsDiv.style.marginBottom = "2rem";

  const eventsTitle = document.createElement("li");
  eventsTitle.classList.add("list-group-item", "list-group-item-secondary");
  eventsTitle.innerHTML =
    '<i class="far fa-calendar-alt" style="margin-right: 1rem;"></i> Events';

  // add title
  eventsDiv.append(eventsTitle);


  for (let i = 0; i < user.events.length; i++) {
    // create each list item
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    const grid = document.createElement("div");
    grid.classList.add("row");
    grid.style.color = "black";

    const col1 = document.createElement("div");
    col1.classList.add("col-9");
    col1.classList.add("col-sm-10");
    grid.append(col1);

    const col2 = document.createElement("div");
    col2.classList.add("col-1");
    col2.classList.add("col-sm-1");
    col2.style.textAlign = "right";
    col2.style.fontSize = "1rem";
    grid.append(col2);

    const col3 = document.createElement("div");
    col3.classList.add("col-1");
    col3.classList.add("col-sm-1");
    col3.style.textAlign = "right";
    col3.style.fontSize = "1rem";
    col3.style.cursor = 'pointer';
    grid.append(col3);
    col3.innerHTML = '<i class="fas fa-times-circle"></i>';
    col3.onclick = function () { unregisterEvent(user.events[i].uuid); grid.remove(col3)}

    // Set fields
    const event = user.events[i];
    col1.innerText = event.name;
    if (event.type == "workshop") {
      col2.innerHTML = '<i class="fas fa-chalkboard-teacher"></i>';
    } else {
      col2.innerText = "Other";
    }

    // add item to achievments list
    item.append(grid);
    eventsDiv.append(item);
  }

  return eventsDiv;
};

window.onload = () => {
  getUserData();
};

function unregisterEvent(eventId) {
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

function showLoginRequired() {
  var resultMessage = document.getElementById('resultMessage')
  var msgDiv = document.getElementById('msgDiv')
  msgDiv.innerText = "You need to log in to register for an event!"
  resultMessage.style.display = 'block'
  resultMessage.style.backgroundColor = 'red'
  window.scrollTo(0, 0)
}
