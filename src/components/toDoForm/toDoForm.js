import { stateToolkit } from '../../services/stateService.js';

class ToDoItem {
	constructor(id, deadline, text, isDone) {
		this.id = String(id);
		this.deadline = Number(deadline);
		this.text = String(text);
		this.isDone = isDone;
	}
}

class toDoForm extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	render() {
		this.innerHTML = `
			<input class="input" id="toDoInputText" type="text" placeholder="Need to do..." maxlength="20" />
			<input id="toDoInputData" type="datetime-local" />
			<button class="button" id="addToDoButton">Add ToDo</button>
		`;
	}
}
customElements.define('to-do-form', toDoForm);

const button = document.getElementById('addToDoButton');
const textInput = document.getElementById('toDoInputText');
const dateInput = document.getElementById('toDoInputData');

button.addEventListener('click', () => {
	const text = textInput.value;
	const deadline = new Date(dateInput.value).getTime();
	if (text && deadline > Date.now()) {
		const newToDo = new ToDoItem(crypto.randomUUID(), deadline, text, undefined);
		stateToolkit.setToService(newToDo.id, newToDo);
	} else {
		alert('incorrect input');
	}
});
