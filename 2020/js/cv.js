
addCV();

function addCV() {
	let userToken = localStorage.getItem('jwt');
	let userUuid = localStorage.getItem('uuid');

	if (!userToken || !userUuid){
		window.location = "./login.html?redirect=" + encodeURIComponent(window.location.href);
	}

	var scannedUuid = new URL(window.location.href).searchParams.get("uuid");
	if(!scannedUuid)
		return
	
	let expAt = localStorage.getItem('expiresAt')
	if (expAt && new Date(expAt) < new Date())
		logout()

	let url = `https://api.jflcarvalho.me/api/users/${userUuid}/scanned`
	fetch(url, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + userToken,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `scannedUserUuid=${scannedUuid}`
	}).then((response) => {
        if (response.status == 200){
            window.location = "./cv.html";
        }
		else{
			response.json().then((body) => {
                alert(body["error"]["message"]);
				window.location = "../index.html";
			});
		}
	}).catch(err => {
		console.log(err)
	})
}