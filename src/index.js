import { themeSwitcher } from './components/themeSwitcher/themeSwitcher.js';

customElements.define(themeSwitcher.name, themeSwitcher);

// document.body.innerHTML = `<theme-switcher-component></theme-switcher-component>`
import { toDoList } from './components/toDoList/toDoList.js';
import { TimeFormattedComponent } from './components/TimeFormatted/TimeFormattedComponent.js';
import { TimerComponent } from './components/Timer/TimerComponent.js';
import { ToDoCardComponent } from './components/ToDoCard/ToDoCardComponent.js';
import { toDoPage } from './components/toDoPage/toDoPage.js';
import { toDoForm } from './components/toDoForm/toDoForm.js';
// import './components/toDoList/toDoList.css'

[TimeFormattedComponent, TimerComponent, ToDoCardComponent, toDoList, toDoForm, toDoPage].map((component) => {
	customElements.define(component.name, component);
});
// customElements.define('to-do-list', toDoList);

document.body.innerHTML = `
		<to-do-page-component></to-do-page-component>
`;
