const grid = document.querySelector('.grid');
const sizeGrid = document.querySelector('.size');
sizeGrid.addEventListener('click', createGrid);

function createGrid() {
    let size = Number(prompt('Type a number between 1 and 100'));
    if (size <= 0 || size > 100) {
        alert('Invalid Input!');
        return
    }
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
        cell.classList.add('cell');
    }
}