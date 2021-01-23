// tab에 따라 자연스러운 scroll을 구현한 함수

function AutoScroll(a){
    console.log(a);
    if(a === 'home'){
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }
    else if(a === 'about'){
        const elePosition = document.getElementById('one');
        const top = elePosition.getBoundingClientRect().top;
        const winY = window.pageYOffset;
        const aboutPosition = top + winY;
        window.scrollTo({top:aboutPosition, left:0, behavior:'smooth'})
    }
    else if(a === 'portfolio'){
        const elePosition = document.getElementById('two');
        const top = elePosition.getBoundingClientRect().top;
        const winY = window.pageYOffset;
        const aboutPosition = top + winY;
        window.scrollTo({top:aboutPosition, left:0, behavior:'smooth'})
    }
    else if(a === 'contact'){
        const elePosition = document.getElementById('three');
        const top = elePosition.getBoundingClientRect().top;
        const winY = window.pageYOffset;
        const aboutPosition = top + winY;
        window.scrollTo({top:aboutPosition, left:0, behavior:'smooth'})
    }
    else{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }
}
