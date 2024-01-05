window.onload = alert('hello');

const btn = document.querySelector('button');
btn.onclick = function() {
    document.body.style.backgroundColor = 'green';
}

const body = document.body;
const result = document.querySelector('#result');

body.addEventListener('keydown', (e) => {
    result.innerText = `
    code: ${e.code},
    key: ${e.key}
    `;
});

const selectMenu = document.querySelector('#major');

function displaySelect() {
    let selected = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(selected);
}
selectMenu.onchange = displaySelect;

const btn2 = document.querySelector('button');
btn2.onclick = function() {
    document.body.backgroundColor = "black";
}

function changeBackground() {
    document.body.style.backgroundColor = 'green';
}
const button = document.querySelector('#bttn');
// button.addEventListener('click', changeBackground);
button.addEventListener('click', () => {
    const word = document.querySelector('#word').value;
    const result = document.querySelector('#result');
    let count = word.length;

    result.innerText = `${count}`;
});

const box = document.querySelector('#box');
box.addEventListener('click', (e) => {
    alert(`이벤트 발생 위치: ${e.pageX}, ${e.pageY}`)
});

const result2 = document.querySelector('#result');
body.addEventListener('keydown', (e) => {
    result2.innerText = `code: ${e.code}, key: ${e.key}`;
});