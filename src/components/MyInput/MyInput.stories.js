import { MyInput } from './MyInput.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'MyInput',
	tags: ['autodocs'],
	render: (args) => MyInput(args),
	argTypes: {
		color: {
			// control: { type: 'select' },
			// options: ['black', 'red', 'blue'],
		},
		size: {
			// control: { type: 'select' },
			// options: ['small', 'medium', 'large'],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text = {
	args: {
		type: 'text',
		maxLength: 20,
	},
};

export const DataTime = {
	args: {
		type: 'datetime-local',
	},
};
