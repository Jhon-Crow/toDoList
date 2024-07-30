import { toDoForm } from './toDoForm.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'toDoForm',
	tags: ['autodocs'],
	render: (args) => toDoForm(args),
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
		// label: 'toDoForm',
	},
};
//
// export const Red = {
// 	args: {
// 		label: 'Red toDoForm',
// 		color: 'red',
// 	},
// };
//
// export const Large = {
// 	args: {
// 		label: 'Red toDoForm',
// 		size: 'large',
// 	},
// };
