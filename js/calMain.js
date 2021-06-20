let trailingResults=0;
let operation= ['divide','multiply','subtract','add'];
let workingOperation="";
<!--this function display the results -->
function updateDisplay(input){
    let display =document.getElementById("display");
    let secondaryDisplay=document.getElementById("secondaryDisplay");

    if(display.innerHTML === "0" && operation.indexOf(input) === -1){
        if(input === 'decimal'){
        display.innerHTML='0.'
       }else if(input === "negativeValue"){
            if( display.innerHTML.indexOf("-1") === -1 ){
                display.innerHTML= "-"+ display.innerHTML;
            }else if(display.innerHTML.indexOf("-1" > -1)){
                display.innerHTML= display.innerHTML.slice(1,display.innerHTML.length);
            }
       } else{
        display.innerHTML=input;
       }
       
    }else if(operation.indexOf(input) >=0){
 
        if (trailingResults === display.innerHTML){
            //operand was selected twice
            workingOperation=input;
            }
            else if(workingOperation===""){
            //dealing without an operand
                workingOperation=input;
                trailingResults=display.innerHTML;
                secondaryDisplay.innerHTML = trailingResults;
                display.innerHTML=0;
            }
            else{
                ///dealing with a set operand
<!-- this was to see wat is going on in the console -->
                console.log(display.innerHTML,"dealing with a set operand");
                <!-- this is the caculation for the second time -->
                trailingResults=calculate(trailingResults,display.innerHTML,workingOperation);
                secondaryDisplay.innerHTML=trailingResults;
                display.innerHTML=0;
                workingOperation=input;
            }
    }else if(input === "equals"){
       <!-- this deals with the equal sign -->
        display.innerHTML = calculate(trailingResults, display.innerHTML, workingOperation);
        trailingResults = 0;
        workingOperation="";
        secondaryDisplay.innerHTML= trailingResults;
        <!-- this deals with the decimal -->
    }else if(input === "decimal"){
     //  console.log("decimal clicked") to check wat is going on in the console
        if(display.innerHTML.indexOf(".") ===-1){
            display.innerHTML += ".";
        }
    //  console.log("decimal skiped bcoz we alredy have decimal in the number");
<!-- dealing the negative value (+/-) -->
   }else if(input === "negativeValue"){
    console.log("negativeValue selected");
        if( display.innerHTML.indexOf("-1") === -1 ){
            display.innerHTML= "-"+ display.innerHTML;
        }else if(display.innerHTML.indexOf("-1" > -1)){
            display.innerHTML= display.innerHTML.slice(1,display.innerHTML.length);
        }
    
   }else{
        display.innerHTML += input;
    }  
    console.log(trailingResults,"<= trailingResults", display.innerHTML,"<= display.innerHTML",workingOperation,"<= workingOperation");
}
function clearDiplay(){
    let display =document.getElementById("display");
    let secondaryDisplay =document.getElementById("secondaryDisplay");
    trailingResults=0;
    display.innerHTML = 0;
    secondaryDisplay.innerHTML=trailingResults;
}
function calculate(firstNumber,secondNumber,operator){
    let result;
    firstNumber=parseFloat(firstNumber);
    secondNumber=parseFloat(secondNumber);
    switch(operator) {
    case "add":
        console.log("add caculated");
        result=firstNumber + secondNumber;
        break;
    case "subtract":
    console.log("subtract caculated");
        result=firstNumber - secondNumber;
        break;
    case "multiply":
    console.log("multiply caculated");
        result=firstNumber * secondNumber;
        break;
    case "divide":
    console.log("divide caculated");
        result=firstNumber / secondNumber;
        break;
    default:
        console.log("calculate switch missed somthing")
    }
    return result.toString();
}
