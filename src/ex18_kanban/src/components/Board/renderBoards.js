import { Board } from './Board.js';
import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../localstorage.js';

function checkEmptyList() {
	let boards = load();

	let addButtons = document.querySelectorAll('.add-task-button');
	boards.forEach((element, index) => {
		if (index < boards.length - 1) {
			if (element.tasks.length) {
				addButtons[index + 1].disabled = false;
				return;
			}
			addButtons[index + 1].disabled = true;
		}
	});
}

export function renderBoards() {
	let boards = load();

	if (boards.length === 0) {
		document.querySelector('.container').innerHTML = `
				<div class="warning">There is no task lists. Please, use "Create new list" on a top</div>
			`;
		return;
	}

	let container = document.querySelector('.container');
	container.innerHTML = '';

	let newBoard, newHtml;

	boards.forEach((element) => {
		if (element.title !== '@@New@@') {
			newHtml = `
					<div class="board__header">
						<h2 class="board__title">${element.title}</h2>
						<div class="popup__button">
							<div class="popup__button_dot"></div>
						</div>
					</div>
					<ul class="task-list" data-task-list-id='${element.id}'>
					</ul>
					<button class='add-task-button' data-button-id='${element.id}'>+ Add card</button>
				`;
		} else {
			newHtml = `
					<div class="board__header">
						<input class="title-input" type='text' placeholder='Type board title'></input>
						<div class="popup__button">
							<div class="popup__button_dot"></div>
						</div>
					</div>
					<ul class="task-list" data-task-list-id='${element.id}'>
					</ul>
					<button class='add-task-button' data-button-id='${element.id}' disabled>+ Add card</button>
				`;
		}
		newBoard = new Board({
			boardId: element.id,
			name: element.title,
			htmlText: newHtml,
		});

		container.appendChild(newBoard.element);
	});
	checkEmptyList();
}
