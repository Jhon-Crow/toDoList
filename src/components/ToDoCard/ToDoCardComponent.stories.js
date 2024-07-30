import { stateDecorator } from '../../lib/storybook/stateDecorator/stateDecorator.js';

export default {
	title: 'ToDoCardComponent',
	render: (args) => {
		return `<to-do-card-component id=${args.id}></to-do-card-component>`;
	},
};

export const Primary = {
	args: {
		id: '1',
	},
	decorators: [stateDecorator([{ id: '1', text: 'TODO#1', deadline: Date.now() + 1000000 }])],
};

export const Done = {
	args: {
		id: '1',
	},
	decorators: [stateDecorator([{ id: '1', text: 'TODODone', deadline: undefined, isDone: true }])],
};

export const Failed = {
	args: {
		id: '1',
	},
	decorators: [stateDecorator([{ id: '1', text: 'TODOFailed', deadline: Date.now(), isDone: false }])],
};
