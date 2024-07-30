import { TimeFormattedComponent } from '../../src/components/TimeFormatted/TimeFormattedComponent.js';
import { TimerComponent } from '../../src/components/Timer/TimerComponent.js';
import { ToDoCardComponent } from '../../src/components/ToDoCard/ToDoCardComponent.js';
import { styleDecorator } from '../../src/lib/storybook/styleDecorator/styleDecorator.js';
import { stateDecorator } from '../../src/lib/storybook/stateDecorator/stateDecorator.js';
import { themeSwitcher } from '../../src/components/themeSwitcher/themeSwitcher.js';

const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [styleDecorator, stateDecorator()],
};

[TimeFormattedComponent, TimerComponent, ToDoCardComponent, themeSwitcher].map((component) => {
	customElements.define(component.name, component);
});

export default preview;
