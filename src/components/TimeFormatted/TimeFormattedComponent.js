import { unixTimeToTimer } from '../../lib/helpers/unixTimeToTimer.js';
import { cleanNodes } from '../api/helpers/helpers.js';

const timeFormattedAttributes = {
	UNIX_TIME: 'unixtime',
};

export class TimeFormattedComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	#unixTime;
	#timeFormatted;

	static get name() {
		return 'time-formatted-component';
	}

	static get observedAttributes() {
		return Object.values(timeFormattedAttributes);
	}

	#ATTRIBUTES_MAPPING = new Map([[timeFormattedAttributes.UNIX_TIME, this.#setUnixTime.bind(this)]]);

	#render(unixTime = this.#unixTime) {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = `<p>${unixTimeToTimer(unixTime)}</p>`;
		cleanNodes(this.shadowRoot).appendChild(templateElem.content.cloneNode(true));
		this.#timeFormatted = this.shadowRoot.firstElementChild;
	}

	#setUnixTime(_, newTime) {
		this.#unixTime = newTime;
		this.#render();
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

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTES_MAPPING.get(name);
			this.#selectAndCallIfExist(callback, newValue);
		}
	}

	#selectAndCallIfExist(callback, value) {
		if (this.#timeFormatted) {
			callback.call(this, this.#timeFormatted, value);
		}
	}
}
