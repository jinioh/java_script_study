const member1 = ['HTML', 'CSS']
const member2 = ['CSS', '자바스크립트', '리액트']
const member3 = ['자바스크립트', '타입스크립트']

const subjects = [...member1, ...member2, ...member3];
const result = new Set();
subjects.forEach(subject => {
    result.add(subject);
});

console.log(result);