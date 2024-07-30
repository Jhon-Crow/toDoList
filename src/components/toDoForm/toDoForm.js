import { stateToolkit } from '../../services/stateService.js';
import { ELEM_RERENDER_ON_FORM_BUTTON_CLICK } from '../../consts/consts.js';

class ToDoItem {
	constructor(id, deadline, text, isDone) {
		this.id = String(id);
		this.deadline = Number(deadline);
		this.text = String(text);
		this.isDone = isDone;
	}
}
export class toDoForm extends HTMLElement {
	static get name() {
		return 'to-do-form-component';
	}
	connectedCallback() {
		this.render();
		const button = document.getElementById('addToDoButton');
		const textInput = document.getElementById('toDoInputText');
		const dateInput = document.getElementById('to-do-data-input');

		button.addEventListener('click', () => {
			const text = textInput.value;
			const deadline = new Date(dateInput.value).getTime();

			if (text && deadline > Date.now()) {
				const newToDo = new ToDoItem(crypto.randomUUID(), deadline, text, undefined);
				stateToolkit.setToService(newToDo.id, newToDo);
				const elem = document.getElementById(ELEM_RERENDER_ON_FORM_BUTTON_CLICK);
				elem.render();
			} else {
				alert('incorrect input');
			}
		});
	}
	render() {
		this.innerHTML = `
		<div class="to-do-form__wrapper">
			<input class="input" id="toDoInputText" type="text" placeholder="Need to do..." maxlength="20" />
			<input class="button" id="to-do-data-input" type="datetime-local" />
			<button class="button" id="addToDoButton">Add ToDo</button>
			<theme-switcher-component></theme-switcher-component>
		</div>		
`;
	}
}