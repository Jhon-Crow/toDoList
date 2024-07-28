import {stateToolkit} from '../services/stateService.js'

const app = document.getElementById('app')
class ToDoItem {
    constructor(id, deadline, text, isDone) {
        this.id = String(id);
        this.deadline = Number(deadline);
        this.text = String(text);
        this.isDone = isDone;
    }
}

class ToDoInput {
    constructor(id, type, placeholder) {
        this.inputElement = document.createElement('input');
        this.inputElement.id = String(id);
        this.inputElement.type = type;
        this.inputElement.placeholder = placeholder || '';
    }
    getElement() {
        return this.inputElement;
    }
}

const toDoTextInput = new ToDoInput('toDoInputText', 'text', 'task text');
const toDoDataInput = new ToDoInput('toDoInputData', 'datetime-local');

app.appendChild(toDoTextInput.getElement());
app.appendChild(toDoDataInput.getElement());

const button = document.createElement('button');
button.textContent = 'Add ToDo';
app.appendChild(button);

button.addEventListener('click', () => {
    const text = toDoTextInput.getElement().value;
    const deadline = new Date(toDoDataInput.getElement().value).getTime();
    if (text && (deadline > Date.now())) {
        const newToDo = new ToDoItem(crypto.randomUUID(), deadline, text, undefined);

        stateToolkit.setToService(newToDo.id, newToDo);
    } else {
        alert('empty input')
    }
});
