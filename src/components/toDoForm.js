class ToDoItem {
    constructor(id, deadline, text, isDone) {
            this.id = String(id)
            this.deadline = Number(deadline)
            this.text = String(text)
            this.isDone = isDone
    }
}

class ToDoInput {
    constructor(id, type, placeholder) {
        this.inputElement = document.createElement('input');
        this.inputElement.id = String(id);
        this.inputElement.type = type;
        this.inputElement.placeholder = placeholder;
    }
    getElement() {
        return this.inputElement;
    }
}

const toDoTextInput = new ToDoInput('toDoInput', 'text', 'task text');
const toDoDataInput = new ToDoInput('toDoInput', 'datetime-local');

document.body.appendChild(toDoTextInput.getElement());
document.body.appendChild(toDoDataInput.getElement());





// stateService.setToService(test.id, test)
