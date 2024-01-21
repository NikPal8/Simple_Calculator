//NOTES:
//Date: 21/01/2024
//Tested: 4 x 4 / 2 + 4 - 1 x 11 = 33
//Tested: 11 / 2 = 5.5 / 2 = 2.75

const displayScreen = document.querySelector('#displayScreen');
const buttons = document.querySelectorAll('button');

let isCalculatorOn = false;
let currentNumber = '';
let result = 0;
let operator = '+';
let currentOperator = operator;
let incrementor = 0;


for (const button of buttons) {

     button.addEventListener('click', function() {

          let btnText = button.textContent;
          
          if (btnText === 'OFF') {

               button.textContent = 'On';
               isCalculatorOn = true;
               document.querySelector('#btnOnOff').style.backgroundColor = 'greenyellow';
               
               for (const button of buttons) {
                    button.classList.add('buttonsOn');

               }
               
               
          } else if (btnText === 'On') {

               button.textContent = 'OFF';
               isCalculatorOn = false;
               document.querySelector('#btnOnOff').style.backgroundColor = 'lightcoral';
               displayScreen.textContent = '';
               
               for (const button of buttons) {
                    button.classList.remove('buttonsOn');

               }
          }
          

          if (isCalculatorOn === true) {
          
               if (!isNaN(btnText)) {
                    
                    currentNumber = currentNumber + btnText;
                    // displayScreen.textContent = currentNumber;
                    
               } 
               
//--------------------------------------EQUALS if statement------------------------------------------                  
               if (btnText === '=') {
                    equalsClicked = true;
                    btnText = operator;
                    
                    
               } else if (btnText === 'C') { //clears all values
                    result = 0;
                    incrementor = 0;
                    currentNumber = '';
                    displayScreen.textContent = "";
                    operator = '+';
                    currentOperator = operator;

               }
//------------------------------- + - x / if statement------------------------------------------------

               if (['+', '-', 'x', '/'].includes(btnText)) { 
                    
                    currentOperator = operator;
                    // operator = btnText;
                   
                    
                    if (operator === '+') {
                         result = parseInt(result) + parseInt(currentNumber);
          
                         
                    } else if (operator === '-') {
                         result = parseInt(result) - parseInt(currentNumber);
                         
                         
                    } else if (operator === 'x') {
                         if (currentNumber === 0) {
                              currentNumber = 1;

                         }
                         if (result === 0) {
                              result = parseInt(currentNumber);

                         } else {
                              result = parseInt(result) * parseInt(currentNumber);


                         }
                    
                    } else if (operator === '/') {
                         
                         if (currentNumber === 0) {
                              currentNumber = 1;
                         }
                         if (result === 0) {
                              result = parseInt(currentNumber);
                              
                         } else {
                              result = parseFloat(result) / parseFloat(currentNumber);
                              

                         }
                    }
                    
                    operator = btnText;
                    
                    currentNumber = 0;
                    
                    
                    
                    
                    
               } 
                
               displayScreen.textContent = result;//At this point and after '=' click we get this value. Need to capture it
               
               
          }
                    
                    
    
     })
     
}



