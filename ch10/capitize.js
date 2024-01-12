const string = prompt('영문 소문자 입력');

// const first = string[0].toUpperCase();
// const remain = string.slice(1);
// const result = first + remain;

const result = [string[0].toUpperCase, ...string.slice(1)].join("");