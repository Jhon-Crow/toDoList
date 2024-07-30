import { saveToLocalStorage } from '../lib/helpers/saveToLocalStorage.js';
import { getFromLocalStorage } from '../lib/helpers/getFromLocalStorage.js';

const startArray = getFromLocalStorage() || [];

let stateMap = new Map();
if (startArray.length) {
	startArray.forEach((obj) => {
		stateMap.set(obj.id, obj);
	});
}

function stateService(action, toDoItemId, newDataObject){
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
                console.log('Item Not Found!')
            }
            break;
        case 'GET':
            if (stateMap.get(toDoItemId)){
                return stateMap.get(toDoItemId)
            } else {
                console.log('Item Not Found!')
            }
            break;
        case 'GET_ALL':
            if (stateMap.size){
                return Array.from(stateMap.values());
            } else {
                console.log('State is Empty!')
            }
            break;
        case 'GET_ALL_KEYS':
            if (stateMap.size){
                return Array.from(stateMap.keys());
            } else {
                console.log('State is Empty!')
            }
            break;
        case 'DELETE':
            if (typeof toDoItemId === 'string') {
                stateMap.delete(toDoItemId)
            } else {
                console.log('incorrect ID!')
            }
            break;
        case 'DELETE_ALL':
               return stateMap = []
        default: return null;
    }
}

export const stateToolkit = {};

stateToolkit.__proto__.setToService = function (toDoItemId, newDataObject) {
	stateService('SET', toDoItemId, newDataObject);
};

stateToolkit.__proto__.patchToService = function (toDoItemId, newDataObject) {
	stateService('PATCH', toDoItemId, newDataObject);
};

stateToolkit.__proto__.getFromService = function (toDoItemId) {
	return stateService('GET', toDoItemId);
};

stateToolkit.__proto__.getAllFromService = function () {
	return stateService('GET_ALL');
};

stateToolkit.__proto__.getAllKeysFromService = function () {
	return stateService('GET_ALL_KEYS');
};

stateToolkit.__proto__.deleteFromService = function (toDoItemId) {
	stateService('DELETE', toDoItemId);
};

stateToolkit.__proto__.deleteAllFromService = function () {
	stateService('DELETE_ALL');
};

window.addEventListener('unload', () => {
	const endArray = Array.from(stateMap.values());
	if (startArray !== endArray) {
		saveToLocalStorage(endArray);
	}
});
