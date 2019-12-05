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
      loggedDiv.append(createAchievementsList(user));
      loggedDiv.append(createEventsList(user));
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
  achievementsTitle.innerText = "Achievements";
  achievementsDiv.append(achievementsTitle);

  for (let i; i < user.achievements.length; i++) {
    // create each list item
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    // add item to achievments list
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
  eventsTitle.innerText = "Events";
  // add title
  eventsDiv.append(eventsTitle);

  for (let i; i < user.events.length; i++) {
    // create each list item
    const item = document.createElement("li");
    item.classList.add("list-group-item");

    // add item to achievments list
    eventsDiv.append(item);
  }

  return eventsDiv;
};

window.onload = () => {
  getUserData();
};
