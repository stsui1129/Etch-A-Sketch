let gridSize = 16;
const container = document.querySelector('#container');

function createGrid(gridSize) {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
    })
        container.appendChild(cell);   
    }
}

function clearGrid() {
    container.textContent = ''; 
    gridSize = prompt("Choose the grid size", "Between 1 and 64");
    if (gridSize > 64 || gridSize < 1) {
        alert("That's not within range. Please try again.");
       } else 
            createGrid(gridSize);
}

createGrid(gridSize);