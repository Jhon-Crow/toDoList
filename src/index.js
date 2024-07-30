import { toDoForm } from './components/toDoForm/toDoForm.js';
import { toDoPage } from './components/toDoPage/toDoPage.js';

customElements.define('to-do-page', toDoPage);
customElements.define('to-do-form', toDoForm);

document.body.innerHTML = `
<to-do-form></to-do-form>
<to-do-page id="to-do-page"></to-do-page>
`;
