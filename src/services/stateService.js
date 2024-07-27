import {saveToLocalStorage} from "../helpers/saveToLocalStorage.js";
import {getFromLocalStorage} from "../helpers/getFromLocalStorage.js";

const startArray = getFromLocalStorage() || []

const stateMap = new Map();
if (startArray.length){
    startArray.forEach(obj => {
        stateMap.set(obj.id, obj)
    })
}

export function stateService(action, toDoItemId, newDataObject){
    switch (action){
        case 'SET':
            if (typeof toDoItemId === 'string' && !stateToolkit.getFromService(toDoItemId)){
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
            if (stateMap.get(toDoItemId)){
                return stateMap.get(toDoItemId)
            } else {
                console.log('Item not found!')
            }
        case 'DELETE':
            if (typeof toDoItemId === 'string') {
                stateMap.delete(toDoItemId)
            } else {
                console.log('incorrect ID!')
            }
    }
}

export const stateToolkit = {};

stateToolkit.__proto__.setToService = function(toDoItemId, newDataObject) {
    stateService('SET', toDoItemId, newDataObject);
};

stateToolkit.__proto__.patchToService = function(toDoItemId, newDataObject) {
    stateService('PATCH', toDoItemId, newDataObject);
};

stateToolkit.__proto__.getFromService = function(toDoItemId) {
    return stateService('GET', toDoItemId);
};

stateToolkit.__proto__.deleteFromService = function(toDoItemId) {
    stateService('DELETE', toDoItemId);
};

window.addEventListener('unload', () => {
    const endArray = Array.from(stateMap.values());
    if (startArray !== endArray){
        saveToLocalStorage(endArray)
    }
})