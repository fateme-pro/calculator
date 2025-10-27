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

let firstNumber="";
let secondNumber="";
let operator="";
let currentNumber="";

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
const buttons=["7","8","9","*","4","5","6","-","1","2","3","+","+/-","0","/","=","clear"];
const container=document.querySelector(".container");
const display = document.querySelector(".display");


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
/*
منطق کلی هنگام کلیک دکمه‌ها

اگر دکمه عدد بود (0-9) → به currentNumber اضافه می‌کنیم و نمایشگر را آپدیت می‌کنیم.

اگر دکمه عملگر بود (+ - * /) →

مقدار currentNumber را به number منتقل می‌کنیم.

operator را برابر با دکمه قرار می‌دهیم.

currentNumber را خالی می‌کنیم تا عدد دوم وارد شود.

اگر دکمه "=" بود →

مقدار currentNumber را به anotherNumber منتقل می‌کنیم.

تابع operate(number, anotherNumber, operator) را صدا می‌زنیم.

نتیجه را در نمایشگر نشان می‌دهیم و currentNumber را برابر با نتیجه قرار می‌دهیم.

اگر دکمه "+/-" بود → مقدار currentNumber را منفی/مثبت می‌کنیم.
*/
  btn.addEventListener("click",()=>{
   if(!isNaN(item)){
    currentNumber +=item;
    display.textContent=currentNumber;
   }else if( item==="+"|| item==="-" || item==="/" || item==="*" ){
    firstNumber=currentNumber;
    operator=item;
    currentNumber="";
    display.textContent=firstNumber+operator;
   }else if(item==="="){
    secondNumber=currentNumber;
    const result=operate(Number(firstNumber),Number(secondNumber),operator);
    display.textContent=result;
    currentNumber=result;
   }else if(item==="clear"){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    currentNumber = "";
    display.textContent = "0"; // نمایشگر ریست میشه
   }

  })
});





