const myText= document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age=0;
mySubmit.onclick=function(){
   age= myText.value;
   age= Number(age)
   if(age<18){
       // console.log("U cant vote")
       resultElement.textContent="U cant vote";
    
        if(age<=0){
        resultElement.textContent ="Enter valid age";
    }
}
    else if(age>18){
    //    console.log("U can vote") 
        resultElement.textContent="U can vote";
    }
    else{
        // console.log("u must do apply ")
         resultElement.textContent="U must do apply ";
    }
}