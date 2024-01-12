let likePizza = true;
const pizza = new Promise((resolve, reject) => {
    if (likePizza) 
      resolve('피자 주문');
    else
      reject('파지 주문 안해');
});

pizza.then(
    result => console.log(result)
).catch(
    err => console.error(err)
).finally(
    () => console.log('끝')
);