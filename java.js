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
const buttons=["7","8","9","*","4","5","6","-","1","2","3","+","+/-","0","/","="];
const container=document.querySelector(".container");
const display = document.querySelector(".display");
display.value = "123"; // مقدار را نشان می‌دهد


let row;//each container's row
buttons.forEach((item,index)=>{
  if(index%4 ==0){
   row=document.createElement("div");
   row.classList.add("row");
   container.appendChild(row);
  }
  const btn=document.createElement("button");
  btn.textContent=item;
  btn.classList.add("button");
  row.appendChild(btn);

})



