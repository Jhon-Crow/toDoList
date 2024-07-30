import { stateToolkit } from '../../services/stateService.js';

export class toDoPage extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = ``;
		const data = stateToolkit.getAllFromService();
		if (data) {
			data.map((item) => {
				this.innerHTML += `<div>${item.id}</div>`;
			});
		}
	}
}
