export default {
	title: 'TimeFormattedComponent',
	render: (args) => {
		return `<time-formatted-component unixtime=${args.unixTime} />`;
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneSec = {
	args: {
		unixTime: 1000,
	},
};

export const OneMinute = {
	args: {
		unixTime: 60000,
	},
};

export const OneHour = {
	args: {
		unixTime: 3600000,
	},
};

export const FiftyNineMinFiftyNineSec = {
	args: {
		unixTime: 3599000,
	},
};
export const ThreeHundgredHours = {
	args: {
		unixTime: 1080000000,
	},
};

export const Null = {
	args: {
		unixTime: 0,
	},
};

export const Empty = {
	args: {
		unixTime: undefined,
	},
};
