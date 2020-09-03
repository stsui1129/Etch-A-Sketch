In this project, I built a browser Etch-a-sketch utilizing my javascript DOM manipulation and CSS grid skills.
---
Issues encountered: 

Grid does not generate enough cells to fill the container whenever I change the gridsize unless initial gridsize is assigned to max(64). It took me a while to figure out the loop was just running on DOM load due to a misplacement of a curly bracket. This issue was fixed by having the createGrid function contain the loop.

Having a border on the cells creates a problem whenever the grid is reset, where extra grids are generated at the bottom of the container altering the size of cells. This does not occur if cells do not have a border. I still do not know the reasoning behind this but the problem was fixed by replacing the original code of

const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.style.backgroundColor = "white";
        });

to

container.textContent = '';

https://stsui1129.github.io/Etch-A-Sketch/

Next update: Add random colours + better CSS