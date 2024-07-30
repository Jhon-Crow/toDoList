import { ELEM_RERENDER_ON_FORM_BUTTON_CLICK } from '../../consts/consts.js';

export class toDoPage extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = ``;
		this.innerHTML += `
			<to-do-form></to-do-form>
			<to-do-list id=${ELEM_RERENDER_ON_FORM_BUTTON_CLICK}></to-do-list>
`;
		// if (data) {
		// 	data.map((item) => {
		// 		this.innerHTML += `<div>${item.id}</div>`;
		// 	});
		// }
	}
}
