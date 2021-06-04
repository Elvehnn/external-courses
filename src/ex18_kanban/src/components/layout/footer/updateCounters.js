import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../../localstorage.js';

import { footerCounters } from './footerCounters.js';

export function updateCounters() {
	load();
	let [active, finished] = footerCounters();

	let activeTasksCounter = document.getElementById('active-tasks');
	let finishedTasksCounter = document.getElementById('finished-tasks');

	activeTasksCounter.innerHTML = `Active tasks: ${active}`;
	finishedTasksCounter.innerHTML = `Finished tasks: ${finished}`;
}
