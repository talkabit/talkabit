const getUserData = () => {
  let userToken = localStorage.getItem("jwt");
  if (!userToken) {
    const notLoggedDiv = document.querySelector("#profile #not-logged");

    // show not logged div
    notLoggedDiv.style.display = "block";

    return null;
  }

  let expAt = localStorage.getItem("expiresAt");
  if (expAt && new Date(expAt) < new Date()) logout();

  let url = `http://talkabit-1735953010.eu-west-2.elb.amazonaws.com/api/html/getuser`;
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: userToken
    }
  })
    .then(response => {
      if (response.status == 200) return response.json();
    })
    .then(({ html, user } = { html: "", user: null }) => {
      console.log(user);

      const loggedDiv = document.querySelector("#profile #logged");
      // show logged div
      loggedDiv.style.display = "block";

      // create name label
      const nameDiv = document.createElement("h3");
      nameDiv.innerText = user.name;

      // create evenbrite order label
      const orderLabel = document.createElement("h4");
      orderLabel.innerText = "Eventbrite order: #" + user.orderId;

      // TODO: create qr div
      // const qrDiv = document.createElement("div");

      // add divs
      loggedDiv.append(nameDiv);
      loggedDiv.append(orderLabel);
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

      loggedDiv.append(grid);
    })
    .catch(err => {
      console.log(err);
    });
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
    '<h4><i class="fas fa-trophy" style="margin-right: 1rem;"></i> Achievements</h4>';
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
    '<h4><i class="far fa-calendar-alt" style="margin-right: 1rem;"></i> Events</h4>';

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
