// function Cylinder (cylinderDiameter, cylinderHeight) {
//     this.diameter = cylinderDiameter;
//     this.height = cylinderHeight;

//     this.getVolume() = function() {
//         let radius = this.diameter / 2;
//         return (Math.PI * radius * radius * this.height).toFixed(2);
//     }
// }

class Sylinder {
    constructor(cylinderDiameter, cylinderHeight) {
        this.diameter = cylinderDiameter;
        this.height = cylinderHeight;
    }

    getVolum = function() {
        let radius = this.diameter / 2;
        return (Math.PI * radius * radius * this.height).toFixed(2);
    }
}

const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const diameter = document.querySelector('#cyl-diameter').value;
    const height = document.querySelector('#cyl-height').value;

    if (diameter === '' || height === '') {
        result.innerText = '지름과 높이값을 입력해';
    } else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
        result.innerText = cylinder.getVolum();
    }
});