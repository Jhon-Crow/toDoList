export function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem('toDoListData'))
}

console.log('getFromLocalStorage.js')