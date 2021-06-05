import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../../localstorage.js';

export function footerCounters() {
	let boards = load();

	let active = boards.filter((item) => item.title === 'Backlog')[0];
	if (active) {
		active = boards.filter((item) => item.title === 'Backlog')[0].tasks
			.length;
	} else {
		active = 'list does not exist';
	}

	let finished = boards.filter((item) => item.title === 'Finished')[0];
	if (finished) {
		finished = boards.filter((item) => item.title === 'Finished')[0].tasks
			.length;
	} else {
		finished = 'list does not exist';
	}

	return [active, finished];
}
