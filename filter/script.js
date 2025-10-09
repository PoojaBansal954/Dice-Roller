// filter---create a new array by filtering out elements

let number=[1,2,4,6,7,8,10];
let evenNums=number.filter(isEven);
console.log(evenNums);


function isEven(element){
    return element%2===0;
}