const userNumber = document.querySelector("#user-number");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    let n = userNumber.value;

    try {
        if (n === '' || isNaN(n)) {
            throw '숫자 입력';
        }

        n = Number(n);
        if (n <= 10) {
            document.querySelector('#result').innerText = n;
        } else {
            throw '10보다 작은 수 입력'
        }
    } catch (err) {
        console.error(err);
    } finally {
        userNumber.value = '';
    }
});
