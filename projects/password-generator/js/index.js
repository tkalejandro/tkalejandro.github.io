"use strict";

//const generatePasswordBtn = document.querySelector("button")
const passwordLength = document.querySelector("#passwordLength")
const passwordResult = document.querySelector(".result")
const mixedCases = document.querySelector("#useMixedCases")

const buttonsGenerators = document.querySelectorAll(".button")

let counter = 0

const generatePassword = (event) => {

    //Here is my condition to make sure there is only 10 possible output!
    counter >= 10
    //I add disable here because it was triggering the lucky button in the next click
        ? (alert("You need to get Premium"), element.event.disabled = true)
        : counter
    if (event.target.textContent == "Generate Password" && counter < 10) {
        counter++
        //console.log(counter)
    } else {
        //console.log("lucky button")
        counter++
        event.target.disabled = true
        //event.removeEventListener("click", generatePassword)
    }



    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    //If this is empty, i will make it 20!
    passwordLength.value == "" ? passwordLength.value = 20 : passwordLength.value
    //I need to create a string
    let newPassword = ""
    //I create a new if else statement to make sure there is 8 minimun value
    if (passwordLength.value >= 8) {
        for (let i = 0; i < passwordLength.value; i++) {
            let randomNum = Math.floor(Math.random() * charset.length)
            //If mixedCases is checked it will give mixes otherwise all big.
            newPassword += mixedCases.checked ? charset[randomNum] : charset.toUpperCase()[randomNum]
        }
    } else {
        //This is just an alert to OBLIGATE XD  8 as a minimum value
        alert(`
                                 ┬┴┬┴┤(･_├┬┴┬┴

    Please use minimum 8 characters for your own safety.`)
        passwordLength.value = 8
    }
    //Then im pushing? the new password as a text content.
    passwordResult.textContent = newPassword
}
//Every time i click! i will make the function work!
//generatePasswordBtn.addEventListener("click", generatePassword)

buttonsGenerators.forEach((element) => element.addEventListener("click", generatePassword))