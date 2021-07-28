"use strict";

const addItemBtn = document.querySelector(".add-item")
import {addToDo} from "./00_addToDo.js"
addItemBtn.addEventListener("click", addToDo)