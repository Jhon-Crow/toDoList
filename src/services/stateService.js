import {saveToLocalStorage} from "../helpers/saveToLocalStorage.js";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage.js";

const startArray = getFromLocalStorage() || []

console.log('START', startArray)




let stateMap = new Map();
if (startArray.length){
    startArray.forEach(obj => {
        stateMap.set(obj.id, obj)
    })
}

console.log(stateMap)

export function stateService(action, toDoItemId){
    switch (action){
        case 'SET':
            break;
        case 'PATCH':
            break;
        case 'GET':
            return stateMap.get(toDoItemId)
        case 'DELETE':
            stateMap.delete(toDoItemId)
    }
}

// console.log(stateService('DELETE', 1722099638931))
// console.log(stateService('GET', 1722099638931))

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