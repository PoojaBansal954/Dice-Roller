const price=[10,30,20,40,50];
const num=price.reduce(sum);
console.log(num);

function sum(previous,next){
    return previous+next;

}