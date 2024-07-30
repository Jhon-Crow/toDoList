import { cleanNodes } from '../api/helpers/helpers.js';
import { stateToolkit } from '../../services/stateService.js';

const timerAttributes = {
	DEADLINE: 'deadline',
	ID: 'id',
};

export class TimerComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get name() {
		return 'timer-component';
	}

	static get observedAttributes() {
		return Object.values(timerAttributes);
	}

	#deadline;
	#id;
	#timerElem;
	#timer;

	#ATTRIBUTES_MAPPING = new Map([
		[timerAttributes.DEADLINE, this.#setDeadline.bind(this)],
		[timerAttributes.ID, this.#setId.bind(this)],
	]);

	#setDeadline(_, newDeadline) {
		this.#deadline = newDeadline;
		this.#render();
	}

	#setId(_, id) {
		this.#id = id;
		this.#update;
	}

	#isFailed() {
		const id = this.#id;
		stateToolkit.patchToService(id, { isDone: false });
	}

	connectedCallback() {
		this.#render();

		for (let attrName of this.constructor.observedAttributes) {
			if (this.hasAttribute(attrName)) {
				const attrValue = this.getAttribute(attrName);
				this.attributeChangedCallback(attrName, null, attrValue);
			}
		}
		this.#timer = setInterval(() => this.#update(), 1000);
	}

	#render(deadline = this.#deadline) {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = `<time-formatted-component unixtime=${deadline !== '' ? deadline : undefined}>
    </time-formatted-component>
    `;
		cleanNodes(this.shadowRoot).appendChild(templateElem.content.cloneNode(true));
		this.#timerElem = this.shadowRoot.firstElementChild;
	}

	#update() {
		if (this.#deadline) {
			this.timeLeft = this.#deadline - Date.now();
		}
		if (this.timeLeft > 0) {
			this.#timerElem.setAttribute('unixtime', this.timeLeft);
			this.dispatchEvent(new CustomEvent('tick', { bubbles: true, detail: this.timeLeft }));
		} else {
			this.#timerElem.setAttribute('unixtime', this.#deadline !== '' ? '0' : undefined);
			this.#isFailed();
			clearInterval(this.#timer);
		}
	}

	disconnectedCallback() {
		clearInterval(this.#timer);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTES_MAPPING.get(name);
			this.#selectAndCallIfExist(callback, newValue);
		}
	}

	#selectAndCallIfExist(callback, value) {
		if (this.#timerElem) {
			callback.call(this, this.#timerElem, value);
		}
	}
}
