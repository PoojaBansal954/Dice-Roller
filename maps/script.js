const number=[1,2,3,5];
const squares=number.map(square);
console.log(squares);

function square(element){
    return Math.pow(element,2);
}

// const student=["Pooja","bansal"];
// const names=student.map(upper);
// console.log(names);

// function upper(element){
//     return element.toUpperCase();
// }