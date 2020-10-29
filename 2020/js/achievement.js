
addAchievement();

function addAchievement() {
	let userToken = localStorage.getItem('jwt');
	let userUuid = localStorage.getItem('uuid');
	
	if (!userToken || !userUuid){
		window.location = "./pages/login.html?redirect=" + encodeURIComponent(window.location.href);
	}

	var achievement_id = new URL(window.location.href).searchParams.get("id");
	if(!achievement_id){
		window.location = "./index.html"
	}
	
	let expAt = localStorage.getItem('expiresAt')
	if (expAt && new Date(expAt) < new Date())
		logout()

	let url = `https://api.jflcarvalho.me/api/users/${userUuid}/achievements`
	fetch(url, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + userToken,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `achievementUuid=${achievement_id}`
	}).then((response) => {
		if (response.status == 200)
			window.location = "./pages/achievements.html";
		else{
			response.json().then((body) => {
				alert(body["error"]["message"]);
				window.location = "./index.html";
			});
		}
	}).catch(err => {
		console.log(err)
	})
}
