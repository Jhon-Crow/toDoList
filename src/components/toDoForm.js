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

document.body.appendChild(toDoTextInput.getElement());
document.body.appendChild(toDoDataInput.getElement());

const button = document.createElement('button');
button.textContent = 'Add ToDo';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const text = toDoTextInput.getElement().value;
    const deadline = new Date(toDoDataInput.getElement().value).getTime();
    if (text && deadline) {
        const newToDo = new ToDoItem(Date.now(), deadline, text, undefined);

        console.log(newToDo);
        stateService.setToService(newToDo.id, newToDo);
    } else {
        alert('empty input')
    }
});
