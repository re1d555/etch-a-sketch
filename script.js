const gridsDiv = document.querySelector('.grids');
const selectButton = document.querySelector('.gridSelect');

function randomColor() {
    return random = (Math.floor(Math.random() * 255));
}

function colorChange() {
    return rndColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function play() {
    const createdGrids = document.querySelectorAll('.grid');
    createdGrids.forEach(createdGrid => createdGrid.remove());

    let gridQuantity = prompt('Choose field, from 1 to 100', 1) ;
    let gridQuantityAll = gridQuantity ** 2;

    for (i = 0; i < gridQuantityAll; i++) {
        let grid = document.createElement('div');
        grid.className = 'grid';
        grid.style.cssText += `width: ${400 / gridQuantity}px; height: ${400 / gridQuantity}px; background-color: white;`
        gridsDiv.appendChild(grid);
    }

    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseenter', (e) =>{
        e.target.style.background = colorChange();
    }));

}

selectButton.addEventListener('click', play);


