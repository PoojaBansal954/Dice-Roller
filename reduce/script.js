// const price=[10,30,20,40,50];
// const total=price.reduce(sum);
// console.log(total);

// function sum(previous,next){
//     return previous+next;

// }

// Using function expression

const price=[10,30,20,40,50];
const total=price.reduce(function(previous,next){
    return previous+next;
});
 console.log(total);