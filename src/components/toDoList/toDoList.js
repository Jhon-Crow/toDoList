import { stateToolkit } from '../../services/stateService.js';

export class toDoList extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = ``;
		const data = stateToolkit.getAllFromService();
		if (data) {
			data.map((item) => {
				this.innerHTML += `<toDoCard>${item.id}</toDoCard>`;
			});
		} else {
			this.innerHTML += `<div class="empty-light"></div>
								<h1 class="empty-title">Empty...</h1>
`;
		}
	}
}
