import { toDoForm } from './components/toDoForm/toDoForm.js';
import { toDoPage } from './components/toDoPage/toDoPage.js';
import { toDoList } from './components/toDoList/toDoList.js';

customElements.define('to-do-page', toDoPage);
customElements.define('to-do-form', toDoForm);
customElements.define('to-do-list', toDoList);

document.body.innerHTML = `
<to-do-page></to-do-page>
`;
