let trailingResults=0;
let operation= ['divide','multiply','subtract','add'];
let workingOperation="";

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
      //  console.log("dealing with an operation");

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
                console.log(display.innerHTML,"dealing with a set operand");
                trailingResults=calculate(trailingResults,display.innerHTML,workingOperation);
                secondaryDisplay.innerHTML=trailingResults;
                display.innerHTML=0;
                workingOperation=input;
            }
    }else if(input === "equals"){
       
        display.innerHTML = calculate(trailingResults, display.innerHTML, workingOperation);
        trailingResults = 0;
        workingOperation="";
        secondaryDisplay.innerHTML= trailingResults;
    }else if(input === "decimal"){
     //  console.log("decimal clicked")
        if(display.innerHTML.indexOf(".") ===-1){
            display.innerHTML += ".";
        }
    //  console.log("decimal skiped bcoz we alredy have decimal in the number");

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