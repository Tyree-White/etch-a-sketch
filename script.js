// References to divisions
const grid = document.querySelector('.grid');
const sizeGrid = document.querySelector('.size');
// References to buttons
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
sizeGrid.addEventListener('click', createGrid);

function createGrid() {
    // Remove grid before adding another grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    // Prompt user to type in grid size once button is clicked
    let size = Number(prompt('Type a number from 1 and 100'));
    if (size <= 0 || size > 100) {
        alert('Invalid Input!');
        return
    }
    // Set css rows and cols properties
    grid.style.setProperty("--grid-rows", size);
    grid.style.setProperty("--grid-cols", size);
    // Loop to create divisions
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
        // Adds event listener to all cells and makes them black when hovered over
        cell.addEventListener('mouseover', function makeBlack() {
            cell.style.background = 'black';
        });
        // Clears color from all divs once clicked
        clear.addEventListener('click', function clearAll() {
            cell.style.background = 'white';
        })
    }
}
