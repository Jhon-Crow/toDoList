import { stateToolkit } from '../../services/stateService.js';

// console.log(data)
export class toDoPage extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		// this.innerHTML = `<to-do-form></to-do-form>`
		const data = stateToolkit.getAllFromService();
		if (data) {
			data.map((item) => {
				this.innerHTML += `<div>${item.id}</div>`;
			});
		}
	}
}
// в index.js
// customElements.define('to-do-page', toDoPage);
//ререндер при разнице между стэйтом и локал стэйтом
