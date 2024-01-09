const gridsDiv = document.querySelector('.grids');
const selector = document.querySelector('#gridSelect');


selector.addEventListener('change', (e) =>{
    let selectOption = e.target.value
    // console.log(selectOption);
    // switch (selectOption) {
    //   case 1:
    //   
    // }
for (i = 0; i < selectOption; i++) {
    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.cssText += 'width: 25px; height: 25px';
    gridsDiv.appendChild(grid);
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.addEventListener('mouseenter', (e) =>{
        e.target.style.background = colorChange();
    }));
  })


function randomColor() {
    return random = (Math.floor(Math.random() * 255));
}

function colorChange() {
    return rndColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}


