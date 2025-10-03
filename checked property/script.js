const myCheckBox=document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const payPalBtn=document.getElementById("payPalBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent="you are subscribed";
        // console.log("You are subscribed") wrong
    }
    else{
        subResult.textContent="you are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent="you are paying through visa";
        // console.log("You are subscribed") wrong
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent="you are paying through card";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent="you are paying through payPal";
    }
    else{
        paymentResult.textContent="you must select a payment type";

    }
}


