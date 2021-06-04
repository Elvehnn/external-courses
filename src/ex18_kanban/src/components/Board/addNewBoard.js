import { renderBoards } from './renderBoards.js';
import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../localstorage.js';

export function addNewBoard() {
	document.querySelector('.add-button').addEventListener('click', () => {
		let boards = load();
		boards = [{ id: 0, title: '@@New@@', tasks: [] }, ...boards];
		boards.forEach((item, index) => {
			item.id = index;
		});

		save(boards);
		renderBoards();

		let boardTitleInput = document.querySelector('.title-input');
		boardTitleInput.focus();
		boardTitleInput.addEventListener('blur', () => {
			if (boardTitleInput.value) {
				boards.splice(0, 1, {
					id: 0,
					title: boardTitleInput.value,
					tasks: [],
				});
				save(boards);
				renderBoards();
				boardTitleInput.value = '';
			} else {
				boards.splice(0, 1);
				boards.forEach((item, index) => {
					item.id = index;
				});
				save(boards);
				renderBoards();
				boardTitleInput.value = '';
			}
		});
	});
}
