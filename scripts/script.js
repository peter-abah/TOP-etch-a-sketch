'use strict';

//Returns a color in hex form ("RRGGBB")
function randomColor() {
    let color = '#'
    for (let i = 0; i < 3; i++) {
        let n = Math.random() * 255;
        n = Math.round(n);
        color += n.toString(16).padStart(2, '0');
    }
    return color;
}

function changeColor() {
    this.style.backgroundColor = randomColor();
}

function createGridElement() {
    let element = document.createElement('div');
    element.className = "pixel"
    element.addEventListener("mouseover", changeColor);
    return element;
}
function createGridElements(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(createGridElement());
    }
    return result;
}

function createGrid(n) {
    let container = document.querySelector('.sketch-area');
    container.style['grid-template-columns'] = `repeat(${n}, auto)`
    container.style['grid-template-rows'] = `repeat(${n}, auto)`

    n *= n;
    for (let element of createGridElements(n)) {
        container.appendChild(element)
    }
}

/* returns if number is a number and is in range of start to stop, else returns 
   false otherwise */
function isValidNumber(number, start, stop) {
    return number < start || number > stop || isNaN(number);
}

function changeGridSize(e) {
    let n = parseInt(prompt('Enter grid size (minimum of 2 & maximum of 64)'));
    if (isValidNumber(n, 2, 64)) {
        alert("Must be a number and must not be less than 2 or \
                greater than 64");
        return;
    }
    document.querySelector(".sketch-area").innerHTML = "";
    createGrid(n);
}

document.querySelector('.change-button').addEventListener('click', changeGridSize)

createGrid(16);