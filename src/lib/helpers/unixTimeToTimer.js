export function unixTimeToTimer(unixTime) {
	const time = Math.floor(unixTime / 1000);
	if (time <= 0) {
		return '00:00:00';
	}
	if (!time) {
		return '';
	}
	let sec = time % 60;
	let min = ((time - sec) % 3600) / 60;
	let hours = (time - min * 60 - sec) / 3600;

	if (sec < 10) {
		sec = `0${sec}`;
	}
	if (min < 10) {
		min = `0${min}`;
	}
	if (hours < 10) {
		hours = `0${hours}`;
	}

	return `${hours}:${min}:${sec}`;
}
