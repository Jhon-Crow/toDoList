export function saveToLocalStorage(arrayOfObjects){
    localStorage.setItem('toDoListData', JSON.stringify(arrayOfObjects))
}
