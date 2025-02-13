const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent');
xhr.setRequestHeader('x-rapidapi-key', '8991dc7ae4msh2a30988c8cc0742p1aa0fajsnab94f9a67a9b');
xhr.setRequestHeader('x-rapidapi-host', 'cricbuzz-cricket.p.rapidapi.com');

xhr.send(data);