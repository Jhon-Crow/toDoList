import { Example } from './Example.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Example',
	tags: ['autodocs'],
	render: (args) => Example(args),
	argTypes: {
		color: {
			control: { type: 'select' },
			options: ['black', 'red', 'blue'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		label: 'Example',
	},
};

export const Red = {
	args: {
		label: 'Red Example',
		color: 'red',
	},
};

export const Large = {
	args: {
		label: 'Red Example',
		size: 'large',
	},
};
