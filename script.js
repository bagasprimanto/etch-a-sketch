const setNumSquaresBtn = document.querySelector("h2 button.set-num-boxes");
const setColorModeBtn = document.querySelector("h2 button.set-color-mode");
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;

const DEFAULT_NUM_SQUARES = 16;
const DEFAULT_SINGLE_COLOR = "rgb(0, 0, 255)";

function getNumSquares() {
    let num = null;

    while (!num || num > 100) {
        num = prompt("Input the number of squares");
    }

    return num;
}

function emptyGrid() {
    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => div.remove());
}

function createGrid(numSquares) {
    //Empties the grid first
    emptyGrid();

    const squareWidth = Math.floor(containerWidth / numSquares) - 1;

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const newDiv = document.createElement("div");
            newDiv.style = `width: ${squareWidth}px;`;
            newDiv.addEventListener("mouseenter", (e) => {
                shadeSquare(e);
            })
            container.appendChild(newDiv);
        }
    }
}

function toggleColorMode() {
    let colorMode = setColorModeBtn.textContent;

    if (colorMode === "Single color") {
        colorMode = "Random color";
    } else {
        colorMode = "Single color";
    }

    setColorModeBtn.textContent = colorMode;
}

function getRandomColor() {
    const colorLetters = "0123456789ABCDEF";

    let colorString = "#";

    for (let i = 0; i < 6; i++) {
        colorString += colorLetters.at(Math.floor(Math.random() * 16));
    }

    return colorString;
}

function shadeSquare(event) {
    const currSquare = event.target;
    const colorMode = setColorModeBtn.textContent;

    if (colorMode === "Single color") {
        const opacity = currSquare.style.opacity;
        const bgColor = currSquare.style.backgroundColor;

        if (opacity && bgColor === DEFAULT_SINGLE_COLOR) {
            currSquare.style.opacity = +opacity + 0.1;
        } else {
            currSquare.style.backgroundColor = DEFAULT_SINGLE_COLOR;
            currSquare.style.opacity = 0.1;
        }
    } else {
        currSquare.style.backgroundColor = getRandomColor();
    }
}

setNumSquaresBtn.addEventListener("click", () => {
    createGrid(getNumSquares());
});
setColorModeBtn.addEventListener("click", toggleColorMode);

createGrid(DEFAULT_NUM_SQUARES);