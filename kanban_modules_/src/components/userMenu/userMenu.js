import HtmlElement from '../HtmlElement/HtmlElement';
import css from './userMenu.module.css';

export function userMenu() {
	let element = new HtmlElement({
		type: 'ul',
		className: css.dropDown,
		html: `
                <li class="drop-down__item">Profile</li>
                <li class="drop-down__item">My tasks</li>
                <li class="drop-down__item">Log out</li>
            `,
	}).element;

	let menu = document.querySelector('.user__menu');

	let menuArrow = document.querySelector('.menu__arrow');

	menuArrow.addEventListener('click', () => {
		if (menuArrow.classList.contains('menu__arrow_shown')) {
			element.remove();
			menuArrow.classList.remove('menu__arrow_shown');
		} else {
			menuArrow.classList.add('menu__arrow_shown');
			menu.appendChild(element);
		}
	});

	return element;
}
