
addAchievement();

function addAchievement() {
	let userToken = localStorage.getItem('jwt');
	
	if (!userToken){
		window.location = "/pages/login.html";
	}

	var achievement_id = new URL(window.location.href).searchParams.get("id");
	if(!achievement_id){
		window.location = "/index.html"
	}
	
	let expAt = localStorage.getItem('expiresAt')
	if (expAt && new Date(expAt) < new Date())
		logout()

	let url = `http://localhost:3000/api/achievements/awardAchievement`
	fetch(url, {
		method: 'POST',
		headers: {
			'Authorization': userToken
		},
	}).then((response) => {
		if (response.status == 201)
			window.location = "/achievements.html";
	}).catch(err => {
		console.log(err)
	})
}