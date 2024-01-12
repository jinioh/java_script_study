const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
})

numbers.push(sum);
console.log(numbers);

function tail(arr) {
    return arr.length > 1 ? arr.slice(1) : arr;
}

console.log(tail(numbers));