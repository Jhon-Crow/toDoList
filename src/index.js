import {toDoList} from './components/toDoList/toDoList.js'
import {LOCALSTORAGE_TODO_DATA} from "./consts/consts.js";
// import './components/toDoList/toDoList.css'

customElements.define('to-do-list', toDoList);

document.body.innerHTML = `
    <to-do-list class="to-do-list" id=${LOCALSTORAGE_TODO_DATA}></to-do-list>
`