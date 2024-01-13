const gridsDiv = document.querySelector('.grids');
const selectButton = document.querySelector('.gridSelect');
const clearButton = document.querySelector('.clear');
const black = document.querySelector('.standard');
const rgb = document.querySelector('.rgb');
const darkMode = document.querySelector('.darker');
const modeBtn = document.querySelectorAll('.modBtn').forEach((btn) => btn.disabled = true);

function clear() {
    const clearGrids = document.querySelectorAll('.grid');
    clearGrids.forEach(grid => grid.style.background = 'rgb(255, 255, 255)');
}

function shadowMode() {
    killEventListeners()
    black.style.cssText = '';
    rgb.style.cssText = '';
    darkMode.style.cssText = 'background-color: grey; color: white';
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.style.background = `rgb(255, 255, 255)`);
    grids.forEach(grid => grid.addEventListener('mouseenter', (e) =>{
        let currentColor = e.target.style.background.slice(14, -1);
        let nextColor = currentColor - currentColor * 0.1;
        e.target.style.background = `rgb(${nextColor}, ${nextColor}, ${nextColor})`
    }));
}

function killEventListeners() {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.removeEventListener('mouseenter', blackModeEventListener));
    grids.forEach(grid => grid.removeEventListener('mouseenter', rgbModeEventListener));
}

function addEventListeners(handler) {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseenter', handler));    
}

function blackMode() {
    black.style.cssText = 'background-color: grey; color: white';
    rgb.style.cssText = '';
    darkMode.style.cssText = '';
    addEventListeners(blackModeEventListener)
}

function blackModeEventListener(e) {
    e.target.style.background = 'rgb(0, 0, 0)';
}

function rgbMode() {
    black.style.cssText = '';
    rgb.style.cssText = 'background-color: grey; color: white';
    darkMode.style.cssText = '';
    addEventListeners(rgbModeEventListener);
}

function rgbModeEventListener(e) {
    e.target.style.background = colorChange(255);
}

function randomColor(mode) {
    return random = (Math.floor(Math.random() * mode));
}

function colorChange(color) {
    return rndColor = `rgb(${randomColor(color)}, ${randomColor(color)}, ${randomColor(color)})`;
}

function gridQuantity() {
// refresh the field
    const createdGrids = document.querySelectorAll('.grid');
    createdGrids.forEach(createdGrid => createdGrid.remove());

    let gridQuantity = prompt('Choose field, from 1 to 100', 1) ;
    if (gridQuantity > 0 && gridQuantity <= 100) {
// create the field
        let gridQuantityAll = gridQuantity ** 2;
        for (i = 0; i < gridQuantityAll; i++) {
            let grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.cssText += `width: ${500 / gridQuantity}px; height: ${500 / gridQuantity}px; background-color: rgb(255, 255, 255); transition: 0.6s; border-radius: 7px`;
            gridsDiv.appendChild(grid);
        }
// enable mode buttons
        document.querySelectorAll('.modBtn').forEach((btn) => btn.disabled = false);

    } else {
        alert('PLEASE! write number from 1 to 100');
        document.querySelectorAll('.modBtn').forEach((btn) => btn.disabled = true);
        black.style.cssText = '';
        rgb.style.cssText = '';
        darkMode.style.cssText = '';
    }
}

selectButton.addEventListener('click', gridQuantity);
clearButton.addEventListener('click', clear);
black.addEventListener('click', blackMode);
rgb.addEventListener('click', rgbMode);
darkMode.addEventListener('click', shadowMode);