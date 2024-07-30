import { themeSwitcher } from './components/themeSwitcher/themeSwitcher.js';

customElements.define(themeSwitcher.name, themeSwitcher);

// document.body.innerHTML = `<theme-switcher-component></theme-switcher-component>`
import { toDoList } from './components/toDoList/toDoList.js';
import { LOCALSTORAGE_TODO_DATA } from './consts/consts.js';
import { TimeFormattedComponent } from './components/TimeFormatted/TimeFormattedComponent.js';
import { TimerComponent } from './components/Timer/TimerComponent.js';
import { ToDoCardComponent } from './components/ToDoCard/ToDoCardComponent.js';
// import './components/toDoList/toDoList.css'

[TimeFormattedComponent, TimerComponent, ToDoCardComponent, toDoList].map((component) => {
	customElements.define(component.name, component);
});
// customElements.define('to-do-list', toDoList);

document.body.innerHTML = `
    <to-do-list-component class="to-do-list" id=${LOCALSTORAGE_TODO_DATA}></to-do-list-component>
    <theme-switcher-component></theme-switcher-component>
`;
