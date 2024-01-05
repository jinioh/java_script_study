const title = document.querySelector('#title');
const userName = document.querySelector('#desc p');
const pfImage = document.querySelector('#profile img');

title.onClick = () => title.innerHTML = '프로필';
userName.onClick = () => userName.innerHTML = `이름 : <b>민들레</b>`;
pfImage.onClick = () => pfImage.src = "image/pf2.png";