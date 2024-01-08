const gridsDiv = document.querySelector('.grids');

for (i = 0; i < 16; i++) {
const grid = document.createElement('div');
grid.className = 'grid';
gridsDiv.appendChild(grid);
}

function randomColor() {
    return random = (Math.floor(Math.random() * 255));
}

