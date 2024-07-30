import { ELEM_RERENDER_ON_FORM_BUTTON_CLICK } from '../../consts/consts.js';

export class toDoPage extends HTMLElement {
	static get name() {
		return 'to-do-page-component';
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = ``;
		this.innerHTML += `
			<div class="to-do-page__wrapper">
				<to-do-form-component></to-do-form-component>
				<to-do-list-component id=${ELEM_RERENDER_ON_FORM_BUTTON_CLICK}></to-do-list-component>
			</div>			
`;
	}
}
