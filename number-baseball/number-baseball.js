const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let n = 1; n <= 9; n++) {
    numbers.push(n);
}

const answer = [];
for (let n = 0; n <= 3; n++) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
    if (input.length !== 4) {
        return alert('4자리 입력');
    }
    if (new Set(input).size !== 4) {
        return alert('중복 안되게해');
    }
    if (tries.includes(input)) {
        return alert('이미 시도한거야');
    }

    return true;
}

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value;
    console.log(value);
    $input.value = '';
    const valid = checkInput(value);
    if (!valid) return;
    if (answer.join('') === value) {
        $logs.textContent = '홈런';
        return;
    }
    if (tries.length >= 9) {
        const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
        $logs.appendChild(message);
        return;
    }

    let strike = 0;
    let ball = 0;
    answer.forEach((number, aIndex) => {
        const index = value.indexOf(String(number));
        if (index > -1) {
            if (index === aIndex) {
                strike++;
            } else {
                ball++;
            }
        }
    });
   
    $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    tries.push(value);
});