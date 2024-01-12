const order = new Promise((resolve, reject) => {
    let coffee = prompt('커피를 주문해', '아메리카노');
    if (coffee  != null && coffee != '') {
        document.querySelector('.start').innerHTML = `${coffee} 주문접수`;
        setTimeout(() => {
            resolve(coffee)
        }, 3000);
    } else {
        reject('커피 주문 암함')
    }
});

function display(result) {
    document.querySelector(".end").innerText = `${result} 준비 완료`;
    document.querySelector(".end").classList.add("active");
    document.querySelector(".start").classList.add("done");
}

function showerr(err) {
    console.log(err);
}

order
    .then(display)
    .catch(showerr);