//=======================
// Functions
//=======================

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
};

const changeStripeColors = (color) => {
    modeButtons.forEach((button) => {
        button.style.color = color;
    })
    resetButton.style.color = color;
}

const generateRandomColor = () => {
    // pick r, g, b values between 0 & 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
    let output = [];
    for(let i = 0; i < num; i++) {
        output.push(generateRandomColor());
    }
    return output;
}

const pickColor = () => {
    // Get a random number from 0 to the number of squares
    const random = Math.floor(Math.random() * colors.length);
    // Return colors[ran]
    return colors[random];
}

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor = "slateblue";
    resetButton.style.color = "slateblue";
    modeButtons.forEach((button) => {
        button.style.color = "slateblue";
    })
    message.textContent = "";
}

//=======================
// Initialize variables
//=======================

// State
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

// Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const modeButtons = document.querySelectorAll(".mode");

//=======================
// Main
//=======================

function main() {
    // Update colorDisplay
    colorDisplay.textContent = pickedColor;

    // Reset button
    resetButton.addEventListener("click", reset);

    // Mode Buttons
    modeButtons.forEach((button) => {
        button.addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy") {
                numSquares = 3;
            }
            else {
                numSquares = 6;
            }
            reset();
        });
    });

    // Set up squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        // Add click listeners
        squares[i].addEventListener("click", function() {
            // Get color of the clicked square
            const clickedColor = this.style.backgroundColor;
            // Compare that color to pickedColor
            if(clickedColor === pickedColor) {
                message.textContent = "Correct";
                changeColors(pickedColor);
                title.style.backgroundColor = pickedColor;
                changeStripeColors(pickedColor);
                resetButton.textContent = "Play Again";
            } else {
                this.style.backgroundColor = "black";
                message.textContent = "Try Again"
            }
        })
    };
}

main();