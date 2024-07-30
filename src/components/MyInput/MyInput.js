import { html } from 'lit';
import './MyInput.css';

export const MyInput = ({ type, placeholder, maxLength, id }) => {
	return html`
		<input
			class="input"
			id="${id}"
			type="${type}"
			placeholder="${placeholder || ''}"
			maxlength="${maxLength || ''}"
		/>
	`;
};
