//=======================
// Functions
//=======================

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
};

const pickColor = () => {
    // Get a random number between 0 and 5 inclusive
    const random = Math.floor(Math.random() * colors.length);
    // Return colors[ran]
    return colors[random];
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

//=======================
// Initialize variables
//=======================

// State
let numSquares = 6;

// Select elements
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");

let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

//=======================
// Main
//=======================

// Update colorDisplay
colorDisplay.textContent = pickedColor;

// Reset button
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "darkslategray";
    for(let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    };
})

// Easy button
easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.backgroundColor = "darkslategray";
        }
    }
})

// Hard button
hardButton.addEventListener("click", function() {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})

// Set up squares
for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners
    squares[i].addEventListener("click", function() {
        // Get color of the clicked square
        const clickedColor = this.style.backgroundColor;
        // Compare that color to pickedColor
        if(clickedColor === pickedColor) {
            message.textContent = "Correct :)";
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "darkslategray";
            message.textContent = "Try again :O"
        }
    })
};

