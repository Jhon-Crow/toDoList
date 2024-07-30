// import { toDoForm } from './components/toDoForm/toDoForm.js';
// import { toDoPage } from './components/toDoPage/toDoPage.js';
// import {toDoList} from "./components/toDoList/toDoList.js";

// customElements.define('to-do-page', toDoPage);
// customElements.define('to-do-form', toDoForm);
// customElements.define('to-do-list', toDoList);

// document.body.innerHTML = `
// <to-do-list id="to-do-list"></to-do-list>
// <!--<to-do-form></to-do-form>-->
// <!--<to-do-page id="to-do-page"></to-do-page>-->
// // `;
import { toDoForm } from './components/toDoForm/toDoForm.js';
import { toDoPage } from './components/toDoPage/toDoPage.js';
import { ELEM_RERENDER_ON_FORM_BUTTON_CLICK } from './consts/consts.js';

customElements.define('to-do-page', toDoPage);
customElements.define('to-do-form', toDoForm);

document.body.innerHTML = `
<to-do-form></to-do-form>
<to-do-page id=${ELEM_RERENDER_ON_FORM_BUTTON_CLICK}></to-do-page>
`;
