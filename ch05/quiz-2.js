const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2")
const btn = document.querySelector("#calc");
const $result = document.querySelector("#result");

function getGCD(n, m) {
    let max = n > m ? n : m;
    let GCD = 0;
    for (let i = 1; i <= max; i++) {
      if (n % i === 0 && m % i === 0) {
        GCD = i;   
      }
    }
    return GCD;
  }

btn.addEventListener('click', () => {
    const result = getGCD(num1.value, num2.value);
    $result.innerText = result;
});