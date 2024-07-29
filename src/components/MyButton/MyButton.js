import { html } from 'lit';
import './MyButton.css';

export const MyButton = ({ id, children }) => {
	return html` <button class="button" id="${id}">${children || ''}</button> `;
};
