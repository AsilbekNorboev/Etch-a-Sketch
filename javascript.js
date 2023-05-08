

container = document.querySelector('.container');
let size = 16;
let color = 'green';
function defaultGrid() {
    createGrid(16);
}


const slider = document.querySelector('.slider')
const displayvalue = document.querySelector('.slidervalue');

slider.oninput = function(){
    displayvalue.textContent = `${this.value}X${this.value}`;
}

const apply = document.querySelector('.apply')
apply.addEventListener('click',function(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    size = slider.value;

    createGrid(slider.value);
})

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click',function(){
    color = 'white';
})
const picker = document.querySelector('.picker');
picker.addEventListener('change',function(){
    color = picker.value
})
const black = document.querySelector('.black');
black.addEventListener('click',function(){
    color = 'black';
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = size;
    let cell = container.children;
    for (let i = 0; i < val; i++) {
        gridcontainer = cell[i].children
        for (let j=0; j<val; j++){
            gridcontainer[j].style.backgroundColor = 'white';
        }
    }
});


function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = 'white';
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = `${color}`;
    })
    return div;
}

function createGrid(gridsize){
    for (let i = 0; i<gridsize; i++){
        gridcontainer = document.createElement('div');
        gridcontainer.classList.add('gridcontainer');
        for (let j = 0; j<gridsize; j++){
            gridcontainer.appendChild(createDiv(container.clientWidth/gridsize));        
        }
        container.appendChild(gridcontainer);

    }
}

defaultGrid();