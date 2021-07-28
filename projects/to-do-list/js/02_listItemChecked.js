const allCheckedBtn = document.querySelectorAll(".to-do-done")



export const checkedItem = (event) => {
    //I used nextElementSibling because after the input i need to edit the span with the text content
    let elementToCheck = event.target.nextElementSibling
    event.target.checked ? elementToCheck.classList.add("itemChecked") : elementToCheck.classList.remove("itemChecked")    
}


//Example List Items
allCheckedBtn.forEach(element => element.addEventListener("change", checkedItem))