Etch-A-Sketch
---
In this project, I built a browser Etch-a-Sketch utilizing javascript DOM manipulation and CSS grid functions.

Issues encountered: 

Grid didn't generate enough cells to fill the container whenever I changed the gridsize unless the initial gridsize was set to 64(maximum). It took me a while to figure out the loop was not inside the createGrid function, so it was just running on DOM load due to a misplacement of a curly bracket.

Having a border on the cells created a problem where, whenever the grid is reset, extra cells were generated at the bottom of the container altering the size of cells. The problem was fixed by adding: container.removeChild(cell); which removed previously created cells. I'm still not sure why this problem doesn't occur if cells had no border.

https://stsui1129.github.io/Etch-A-Sketch/

Next update: Implement random colour functioning + improve CSS