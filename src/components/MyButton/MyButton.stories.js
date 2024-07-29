import { MyButton } from './MyButton.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'MyButton',
	tags: ['autodocs'],
	render: (args) => MyButton(args),
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
export const Primary = {
	args: {
		children: 'Button',
	},
};

// export const DataTime = {
// 	args: {
// 		type: 'datetime-local',
// 	},
// };
