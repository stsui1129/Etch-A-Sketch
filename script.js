let gridSize = 16;
const container = document.querySelector('#container'); //gets reference to container div in our HTML
const btn = document.querySelector('#clearbtn'); //gets reference to clear grid button and store it in variable btn
btn.addEventListener('click', clearGrid); //adds a click event to btn which triggers the clearGrid function
const color = document.querySelector('#color');
color.addEventListener('click', randomColor);
const black = document.querySelector('#black');
black.addEventListener('click', blackColor);

function createGrid(gridSize) {
    //CSS grid repeat function using template literal enclosed by backticks, 1fr = 100% of available space
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    //Loop to run gridSize^2 iterations of this code
    //creates a div element with class='cell' which changes colour to black when moused over
    //These divs are added as the last child node of parent container
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => 
            cell.style.backgroundColor = "black");
    
        container.appendChild(cell);   
    }
}

function randomColorGenerator() {
    let random = `rgb(${Math.floor(Math.random()*255)}, 
                      ${Math.floor(Math.random()*255)},
                      ${Math.floor(Math.random()*255)})`;
    //generates random integers between 0 and 255 for (r, g, b) hence colour
    return random;
}

function randomColor() {
    const cells = document.querySelectorAll('.cell'); //gets reference to node list of class cell
    //iterates through each cell and adds a mouseover listener which changes colour through randomColorGenerator
    cells.forEach(cell => { 
        cell.addEventListener('mouseover', () =>
            cell.style.backgroundColor = randomColorGenerator())
    })
}

function blackColor() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () =>
            cell.style.backgroundColor = "black")
    })
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; //removes background colour of cells
        container.removeChild(cell); //removes previously created cells
    })
        
    //container.textContent = ''; also works here
    //Setting this property on a node removes all of its children
    //and replaces them with a single text node with the given value
   
    gridSize = prompt("Please choose the grid size", "1 to 64");
    if (gridSize > 64 || gridSize < 1) {
        alert("That's not within range. Please try again!");
       } else 
            createGrid(gridSize);
            
}

createGrid(gridSize);