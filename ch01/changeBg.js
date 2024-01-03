function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    const rnCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rnCol;
}
bgChange();