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
            alert("You win!");
        } else {
            alert("You lose!");
        }
    })
}