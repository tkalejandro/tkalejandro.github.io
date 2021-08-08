"use strict"
import { deleteListBtn } from "./01_removeItem.js"
import { checkedItem } from "./02_listItemChecked.js"


export const toDoList = document.querySelector(".to-do-list")
const toDoValue = document.querySelector("#to-do")
export const addToDo = () => {
    //To avoid blank!
    if(toDoValue.value.length < 1) {
        alert("Please write something")
        return
    }

    //Creating list
    let newLi = document.createElement("li")
    //Creating the input that will be inside li
    let newInput = document.createElement("input")
    newInput.type = "checkbox"
    newInput.classList.add("to-do-done")
    //Event Listener to check!
    newInput.addEventListener("change", checkedItem)
    //Creating text Content inside span
    let spanContent = document.createElement("span")
    spanContent.textContent = toDoValue.value
    spanContent.classList.add("text-content")

    //Creating the span to delete list that will be inside li
    let newSpan = document.createElement("span")
    newSpan.classList.add("fas")
    newSpan.classList.add("fa-window-close")
    //Event Listener to delete
    newSpan.addEventListener("click", deleteListBtn)

    //Now lets organize <li><input><span><span></li>
    newLi.appendChild(newInput)
    newLi.appendChild(spanContent)
    newLi.appendChild(newSpan)
    

    //Now To List!
    toDoList.appendChild(newLi)

    //Reset Placeholder!
    toDoValue.value = ``
    
}