import css from './header.module.css';
import HtmlElement from '../../HtmlElement/HtmlElement';
// import { UserMenu } from '../../UserMenu/UserMenu.js';
export class Header {
	element = null;
	html = `
        
                    <div class="logo">
                        <div class="logo__icon"></div>
                        <h1 class="logo__title">Awesome Kanban Board</h1>
                    </div>
                    <div class ="user">
                        <button class="add-button">
                        <div class="add-button__icon"></div>
                        <p class="add-button__title">Create new list</p>
                        </button>
                        <div class="user__menu">
                            <div class="user__avatar"></div>
                            <div class="menu__arrow"></div>
                        </div>
                    </div>
    `;

	constructor() {
		this.element = new HtmlElement({
			type: 'header',
			className: css.header,
			html: this.html,
		}).element;
	}
}
