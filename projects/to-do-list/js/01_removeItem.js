"use strict"
import { toDoList } from "./00_addToDo.js"
export const deleteListBtn = (event) => {
    let listToRemove = event.target.closest("li")
    toDoList.removeChild(listToRemove)
}


//Example List Items
const exampleLi = document.querySelectorAll("li .fa-window-close")
exampleLi.forEach(list => list.addEventListener("click", deleteListBtn))

