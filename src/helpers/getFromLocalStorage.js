export function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem('toDoListData'))
}
