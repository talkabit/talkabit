if (window.location.href.includes('thanks.html'))
	addEventListener('fetch-user', renderThanks)

getLocalUser();
getCookies()

function getLocalUser() {
	let userToken = localStorage.getItem('jwt');
	if (!userToken){
		showLogin()
		return
	}

	
	let expAt = localStorage.getItem('expiresAt')
	if (expAt && new Date(expAt) < new Date())
	logout()
	
	let url = `https://api.jflcarvalho.me/api/html/getuser`
	fetch(url, {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + userToken
		},
	}).then((response) => {
		if (response.status == 200)
		return response.json()
	}).then(({ html, user } = { html: "", user: null }) => {
		hideLogin()
		let userEvents = new CustomEvent('fetch-user', { detail: user });
		dispatchEvent(userEvents);
		let div = document.createElement('div');
		div.innerHTML = html;

		document.querySelector('#user-navbar').appendChild(div.firstChild);
		document.getElementById('prof-button').addEventListener('click', () => {	
			window.location.href = window.location.href.includes('pages') ? './profile.html' : './pages/profile.html'
		})
		document.getElementById('events-button').addEventListener('click', () => {
			window.location.href = window.location.href.includes('pages') ? './events.html' : './pages/events.html'
		})
		// document.getElementById('achievements-button').classList.add('disabled')
		document.getElementById('achievements-button').addEventListener('click', () => {
			window.location.href = window.location.href.includes('pages') ? './achievements.html' : './pages/achievements.html'
		})
		document.getElementById('logout-button').addEventListener('click', () => {
			logout()
		})
	}).catch(err => {
		console.log(err)
	})
}

function renderThanks(e) {
	let user = e.detail
	let thanksDiv = document.querySelector('#thanksTemplate');
	thanksDiv.innerHTML = `
    <p>Dear ${user.name},</p>
    <p>Thank you for completing registration to Talk a Bit 2020.<br />
        You registered with this email: ${user.email}</p>
    <p>In your account, you can submit your resume and add some additional information about
        yourself. You can register for workshops and other activities.
        On the day of the event, with your account, you could win some prizes.</p>
    <p>If you have any questions leading up to the event, feel free to send us an email.<br />
        We look forward to seeing you on 11 Jan 2020.</p>
    <p class="mb-0"> Kind Regards,<br>
          Talk a Bit Team<br>
        <a class="text-secondary" target="_blank" href="mailto:geral@talkabit.org">
            geral@talkabit.org
        </a>
    </p>
    <ul class="list-group list-group-horizontal" style="list-style-type: none; text-decoration: none; font-size: 1.5rem;">
        <li class="mr-3"><a class="text-secondary" target="_blank" href="https://www.facebook.com/talkabit"><i
                    class="fab fa-facebook-f"></i></a></li>
        <li class="mx-3"><a class="text-secondary" target="_blank" href="https://www.instagram.com/talkabit/"><i
                    class="fab fa-instagram"></i></a></li>
        <li class="mx-3"><a class="text-secondary" target="_blank" href="https://www.linkedin.com/company/talkabit/"><i
                    class="fab fa-linkedin"></i></a>
        </li>
    </ul>
    `;
	localStorage.removeItem('jwt')
	localStorage.removeItem('uuid')
	localStorage.removeItem('expiresAt')
}

function logout() {
	localStorage.removeItem('jwt')
	localStorage.removeItem('uuid')
	localStorage.removeItem('expiresAt')
	window.location.reload();
}

function getCookies() {
	if(localStorage.getItem('cookies'))
		return
	else
		document.getElementById('cookies').style.display = 'inline'
}

function storeCookies() {
	localStorage.setItem('cookies', true)
	document.getElementById('cookies').style.display = 'none'
}

function showLogin() {
	document.getElementById('loginLnk').style.display = 'inline'
	document.getElementById('registerLnk').style.display = 'inline'
}

function hideLogin() {
	document.getElementById('loginLnk').style.display = 'none'
	document.getElementById('registerLnk').style.display = 'none'
}