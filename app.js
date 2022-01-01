let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

setInterval(() => {
	let now = new Date().getTime();

	let distance = countDownDate - now;

	//calc shit
	const Milliseconds = 1;
	const second = Milliseconds * 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	//seting test
	let textDays = Math.floor(distance / day);
	let textHours = Math.floor((distance % day) / hour);
	let textMinutes = Math.floor((distance % hour) / minute);
	let textSeconds = Math.floor((distance % minute) / second);
	let textMilliseconds = (((distance % minute) / second) % 1).toFixed(4) * 1000;

	document.getElementById("timer").innerHTML =
		textDays +
		"d " +
		textHours +
		"h " +
		textMinutes +
		"m " +
		textSeconds +
		"s ";

	if (distance < 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "EXPIRED";
	}
}, 10);

function timer() {
	if (countDownDate <= 0) {
		clearInterval(counter);
		return;
	}
	countDownDate--;
	document.getElementById("timer").innerHTML = countDownDate / 100 + " secs";
}
