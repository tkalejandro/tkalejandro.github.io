"use strict";

//DOM Things
const playGameBtn = document.querySelector("#play-game")
const allColors = document.querySelectorAll("span")
const questionColor = document.querySelector(".question-color")
const doYouKnow = document.querySelector(".doYouKnow")
const introContainer = document.querySelector(".intro-container")
const gameTitle = document.querySelector("h1")

let winnerColor = ""
let selectedColor = ""

//Random Color - rgb( num, num, num)
const randomColor = () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
//Lets create 6 different colors
const playTheGame = () => {
    
        //OUR LITTLE RESET
        introContainer.style.backgroundColor = "yellow" //Make sure the intro is back to yellow!
        allColors.forEach(color => {
        color.addEventListener("click", pickColor)
        color.classList.remove("animation")
        color.style.cursor = "pointer"
        }) //Event Listener to be able to click the squares
        gameTitle.classList.remove("animation-zoom")
        questionColor.classList.remove("animation-zoom")
        

    //Create empty array to introduce the colors
    let arrayOfColors = []
    //Loop to push all colors using the function randomColor()
    for (let i = 0 ; i < 9; i++) {
        let newColor = randomColor()
        arrayOfColors.push(newColor)
    }
    //Now im passing each color to the span.
    allColors.forEach(({style:element}, index) => {
        element.backgroundColor = arrayOfColors[index]
    })
    //Lets create the winner color and ask for it!
    winnerColor = arrayOfColors[Math.floor(Math.random() * 9)]
    questionColor.textContent = winnerColor
    doYouKnow.textContent = "Do you know this color?"

}

//Now lets pick the game and check if similar to our winner game! 
const pickColor = (event) => {
    if(event.target.style.backgroundColor == winnerColor) {
        //User already won, no need to pick more squares
        allColors.forEach(color => {
            color.removeEventListener("click", pickColor)
            color.classList.add("animation")
        } )
        allColors.forEach(({style:element}) => {
            element.backgroundColor = winnerColor
        })
        gameTitle.classList.add("animation-zoom")
        questionColor.classList.add("animation-zoom")
        introContainer.style.backgroundColor = winnerColor
        questionColor.textContent = "You are a winner baby!"
        doYouKnow.textContent = ""
        playGameBtn.textContent = "New colors?"

    } else {
        event.target.style.backgroundColor = "black"
        event.target.style.cursor = "not-allowed"
        doYouKnow.textContent = "Try Again!"
        
    }
    
}

//Event Listeners
playGameBtn.addEventListener("click", playTheGame)