const calculator = document.querySelector(".calculator");
const calDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Button Click Sound
var beep= new Audio();
beep.src="audio/btn.mp3"

var bleep= new Audio();
bleep.src="audio/sym_btn.mp3"

var blep= new Audio();
blep.src="audio/eq-clr-sound.mp3"

// Calculator calculations
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        if (event.target.id == "clear") {
            display.innerText = "";
        } else if (event.target.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && event.target.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && event.target.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += event.target.id;
        }
        play();
    })
}
