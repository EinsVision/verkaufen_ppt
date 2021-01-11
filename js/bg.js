const body = document.querySelector('body');

const IMAGE_NUMBER = 9;

function handleImgLoad(){
    console.log('finished loading');
}

function paintImg(imgNumber){
    const image = new Image();
    image.src = `../images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    image.addEventListener('loaded', handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();