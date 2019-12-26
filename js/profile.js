const api = async (token, func, method, body = null) => {
  let url = "https://api.jflcarvalho.me/api/" + func;

  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: token
    },
    body: body
  });

  if (response.status != 200) return;

  return response.json();
};

const getUserData = async () => {
  let userToken = localStorage.getItem("jwt");
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
    const { user, html } = await api(userToken, "html/getuser", "GET");

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
      // update user cv
      user.cv = text;

      // create msg body
      const body = JSON.stringify(user);

      // make request
      try {
        await api(userToken, "users/" + user.uuid, "PUT", body);

        //window.location.reload();
      } catch (e) {
        console.error(e);
      }
    }
  };

  buttonDiv.append(button);
  div.append(buttonDiv);

  return div;
};

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
    col1.classList.add("col-sm-6");
    grid.append(col1);

    const col2 = document.createElement("div");
    col2.classList.add("col-sm-6");
    col2.style.textAlign = "right";
    col2.style.fontSize = "1rem";
    grid.append(col2);

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
