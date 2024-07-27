export function saveToLocalStorage(arrayOfObjects){
    localStorage.setItem('toDoListData', JSON.stringify(arrayOfObjects))
}

console.log('saveToLocalStorage.js')