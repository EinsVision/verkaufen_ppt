const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greetings = document.querySelector('.js-greetings');

// local storage! 
// 작은 정보를 내 유저 컴퓨터에 저장하는 방법이다.
//localStorage.setItem('name', 'Peter Jung');

const USER_LS = 'name';
const SHOWING_ON ='showing';

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currenValue = input.value;
    console.log(currenValue);
    paintGreeting(currenValue);
    saveName(currenValue);
}

function askForName(){
    // console.log('askForName');
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit', handleSubmit);    
}

function paintGreeting(text){
    // console.log('paintGreeting function called');
    form.classList.remove(SHOWING_ON);
    greetings.classList.add(SHOWING_ON);
    greetings.innerHTML = `Hello ${text}`;
}

function loadName(){
    // console.log('loadName function called');
    const currentUser = localStorage.getItem(USER_LS);

    // console.log('currentUser: '+currentUser);
    if(currentUser === null){
        // 유저가 없는 경우.
        askForName();

    } else{
        // 유저가 있는 경우.
        // console.log('else 들어옴');
        paintGreeting(currentUser);
    }
}

function init(){
    // console.log('init function called');
    loadName();
}

init();