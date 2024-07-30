import { stateToolkit } from '../../../services/stateService.js';

export const stateDecorator =
	(initialState = []) =>
	(story) => {
		initialState.map((item) => {
			stateToolkit.setToService(item.id, item);
		});

		return story();
	};
