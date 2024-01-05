let counter = 0;

let timer = setInterval(() => {
    console.log('안녕?');
    counter++;
    if (counter === 5) 
        clearInterval(timer);
}, 2000);