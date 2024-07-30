import { stateToolkit } from '../../services/stateService.js';
import { cleanNodes } from '../api/helpers/helpers.js';
import { getStyles } from './ToDoCard.styles.js';

const toDoCardAttributes = {
	ID: 'id',
};

export class ToDoCardComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get name() {
		return 'to-do-card-component';
	}

	static get observedAttributes() {
		return Object.values(toDoCardAttributes);
	}

	#id;
	#data = {};
	#toDoCard;
	#todoChecked;
	#input;

	#ATTRIBUTES_MAPPING = new Map([[toDoCardAttributes.ID, this.#getDataById.bind(this)]]);

	#getDataById(_, ID) {
		this.#data = stateToolkit.getFromService(ID);
		this.#setTodoChecked(this.#data.isDone || '');
		this.#render();
	}

	#setTodoChecked() {
		if (this.#data.isDone === undefined) {
			this.#todoChecked = '';
		} else {
			if (this.#data.isDone) {
				this.#todoChecked = 'todo__text_done';
			} else {
				this.#todoChecked = 'todo__text_failed';
			}
		}
	}

	#setStateTodoChecked() {
		this.#input.classList = ['todo_checkbox', this.#todoChecked];
	}

	connectedCallback() {
		this.#render();

		for (let attrName of this.constructor.observedAttributes) {
			if (this.hasAttribute(attrName)) {
				const attrValue = this.getAttribute(attrName);
				this.attributeChangedCallback(attrName, null, attrValue);
			}
		}
	}

	#render(data = this.#data) {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = `${getStyles()}
        <div class="todo">
            <label class="todo__checkbox_container">
                <input type="checkbox" class="todo__checkbox"/>
				<span class="todo__checkmark"></span>
            </label>
            <p class="todo__text ${this.#todoChecked}">${data.text ? data.text.toUpperCase() : null}</p>
            <button class="todo__treshbtn">
            </button>
        </div>
        <timer-component deadline=${data.deadline ? data.deadline : ''}></timer-component>`;
		cleanNodes(this.shadowRoot).appendChild(templateElem.content.cloneNode(true));
		this.#toDoCard = this.shadowRoot.firstElementChild;
		this.#input = this.shadowRoot.querySelector('.todo__checkbox');
		this.#input.checked = data.isDone;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTES_MAPPING.get(name);
			this.#selectAndCallIfExist(callback, newValue);
		}
	}

	#selectAndCallIfExist(callback, value) {
		if (this.#toDoCard) {
			callback.call(this, this.#toDoCard, value);
		}
	}
}
