const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

function addTodo(e) {
    e.preventDefault();

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button');
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    saveToLocal(todoInput.value);

    todoList.appendChild(newDiv);
    todoInput.value = '';
}

function saveToLocal(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocal() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo) {  // todos 요소마다 반복
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo; // 로컬 스토리지의 값 표시
        newTodo.classList.add('todo-content');
        newDiv.appendChild(newTodo);  
    
        const completeButton = document.createElement('button');
        completeButton.innerText = '완료';
        completeButton.classList.add('complete-button'); 
        newDiv.appendChild(completeButton);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '삭제';
        deleteButton.classList.add('delete-button');
        newDiv.appendChild(deleteButton);
    
        todoList.appendChild(newDiv);   // ul 요소의 자식 요소로 추가
    
        todoInput.value = "";   // 입력 창 초기화
    });
}

function manageTodo(e) {
    const whichButton = e.target.classList[0];
    if (whichButton === 'complete-button') {
        const todo = e.target.parentElement;
        todo.children[0].classList.toggle('completed');
    } else if (whichButton === 'delete-button') {
        const todo = e.target.parentElement;
        removeLocal(todo);
    }
}

function removeLocal(todo) {
    let todos;
    if (localStorage.getItem('itmes') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const index = todos.indexOf(todo.children[0].innerText);
}

addButton.addEventListener('click', addTodo);
document.addEventListener('DOMContentLoaded', getLocal);
todoList.addEventListener('click', manageTodo);