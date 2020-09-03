let gridSize = 16;
const container = document.querySelector('#container');

function createGrid(gridSize) {
    //CSS grid repeat function using a template literal enclosed by backticks, 1fr=100% of available space//
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        /*Loop to run gridSize^2 iterations of this code - creates a div with class="cell" which changes colour to black when moused over.
        These divs are added as a child node to the parent container*/
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
    })
        container.appendChild(cell);   
    }
}

function clearGrid() {
    //Setting this property on a node removes all of its children and replaces them with a single text node with the given value//
    container.textContent = '';
    gridSize = prompt("Choose the grid size", "Between 1 and 64");
    if (gridSize > 64 || gridSize < 1) {
        alert("That's not within range. Please try again.");
       } else 
            createGrid(gridSize);
}

createGrid(gridSize);