const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min))+min;

let guess;
let attempt=0;
let running=true;
while(running){
    guess=window.prompt(`Guess a no from ${min} - ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid no")
    }
    else if(guess<min||guess>max){
        window.alert(`Enter no in valid range`)
    }
    else{
        attempt++;
        if(guess>answer){
            window.alert("TOO High! Enter again")
        }
        else if(guess<answer){
          window.alert("TOO Low! Enter again")
        }
        else{
            window.alert(`Correct!The no.was ${answer}, you take ${attempts}attempts`);
            running=false;
        }
    }
}