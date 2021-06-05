import HtmlElement from '../HtmlElement/HtmlElement';
import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../localstorage.js';
import { renderBoards } from '../Board/renderBoards.js';
import { updateCounters } from '../layout/footer/updateCounters.js';

export function createPopup(id) {
	let element = new HtmlElement({
		type: 'ul',
		className: 'popup__menu',
		html: `
					<li class="popup__item">Delete</li>
				`,
	}).element;

	element.querySelector('.popup__item').addEventListener('click', () => {
		let data = load();
		let filteredData = data.filter((item) => item.id !== id);
		filteredData.forEach((item, index) => {
			item.id = index;
		});
		save(filteredData);
		console.log(load());
		renderBoards();
		updateCounters();
	});

	return element;
}
