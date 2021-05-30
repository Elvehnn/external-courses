import('./styles/main.css');
import { Header } from './components/layout/header/header.js';
import { userMenu } from './components/userMenu/userMenu.js';
import { renderBoards } from './components/renderBoards.js';
import {
	saveToLocalStorage as save,
	loadFromLocalStorage as load,
} from './components/localstorage.js';
import { Footer } from './components/layout/footer/footer.js';

const header = new Header();
document.body.prepend(header.element);
userMenu();

let boards;

if (load()) {
	boards = load();
}
boards = [
	{
		id: 0,
		title: 'Backlog',
		tasks: [
			{
				id: 0,
				name: 'Clean home',
			},
		],
	},
	{
		id: 1,
		title: 'Ready',
		tasks: [],
	},
	{
		id: 2,
		title: 'In Progress',
		tasks: [],
	},
	{
		id: 3,
		title: 'Finished',
		tasks: [],
	},
];
// save(boards);
renderBoards();

const footer = new Footer();
document.body.append(footer.element);
