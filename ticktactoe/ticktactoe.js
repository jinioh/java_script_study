const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = '0';

const callback = (event) => {
    if (event.target.textContent !== '') {
        console.log('빈칸 아님');
    } else {
        event.target.textContent = turn;
        turn = turn === 'X' ? '0' : 'X';
    }
};

for (let i = 1; i <= 3; i++) {
    const $tr = document.createElement('tr');
    const cells = [];
    for (let j = 1; j <= 3; j++) {
        const $td = document.createElement('td');
        cells.push($td);
        $tr.appendChild($td);
    }
    rows.push($td);
    $table.appendChild($tr);
    $table.addEventListener('click', callback);
}
body.appendChild($table);
body.appendChild($result);