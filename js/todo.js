const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // Object를 string으로 변화시켜준다.
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.addEventListener('click', deleteToDo);

    const span = document.createElement('span');
    const newID = toDos.length + 1;
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newID;
    
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currenValue = toDoInput.value;
    paintToDo(currenValue);
    toDoInput.value = '';
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos); //다시 string을 Object로 변화시켜준다.
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
