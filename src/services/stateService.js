import {saveToLocalStorage} from "../helpers/saveToLocalStorage.js";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage.js";

const startArray = getFromLocalStorage() || []

let stateMap = new Map();
if (startArray.length){
    startArray.forEach(obj => {
        stateMap.set(obj.id, obj)
    })
}

export function stateService(action, toDoItemId, newDataObject){
    switch (action){
        case 'SET':
            if (typeof toDoItemId === 'string'){
                stateMap.set(toDoItemId, {...newDataObject, id: toDoItemId})
            } else {
                console.log('incorrect ID!')
            }
            break;
        case 'PATCH':
            if (stateMap.get(toDoItemId)){
                const oldObject = stateMap.get(toDoItemId)
                stateMap.set(toDoItemId, {...oldObject, id: toDoItemId, ...newDataObject})
            } else {
                console.log('Item Not Exists')
            }
            break;
        case 'GET':
            return stateMap.get(toDoItemId)
        case 'DELETE':
            if (typeof toDoItemId === 'string') {
                stateMap.delete(toDoItemId)
            } else {
                console.log('incorrect ID!')
            }
    }
}

window.addEventListener('unload', () => {
    const endArray = Array.from(stateMap.values());
    if (startArray !== endArray){
        saveToLocalStorage(endArray)
    }
})