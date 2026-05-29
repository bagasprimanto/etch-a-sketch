const setNumSquaresBtn = document.querySelector("h2 button.set-num-boxes");
const setColorModeBtn = document.querySelector("h2 button.set-color-mode");
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const DEFAULT_NUM_SQUARES = 16;

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
    const squareHeight = Math.floor(containerHeight / numSquares) - 1;

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const newDiv = document.createElement("div");
            newDiv.style = `width: ${squareWidth}px;`;
            newDiv.addEventListener("mouseenter", () => {
                newDiv.style.backgroundColor += getShadeColor();
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

function getShadeColor() {
    const colorMode = setColorModeBtn.textContent;

    if (colorMode === "Single color") {
        return "blue";
    } else {
        return getRandomColor();
    }
}

setNumSquaresBtn.addEventListener("click", () => {
    createGrid(getNumSquares());
});
setColorModeBtn.addEventListener("click", toggleColorMode);

createGrid(DEFAULT_NUM_SQUARES);