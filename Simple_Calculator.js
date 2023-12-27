//NOTES:
//Date: 26/12/2023
//Selected the displayScreen element to display the numbers to user.
//Selected the buttons and looped them using for of loop. 
//Created Click Event listener
//Created a variable 'isCalculatorOn' with a boolean value
//Added if statments to checks if btn === 'OFF' /'On', button text changes to 'OFF'/ 'On'
//I have attached the isCalculatorOn to the if statements, to change true to false
//This value will if false will prevent user from getting values of buttons clicked. 
//Date:27/12/2023
//Created an if statement to check if current button clicked is a number using !isNaN function.
//If a number is a number created a variable currentNumber to add to buttons clicked and hold that value as a string.
//The displayScreen var shows currentNumber.
//Created another if statement using .includes to check button text value matches '+', '-', 'x', '/'.
//Another variable was created to hold the currentNumber value, then currentNumber = ''. This was done to stop concatinating to later add different values.
const displayScreen = document.querySelector('#displayScreen');
const buttons = document.querySelectorAll('button');

let isCalculatorOn = false;
let currentNumber = '';
let result = 0;
let operator = null;


for (const button of buttons) {
     button.addEventListener('click', function() {
          let btnText = button.textContent;

          if (btnText === 'OFF') {
               button.textContent = 'On';
               isCalculatorOn = true;
               console.log("btnText", btnText);
               console.log("isCalculatorOn", isCalculatorOn);
          } else if (btnText === 'On') {
               button.textContent = 'OFF';
               isCalculatorOn = false;
               console.log("btnText", btnText);
               console.log("isCalculatorOn", isCalculatorOn);
          }

          if (isCalculatorOn === true) {
               if (!isNaN(btnText)) {
                    currentNumber = currentNumber + btnText;
                    console.log("btnText", btnText);
                    console.log("currentNumber", currentNumber);
                    displayScreen.textContent = currentNumber;
                    console.log("operator", operator);
               } else if (['+', '-', 'x', '/'].includes(btnText)) {
                    operator = btnText;
                    result = currentNumber;
                    console.log("result", result);
                    currentNumber = '';

               } else if (btnText === '=') {
                    if (operator === '+') {
                         result = parseInt(result) + parseInt(currentNumber);
                         
                         console.log("result", result);
                    }
                    currentNumber = result;
                    displayScreen.textContent = currentNumber;
               }



          }
     })
}