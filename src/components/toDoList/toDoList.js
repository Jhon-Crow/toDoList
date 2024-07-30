import { stateToolkit } from '../../services/stateService.js';

export class toDoList extends HTMLElement {
	static get name() {
		return 'to-do-list-component';
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = ``;
		const data = stateToolkit.getAllKeysFromService();
		if (data) {
			data.map((key) => {
				this.innerHTML += `<to-do-card-component id="${key}"></to-do-card-component>`;
			});
		} else {
			this.innerHTML += `<div class="empty-light"></div>
								<h1 class="empty-title">Empty...</h1>
`;
		}
	}
}
