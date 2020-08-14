let numBox = document.querySelectorAll(".number-box");
for (let index = 0; index < 10; index++) {
    numBox[0].innerHTML += '<div class="number hover">' + index +'</div>';
    numBox[1].innerHTML += '<div class="number2 hover2">' + index +'</div>';
}
numBox[0].innerHTML += "<div id = 'dot' class = ' hover'>.</div>";
numBox[1].innerHTML += "<div id = 'dot2' class = 'number2 hover2'>.</div>";
numBox[0].innerHTML += "<div id = 'clear' class = 'number hover'>C</div>";
numBox[1].innerHTML += "<div id = 'clear2' class = 'number2 hover2'>C</div>";

const clearBox = document.querySelector("#clear")
const nums = Array.from(document.querySelectorAll(".number"));
const resultArea = document.querySelector(".result-area")
nums.forEach((num) => {
    num.addEventListener("click", function () {
        resultArea.innerHTML += num.textContent;
        console.log(num);
    } )
})


const dot = document.querySelector('#dot');
dot.addEventListener("click",()=>{
    resultArea.innerHTML += '.'
})
clearBox.addEventListener("click",()=> {resultArea.innerHTML = ""; number1 = 0; number2= 0;})
let operation = "";
let number1 = 0;
let number2 = 0;
const equal = document.querySelector("#equal");
const add = document.querySelector("#add");
const minus = document.querySelector("#subst");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");

equal.addEventListener("click", ()=>{
        
        number2 = parseFloat(resultArea.textContent);
        if (operation == "add"){
            number1 += number2;
            resultArea.innerHTML = number1;
        }
        else if(operation == "minus"){
            number1 -= number2;
            resultArea.innerHTML = number1;
            
        }
        else if(operation == "divide"){
            number1 /= number2;
            resultArea.innerHTML = number1;
            
        }
        else if(operation == "multiply"){
            number1 *= number2;
            resultArea.innerHTML = number1;
            
        } else {alert("Error")}
        
});

add.addEventListener("click", ()=>{
    if (resultArea.innerHTML != ""){  
    number1 = parseFloat(resultArea.textContent);
    resultArea.innerHTML = "";
    
    operation = "add";
    
    } operation = "add";
});

minus.addEventListener("click", ()=>{
    if (resultArea.innerHTML != ""){  
    number1 = parseFloat(resultArea.textContent);
    resultArea.innerHTML = "";
    
    operation = "minus";
    
    } operation = "minus";
});

divide.addEventListener("click", ()=>{
    if (resultArea.innerHTML != ""){  
    number1 = parseFloat(resultArea.textContent);
    resultArea.innerHTML = "";
    operation = "divide";
    
    } operation = "divide";
});

multiply.addEventListener("click", ()=>{
    if (resultArea.innerHTML != ""){  
    number1 = parseFloat(resultArea.textContent);
    resultArea.innerHTML = "";
    operation = "multiply";
    
    } operation = "multiply";
});

// Type 2

const clearBox2 = document.querySelector("#clear2")
const nums2 = Array.from(document.querySelectorAll(".number2"));
const resultArea2 = document.querySelector(".result-area2")
nums2.forEach((num) => {
    num.addEventListener("click", function () {
        resultArea2.innerHTML += num.textContent;
    } )
});

const dot2 = document.querySelector('#dot2');
dot2.addEventListener("click",()=>{
    resultArea.innerHTML += '.';
});
clearBox2.addEventListener("click",()=> {resultArea2.innerHTML = "";});

const equal2 = document.querySelector("#equal2");
const add2 = document.querySelector("#add2");
const minus2 = document.querySelector("#subst2");
const divide2 = document.querySelector("#divide2");
const multiply2 = document.querySelector("#multiply2");

let lastChar = "";

add2.addEventListener("click", ()=>{
    lastChar = resultArea2.innerHTML.slice(-1)
    if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" ){
        resultArea2.innerHTML += "+";
    }  else {resultArea2.innerHTML = resultArea2.innerHTML.slice(0,-1);
        resultArea2.innerHTML += "+";
    }
    
});

minus2.addEventListener("click", ()=>{
    lastChar = resultArea2.innerHTML.slice(-1)
    if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" ){
        resultArea2.innerHTML += "-";
    }  else {resultArea2.innerHTML = resultArea2.innerHTML.slice(0,-1);
        resultArea2.innerHTML += "-";
    }
    
});

