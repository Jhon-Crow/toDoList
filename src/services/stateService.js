import {saveToLocalStorage} from "../helpers/saveToLocalStorage.js";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage.js";

const startArray = getFromLocalStorage()

console.log('START',startArray)













window.addEventListener('unload', () => {
    if (startArray !== endArray){
        saveToLocalStorage(endArray)
    }
})







console.log('stateService.js');