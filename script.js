const setNumSquaresBtn = document.querySelector("h2 button");
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
                newDiv.classList.add("hovered");
            })
            container.appendChild(newDiv);
        }
    }
}

setNumSquaresBtn.addEventListener("click", () => {
    createGrid(getNumSquares());
});

createGrid(DEFAULT_NUM_SQUARES);