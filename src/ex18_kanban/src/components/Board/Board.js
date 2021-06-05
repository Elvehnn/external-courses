import HtmlElement from '../HtmlElement/HtmlElement';
import { createPopup } from '../popupMenu/createPopup.js';
import { renderBoards } from './renderBoards.js';
import css from './Board.module.css';
import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from '../localstorage.js';
import { updateCounters } from '../layout/footer/updateCounters.js';
export class Board {
	id = null;
	element = null;
	addButton = null;
	inputTask = null;
	dropDownTasks = null;

	constructor({ boardId, name, htmlText }) {
		this.id = boardId;
		this.name = name;
		this.data = load();
		this.element = new HtmlElement({
			className: css.board,
			id: boardId,
			html: htmlText,
		}).element;

		this.getBoardTasks();

		this.addButton = this.element.querySelector(
			'button[class=add-task-button]'
		);
		this.addButton.addEventListener('click', this.addTaskButtonHandler);

		this.popupButton = this.element.querySelector('.popup__button');
		this.popupButton.addEventListener('click', this.popupButtonHandler);
	}

	getBoardTasks = () => {
		this.data = load();
		let tasks = this.data[this.id].tasks;
		this.renderTaskList(tasks);
	};

	renderTaskList = (tasks) => {
		let taskList = '';
		tasks.forEach((item) => {
			taskList += `<li class="list__item">${item.name}</li>`;
		});
		this.element.querySelector(
			`ul[data-task-list-id='${this.id}'`
		).innerHTML = taskList;
	};

	createInputForm = () => {
		let taskInput = new HtmlElement({
			type: 'input',
			className: 'task-input',
			id: 'task-input',
		}).element;
		taskInput.type = 'text';
		taskInput.placeholder = 'Type task name';
		taskInput.autocomplete = 'off';
		taskInput.addEventListener('blur', this.addTask);
		return taskInput;
	};

	addTask = () => {
		this.inputTask = this.element.querySelector('input[id=task-input]');
		if (this.inputTask.value) {
			this.data[this.id].tasks.push({
				id: this.data[this.id].tasks.length,
				name: this.inputTask.value,
			});
			save(this.data);
			renderBoards();
			updateCounters();
			this.inputTask.value = '';
		}
		this.inputTask.remove();
	};

	addTaskButtonHandler = () => {
		if (this.id === 0) {
			let taskInput = this.createInputForm();
			this.element
				.querySelector(`ul[data-task-list-id='${this.id}']`)
				.appendChild(taskInput);
			taskInput.focus();
		} else {
			let taskList = this.element.querySelector('.task-list');
			taskList.appendChild(this.dropDownTasks());
			this.addButton.classList.add('add-task-button-hidden');
		}
	};

	dropDownTasks = () => {
		let listItem = document.createElement('li');

		let dropDownTasks = new HtmlElement({
			type: 'ul',
			className: 'dropdown-tasks',
		}).element;

		let dropDownTasksItem = `<li class="dropdown-tasks__item">
        Выберите задачу из списка</li>`;
		this.data = load();
		this.data[this.id - 1].tasks.forEach((item) => {
			dropDownTasksItem += `<li class="dropdown-tasks__item">${item.name}
            <input class="checkbox" type="checkbox"></li>`;
		});

		dropDownTasks.innerHTML = dropDownTasksItem;

		listItem.appendChild(dropDownTasks);

		let submit = this.createSubmitButton();
		listItem.appendChild(submit);
		this.dropDownTasks = listItem;

		document.querySelector('.main').addEventListener('click', (event) => {
			let target = event.target;
			if (
				!target.classList.contains('add-task-button') &&
				!target.classList.contains('checkbox')
			) {
				renderBoards();
				this.addButton.classList.remove('add-task-button-hidden');
				return;
			}
		});

		return this.dropDownTasks;
	};

	createSubmitButton = () => {
		let submitButton = new HtmlElement({
			type: 'button',
			className: 'submit',
			html: 'Add',
		}).element;
		submitButton.addEventListener('click', this.moveTasks);
		return submitButton;
	};

	moveTasks = () => {
		let checkbox = document.querySelectorAll('.checkbox');
		checkbox.forEach((element) => {
			if (element.checked) {
				let taskToMove = this.data[this.id - 1].tasks.find(
					(item) => item.name === element.parentNode.innerText
				);
				this.data[this.id - 1].tasks = this.data[
					this.id - 1
				].tasks.filter((item) => item.name !== taskToMove.name);
				this.data[this.id].tasks.push(taskToMove);
			}
		});
		save(this.data);
		renderBoards();
		updateCounters();
		this.dropDownTasks.remove();
		this.addButton.classList.remove('add-task-button-hidden');
	};

	popupButtonHandler = () => {
		let popup = createPopup(this.id);
		this.popupButton.appendChild(popup);
	};
}
