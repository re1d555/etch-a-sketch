const gridsDiv = document.querySelector('.grids');
const selectButton = document.querySelector('.gridSelect');
const clearButton = document.querySelector('.clear');
const standard = document.querySelector('.standard');
const rgb = document.querySelector('.rgb');
const darkMode = document.querySelector('.darker');
const modeBtn = document.querySelectorAll('.modBtn').forEach((btn) => btn.disabled = true);

function randomColor(mode) {
    return random = (Math.floor(Math.random() * mode));
}

function colorChange(color) {
    return rndColor = `rgb(${randomColor(color)}, ${randomColor(color)}, ${randomColor(color)})`;
}

function modSelection(color) {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseenter', (e) =>{
            e.target.style.background = colorChange(color);
    }));
}

function clear() {
    const createdGrids = document.querySelectorAll('.grid');
    createdGrids.forEach(grid => grid.style.background = 'white');
}

function gridQuantity() {

    const createdGrids = document.querySelectorAll('.grid');
    createdGrids.forEach(createdGrid => createdGrid.remove());

    let gridQuantity = prompt('Choose field, from 1 to 100', 1) ;

    if (gridQuantity > 0 && gridQuantity <= 100) {

        let gridQuantityAll = gridQuantity ** 2;

        for (i = 0; i < gridQuantityAll; i++) {
            let grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.cssText += `width: ${400 / gridQuantity}px; height: ${400 / gridQuantity}px; background-color: white;`
            gridsDiv.appendChild(grid);
        }

        modSelection(0)

        document.querySelectorAll('.modBtn').forEach((btn) => btn.disabled = false);
        standard.style.cssText = 'background-color: grey; color: white';
        rgb.style.cssText = '';
        darkMode.style.cssText = '';

    } else {
        alert('PLEASE! write number from 1 to 100');
    }
}

selectButton.addEventListener('click', gridQuantity);
clearButton.addEventListener('click', clear);
standard.addEventListener('click', () => {
    modSelection(0);
    standard.style.cssText = 'background-color: grey; color: white';
    rgb.style.cssText = '';
    darkMode.style.cssText = '';
});
rgb.addEventListener('click', () => {
    modSelection(255)
    standard.style.cssText = '';
    rgb.style.cssText = 'background-color: grey; color: white';
    darkMode.style.cssText = '';
});

// darkMode.addEventListener('click', () => {
//     modSelection(255);
//     standard.style.cssText = '';
//     rgb.style.cssText = '';
//     darkMode.style.cssText = 'background-color: grey; color: white';

// })

