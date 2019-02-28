// let myMessage = document.getElementById("color-test");
// function showMessage() {
    
//     myMessage.className = "show";

// }

// setTimeout(showMessage, 2000)


let colourChanger = document.getElementById("colour-changer");
let colours = ["red", "blue", "purple", "green", "yellow"];
let counter = 0;

function changeColour () {
    if (counter >= colours.length) {
        counter = 0;
    }
    
    
    colourChanger.style.background = colours[counter];

    counter++;



}

let myTimer = setInterval(changeColour, 1000);

colourChanger.onclick = function(){

    clearInterval(myTimer);
    colourChanger.innerHTML = "timer stopped";

}