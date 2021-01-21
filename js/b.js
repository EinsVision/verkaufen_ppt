const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

function draw(){
    context.arc(20, 20, 10, 0, Math.PI*2, false);
    context.fill();
    return this;
}

function init(){
    draw();
}

init();