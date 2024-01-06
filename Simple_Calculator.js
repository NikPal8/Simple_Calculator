//NOTES:
//Date:27/12/2023
//Created an if statement to check if current button clicked is a number using !isNaN function.
//If a number is a number created a variable currentNumber to add to buttons clicked and hold that value as a string.
//The displayScreen var shows currentNumber.
//Created another if statement using .includes to check button text value matches '+', '-', 'x', '/'.
//Another variable was created to hold the currentNumber value, then currentNumber = ''. This was done to stop concatinating to later add different values.
//Used the same steps for the + if statement on the mins, times and divide.

const displayScreen = document.querySelector('#displayScreen');
const buttons = document.querySelectorAll('button');

let isCalculatorOn = false;
let currentNumber = 0;
let result = 0;
let operator = null;
let calculation = 0;
let add = 0;
const testArray = [];
let test = 0;

for (const button of buttons) {
     
     button.addEventListener('click', function() {
          let btnText = button.textContent;
          
          if (btnText === 'OFF') {
               button.textContent = 'On';
               isCalculatorOn = true;
               

          } else if (btnText === 'On') {
               button.textContent = 'OFF';
               isCalculatorOn = false;
              
          }





          if (isCalculatorOn === true) {
               if (!isNaN(btnText)) {
          
                    currentNumber = currentNumber + btnText;
                    displayScreen.textContent = currentNumber;
                    
               
               }  else if (['+', '-', 'x', '/'].includes(btnText)) { // Can't add 2 values here, this needs to be '+' to execute. enter:2 + enter: + (this runs) enter:2, this does not run, therefore won't add values. 
                    
                    operator = btnText;
                    result =  parseInt(result) + parseInt(currentNumber);
                    // result = parseInt(currentNumber);
                    currentNumber = '';
                    
                    
                    
               } else if (btnText === '=') {
                    
                    if (operator === '+') {
                         
                         // result = parseInt(result) + parseInt(currentNumber);
                         

                    } else if (operator === '-') {
                         result = parseInt(result) - parseInt(currentNumber);


                    } else if (operator === 'x') {
                         result = parseInt(result) * parseInt(currentNumber);


                    } else if (operator === '/') {
                         result = parseInt(result) / parseInt(currentNumber);

                    }

                    
                    currentNumber = result;
                    displayScreen.textContent = currentNumber;
                    
                    
               
               } else if (btnText === 'C') { //clears all values
                    result = 0;
                    currentNumber = '';
                    displayScreen.textContent = "";
                    operator = null;
               }
                    
               
          }
          
     })
}













//***********Bad version below*****************



// const displayScreen = document.querySelector('#displayScreen');
// const buttons = document.querySelectorAll('button');

// let isCalculatorOn = false;
// let currentNumber = '';
// let result = 0;
// let operator = null;
// let result2 = 0;

// for (const button of buttons) {
     
//      button.addEventListener('click', function() {
//           let btnText = button.textContent;
          
//           if (btnText === 'OFF') {
//                button.textContent = 'On';
//                isCalculatorOn = true;
//                console.log("btnText", btnText);
//                console.log("isCalculatorOn", isCalculatorOn);
//                // console.log("btnText", btnText);
//                // console.log("isCalculatorOn", isCalculatorOn);

//           } else if (btnText === 'On') {
//                button.textContent = 'OFF';
//                isCalculatorOn = false;
//                console.log("btnText", btnText);
//                console.log("isCalculatorOn", isCalculatorOn);
//                // console.log("btnText", btnText);
//                // console.log("isCalculatorOn", isCalculatorOn);
//           }

//           if (isCalculatorOn === true) {
//                if (!isNaN(btnText)) {
//                     currentNumber = currentNumber + btnText;
//                     console.log("btnText", btnText);
//                     console.log("currentNumber", currentNumber);
//                     // console.log("btnText", btnText);
//                     // console.log("currentNumber", currentNumber);
//                     displayScreen.textContent = currentNumber;
//                     console.log("operator", operator);
//                } else if (['+', '-', 'x', '/'].includes(btnText)) {
//                     operator = btnText;
//                     result = currentNumber;
//                     console.log("result", result);
//                     currentNumber = '';

//                } else if (btnText === '=') {
//                     if (operator === '+') {
//                          result = parseInt(result) + parseInt(currentNumber);
                         
//                          console.log("result", result);
//                     }
//                     currentNumber = result;
//                     displayScreen.textContent = currentNumber;
//                }



//           }
//      })
// }