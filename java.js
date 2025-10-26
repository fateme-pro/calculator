function add(a,b){
 return a+b;
}
function substract(a,b){
 return a-b;
}
function multiply(a,b){
 return a*b;
}
function divide(a,b){
 return a/b;
}

let number="";
let anotherNumber="";
let operator="";

function operate(a,b,op){
 if(op=="+"){
   return add(a,b);
 }else if(op=="-"){
   return substract(a,b);
 }else if (op=="*"){
   return multiply(a,b);
 }else if(op=="/"){
   return divide(a,b);
 }else{
   return "Invalid Number";
 }
}

console.log(operate(3,4,"+"));