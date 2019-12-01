var user;

getLocalUser();

function getLocalUser() {
  let userToken = localStorage.getItem('jwt');
  //console.log(userToken)
  if (!userToken)
    return null

  let url = `http://localhost:3000/api/html/getuser`
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': userToken
    },
  }).then((response) => {
    if (response.status == 200)
      return response.json()
  }).then(({ html, user } = {html: "", user: null}) => {
    var div = document.createElement('div');
    div.innerHTML = html;

    document.querySelector('#user-navbar').appendChild(div.firstChild);
  }).catch(err => {
    console.log(err)
  })
}
