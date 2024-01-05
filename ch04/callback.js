function showData(name, age) {
    alert(`안녕하세요? ${name}님. 나이가 ${age}살이네요.`);
}

function getData(callback) {
    let userName = prompt('이름 입력');
    let userAge = prompt('나이 입력');
    callback(userName, userAge);
}

getData(showData);