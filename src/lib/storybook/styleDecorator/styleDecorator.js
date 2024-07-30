import '../../../styles/index.css';
import './storybook.css';

export const styleDecorator = (story) => {
	document.body.className = 'app_theme_dark';
	return story();
};
