//Constant declarations
const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)"
];

//Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
//Choose winning color
let pickedColor = colors[0];

//Update colorDisplay
colorDisplay.textContent = pickedColor;

//Set up squares
for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //Add click listeners
    squares[i].addEventListener("click", function() {
        //Get color of the clicked square
        const clickedColor = this.style.backgroundColor;
        //Compare that color to pickedColor
        if(clickedColor === pickedColor) {
            message.textContent = "Correct :)";
        } else {
            this.style.backgroundColor = "darkslategray";
            message.textContent = "Try again :O"
        }
    })
}