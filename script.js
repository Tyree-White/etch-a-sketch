const grid = document.querySelector('.grid');
const sizeGrid = document.querySelector('.size');
const clear = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
sizeGrid.addEventListener('click', createGrid);

function createGrid() {
    let size = Number(prompt('Type a number from 1 and 100'));
    if (size <= 0 || size > 100) {
        alert('Invalid Input!');
        return
    }
    grid.style.setProperty("--grid-rows", size);
    grid.style.setProperty("--grid-cols", size);
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
        cell.addEventListener('mouseover', function makeBlack() {
            cell.style.background = 'black';
        });
        clear.addEventListener('click', function clearAll() {
            cell.style.background = 'white';
        })
    }
}
