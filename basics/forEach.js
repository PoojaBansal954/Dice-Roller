let number=[1,3,5,6,7];
number.forEach(double);


// function display(element){
//    console.log(element);
// }
function double(element,index,array){
    console.log (Math.pow(element,2));
    array[index]=Math.pow(element,2);
}