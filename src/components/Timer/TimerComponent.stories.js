import { stateDecorator } from '../../lib/storybook/stateDecorator/stateDecorator.js';

export default {
	title: 'TimerComponent',
	render: (args) => {
		return `<timer-component deadline=${args.deadline} id=${args.id} />`;
	},
	args: {
		id: '1',
	},
	decorators: [
		stateDecorator([
			{
				id: '1',
			},
		]),
	],
};

export const OneMinuteLeft = {
	args: {
		deadline: Date.now() + 60000,
	},
};

export const OneHourLeft = {
	args: {
		deadline: Date.now() + 3600000,
	},
};

export const OneThousandHourLeft = {
	args: {
		deadline: Date.now() + 3600000000,
	},
};

export const Finish = {
	args: {
		deadline: Date.now(),
	},
};
