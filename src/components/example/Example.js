import { html } from 'lit';
import './example.css';

export const Example = ({ label, size, color }) => {
	return html`
		<p class=${['example', `example_${size || 'medium'}`, `example_${color || 'black'}`].join(' ')}>${label}</p>
	`;
};
