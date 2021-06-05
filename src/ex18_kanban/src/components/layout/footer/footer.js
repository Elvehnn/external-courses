import css from './footer.module.css';
import HtmlElement from '../../HtmlElement/HtmlElement';
import { footerCounters } from './footerCounters.js';

export class Footer {
	counters = footerCounters();
	html = `
                <div class="footer-tasks-info">
                        <div class="footer-tasks__counter" id="active-tasks">Active tasks: ${this.counters[0]};</div>
                         <div class="footer-tasks__counter" id="finished-tasks">Finished tasks: ${this.counters[1]};</div>
                </div>
                <div class="owner">Kanban board by Elena Shashina, 2021</div>
        `;
	constructor() {
		this.element = new HtmlElement({
			type: 'footer',
			className: css.footer,
			html: this.html,
		}).element;
	}
}
