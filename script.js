const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

function getNumBoxes() {
    let num = null;

    while (!num) {
        num = prompt("Input the number of boxes");
    }

    return num;
}

function createGrid() {
    const numSquares = 16;

    const squareWidth = Math.floor(containerWidth / numSquares) - 1;
    const squareHeight = Math.floor(containerHeight / numSquares) - 1;

    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            const newDiv = document.createElement("div");
            newDiv.style = `width: ${squareWidth}px; border: 0.5px solid red; background: white;`;
            container.appendChild(newDiv);
        }
    }
}

createGrid();