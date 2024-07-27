import {saveToLocalStorage} from "../helpers/saveToLocalStorage.js";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage.js";

const startArray = getFromLocalStorage() || []

console.log('START', startArray)




const stateMap = new Map();
startArray.forEach(obj => {
    stateMap.set(obj.id, obj)
})

console.log(stateMap)

export function stateService(action, toDoItemId){
    switch (action){
        case 'SET':
            break;
        case 'PATCH':
            break;
        case 'GET':
            // stateMap.get(toDoItemId)
            break;
        case 'DELETE':
            break;
    }
}

console.log(startArray)


// let endArray = [...startArray, {
//     id: Date.now(),
//     deadline: 270724,
//     text: 'string',
//     isDone: undefined
// }]



// console.log(endArray)
//
window.addEventListener('unload', () => {
    const endArray = Array.from(stateMap.values());

    if (startArray !== endArray){
        saveToLocalStorage(endArray)
    }
})







console.log('stateService.js');