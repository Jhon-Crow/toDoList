import { themeSwitcher } from './components/themeSwitcher/themeSwitcher.js';
import { toDoList } from './components/toDoList/toDoList.js';
import { TimeFormattedComponent } from './components/TimeFormatted/TimeFormattedComponent.js';
import { TimerComponent } from './components/Timer/TimerComponent.js';
import { ToDoCardComponent } from './components/ToDoCard/ToDoCardComponent.js';
import { toDoPage } from './components/toDoPage/toDoPage.js';
import { toDoForm } from './components/toDoForm/toDoForm.js';

[TimeFormattedComponent, TimerComponent, ToDoCardComponent, toDoList, toDoForm, themeSwitcher, toDoPage].map(
	(component) => {
		customElements.define(component.name, component);
	},
);

document.body.innerHTML = `
		<to-do-page-component></to-do-page-component>
`;