divide2.addEventListener("click", ()=>{
    lastChar = resultArea2.innerHTML.slice(-1)
    if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" ){
        resultArea2.innerHTML += "/";
    }  else {resultArea2.innerHTML = resultArea2.innerHTML.slice(0,-1);
        resultArea2.innerHTML += "/";
    }
    
});

multiply2.addEventListener("click", ()=>{
    lastChar = resultArea2.innerHTML.slice(-1)
    if (lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*" ){
        resultArea2.innerHTML += "*";
    }  else {resultArea2.innerHTML = resultArea2.innerHTML.slice(0,-1);
        resultArea2.innerHTML += "*";
    }
    
});

equal2.addEventListener("click",() => {
    resultArea2.innerHTML = eval(resultArea2.textContent)
})

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const calculator1 = document.querySelector("#first-container");
const calculator2 = document.querySelector("#second-container");
const calculator3 = document.querySelector("#third-container");

calculator1.style.display = 'none';
calculator2.style.display = 'none';

btn1.addEventListener("click", () => {
    calculator2.style.display = "none";
    calculator3.style.display = "none";
    calculator1.style.display = "block"
});

btn2.addEventListener("click", () => {
    calculator1.style.display = "none";
    calculator3.style.display = "none";
    calculator2.style.display = "block"
});

btn3.addEventListener("click", () => {
    calculator1.style.display = "none";
    calculator2.style.display = "none";
    calculator3.style.display = "";
});


// Type 3

function add3(num1,num2) {
    return num1 + num2
}

function substract3(num1,num2) {
    return num1 - num2
}

function divide3(num1,num2) {
    return num1 / num2
}

function multiply3(num1,num2) {
    return num1 * num2
}

function operate(calc,num1,num2) {
   
    if (calc == "add") {
       return add3(num1,num2);
    }
    else if (calc == "substract") {
        return substract3(num1,num2);
    } 
    else if (calc == "multiply") {
        return multiply3(num1,num2);
    }
    else if (calc == "divide") {
        return divide3(num1,num2);
    }
    
    alert("Please enter add,substract,multiply or divide in first parameter")
}

const display = document.querySelector("#input-bar");

function addToDisplay(btn) {
    display.value += btn.textContent;
}

let inputs = Array.from(document.querySelectorAll(".display"));

inputs.forEach((btn) =>
    btn.addEventListener("click", () => {
        addToDisplay(btn);
    }));

const del = document.getElementById("btn-back");
del.addEventListener("click",() => {
    let displayValue = display.value.slice(0,-1);
    display.value = displayValue;  
});

let leftNum = 0.0;
let rightNum = 0.0;
let operator = "";
const smallDisplay = document.getElementById("small-box");

const multiplication = document.getElementById("btn-times");
multiplication.addEventListener("click",() => {
    leftNum = parseFloat(display.value);
    smallDisplay.innerHTML = display.value + " x"
    display.value = "";
    operator = "multiply"
});

const division = document.getElementById("btn-divide");
division.addEventListener("click",() => {
    leftNum = parseFloat(display.value);
    smallDisplay.innerHTML = display.value + "÷"
    display.value = "";
    operator = "divide"
});

const substraction = document.getElementById("btn-minus");
substraction.addEventListener("click",() => {
    leftNum = parseFloat(display.value);
    smallDisplay.innerHTML = display.value + "-"
    display.value = "";
    operator = "substract"
});

const addition = document.getElementById("btn-plus");
addition.addEventListener("click",() => {
    leftNum = parseFloat(display.value);
    smallDisplay.innerHTML = display.value + "+"
    display.value = "";
    operator = "add"
});

const equal3 = document.getElementById("btn-equal");
equal3.addEventListener("click",() => {
    rightNum = parseFloat(display.value);
    smallDisplay.innerHTML = "";
    switch (operator) {
        case 'multiply':
            display.value = operate("multiply",leftNum,rightNum)
            break;
        case 'substract':
            display.value = operate("substract",leftNum,rightNum)
            break;
        case 'divide':
            display.value = operate("divide",leftNum,rightNum)
            break;
        case 'add':
                display.value = operate("add",leftNum,rightNum)
                break;
        default: 
            break;
    }
});

const clear = document.getElementById("btn-clear");
clear.addEventListener("click",() => {
    display.value = "";
    smallDisplay.innerHTML = "";
});
