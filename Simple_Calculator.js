//NOTES:
//Date:27/12/2023
//Created an if statement to check if current button clicked is a number using !isNaN function.
//If a number is a number created a variable currentNumber to add to buttons clicked and hold that value as a string.
//The displayScreen var shows currentNumber.
//Created another if statement using .includes to check button text value matches '+', '-', 'x', '/'.
//Another variable was created to hold the currentNumber value, then currentNumber = ''. This was done to stop concatinating to later add different values.
//Used the same steps for the + if statement on the mins, times and divide.
//Date: 11/01/2024 
//Changed else if statements to if statements in order to execute during testing unsure why? Might be at the time had some execution issues?
//Changed the order of if statements
//I managed to get the addition and subtract to work, but multiplication and division does not work correctly.
//Performed debugging, console.log at various places, an array to see what values are pushed and separated the multiplication section of my code below the main body to solve this issue.
//Managed to get multiplication to work, the issue was regarding what variable carries the value and when to change currentNumber to 0.
//Separate code was tested, next step to implement to the rest of my body.

const displayScreen = document.querySelector('#displayScreen');
const buttons = document.querySelectorAll('button');

let isCalculatorOn = false;
let currentNumber = '';
let result = 0;
let operator = null;
let test = 0;
let incrementor = 0;

for (const button of buttons) {
     button.addEventListener('click', function() {
          let btnText = button.textContent;
          
          if (btnText === 'OFF') {
               button.textContent = 'On';
               isCalculatorOn = true;
               document.querySelector('#btnOnOff').style.backgroundColor = 'greenyellow';
               
               
          } else if (btnText === 'On') {
               button.textContent = 'OFF';
               isCalculatorOn = false;
               document.querySelector('#btnOnOff').style.backgroundColor = 'lightcoral';
               displayScreen.textContent = '';
          }
          


//Need to enter equals after every button click

          
          if (isCalculatorOn === true) {
               console.log("1.", operator);
               console.log("1.", result);
               if (!isNaN(btnText)) {
                    console.log("2.", operator);
                    currentNumber = currentNumber + btnText;
                    // displayScreen.textContent = currentNumber;
                    console.log("3.", operator);
                    
               } 
               
               if (btnText === '=') {
                    // incrementor = parseInt(result);
                    // console.log("2.", result);
                    
                    console.log("4.", operator);
                    // if (operator === '+') { 
                    //      incrementor = parseInt(incrementor) + parseInt(currentNumber);
                    // }

                    // if (operator === '-') { 
                    //      incrementor = parseInt(incrementor) - parseInt(currentNumber);
                    // }
                    
                    
                    // if (operator === 'x') { 
                         

                    // }
                    
                    // if (operator === '/') { 
                    //      incrementor = parseInt(incrementor) / parseInt(currentNumber);
                    // }
//--------------------------------------EQUALS if statement------------------------------------------                  
                    btnText = operator;//Changed else if statements to if, this executes below if statement.
                    // console.log("3.", result);
                    // console.log("result", result, "current", currentNumber);
                    console.log("5.", operator);
               } else if (btnText === 'C') { //clears all values
                    result = 0;
                    incrementor = 0;
                    currentNumber = '';
                    displayScreen.textContent = "";
                    operator = null;
               }
//------------------------------- + - x / if statement------------------------------------------------

               if (['+', '-', 'x', '/'].includes(btnText)) { // Can't add 2 values here, this needs to be '+' to execute. enter:2 + enter: + (this runs) enter:2, this does not run, therefore won't add values. 
                    console.log("6.", operator);
                    operator = btnText;
                    console.log("4.", result, "current:", currentNumber);
                    console.log("7.", operator);
                    if (operator === '+') {
                         result = parseInt(result) + parseInt(currentNumber);
                         
                         
                    } else if (operator === '-') {
                         result = parseInt(result) - parseInt(currentNumber);
                         
                    } else if (operator === 'x') {
                         console.log("5.", result, "current:", currentNumber);
                         if (currentNumber === 0) {
                              currentNumber = 1;
                         }
                         if (result === 0) {
                              console.log("6.", result, "current:", currentNumber);
                              result = parseInt(currentNumber);
                              console.log("7.", result, "current:", currentNumber);
                         } else {
                              console.log("8.", result, "current:", currentNumber);
                              result = parseInt(result) * parseInt(currentNumber);
                              console.log("9.", result);

                         }
                         console.log("10.", result);
                    } else if (operator === '/') {
                         
                         if (currentNumber === 0) {
                              currentNumber = 1;
                         }
                         if (result === 0) {
                              
                              result = parseInt(currentNumber);
                              
                         } else {
                              
                              result = Math.round(parseInt(result) / parseInt(currentNumber));
                              

                         }
                    }

                    console.log("8.", operator);
                    console.log("11.", result);
                    currentNumber = 0;
                    
                    
                    
                    
                    
               } 
               console.log("12.", result);   
               displayScreen.textContent = result;//At this point and after '=' click we get this value. Need to capture it
               console.log("13.", result);
               
          }
                    
                    
    
     })
     
}


//--------------------------------------------------//
//------------Calculator Multiplication v2------------//
//--------------------------------------------------//
//The below code works for the following test:
//Test #1: 2 x 3 x 4 = 24 x 2 = 48
//Test #2: 2 x 2 = 4 x 2 = 8 x 2 x 2 = 32

// const displayScreen = document.querySelector('#displayScreen');
// const buttons = document.querySelectorAll('button');

// let currentNum = '';
// let incrementor = 0;
// let result = 0;
// let operator = null;

// for (const button of buttons) {
//      let btnText = button.textContent;

//      button.addEventListener('click', function() {
//           if (!isNaN(btnText)) {
//                currentNum = currentNum + btnText;
//                result = currentNum;     
                                        
//           }

//           if (['x'].includes(btnText)) {
//                operator = btnText;
//                if (incrementor === 0) {
//                     incrementor = parseInt(result);

//                } else {
//                     incrementor = parseInt(incrementor) * parseInt(result);

//                }

//           }

//           if (btnText === '=') {
//                result = parseInt(result) * parseInt(incrementor);
//                incrementor = 0; // Issue at Round 7: incrementor carries the value '6' and will multiply by the last result which is not correct.

//           }
//           currentNum = 0;
//           displayScreen.textContent = result;
          

//      })
// }
//---------------TESTING----------------//
          //Round 1: (click #2) operator = null  incrementor = null                  result = currentNum(2)             currentNum = 2 - currentNum = 0
          //Round 2: (click x) operator = 'x'   incrementor = result(2)              result = 2                                          currentNum = 0
          //Round 3: (click #3) operator = 'x    incrementor = 2                     result = 3                         currentNum = 3 - currentNum = 0
          //Round 4: (click x) operator = 'x'   incrementor = 2 * result(3) = 6      result = 3                                          currentNum = 0
//*Error  //Round 5: (click #4) operator = 'x'   incrementor = 6                     result = 4                         currentNum = 4 - currentNum = 0
          //Round 6: (click =) operator = 'x'    incrementor = 6                     result = 4 * incrementor(6) = 24                    currentNum = 0 *incrementor = 0!
//Error   //Round 7: (click x) operator = 'x'    incrementor = 6 * result(24) = 144  result = 24                                         currentNum = 0 *incrementor = 0!
//Try*    //Round 7: (click x) operator = 'x'    incrementor = result(24)            result = 24                                         currentNum = 0
          //Round 8: (click #2) operator = 'x'   incrementor = result(24)            result = 2                         currentNum = 2 - currentNum = 0
          //Round 9: (click =) operator = 'x'    incrementor = 24                    result = 2 * incrementor(24) = 48                   currentNum = 0 incrementor = 0
          //This should work in theory?
          //Round 10: If you click #4 result(24) will get overwritten and equal currentNum = 4
          //Round 10: if you click 'x' result(24) won't change and incrementor = result(24)


//--------------------------------------------------//
//------------Calculator Multiplication v1------------//
//--------------------------------------------------//

// const displayScreen = document.querySelector('#displayScreen');
// const buttons = document.querySelectorAll('button');

// let currentNumber = '';
// let result = 0;
// let incrementor = 0;
// let operator = null;
// const testArray = [];


// for (const button of buttons) {
//      let btnText = button.textContent;
//      button.addEventListener('click', function() {
//           if (!isNaN(btnText)) {
//                currentNumber = currentNumber + btnText;
//                displayScreen.textContent = currentNumber;
               
//           }

//           if (btnText === '=') {
//                // if (result === 0) {
//                     result = parseInt(incrementor) * parseInt(currentNumber);
//                     incrementor = result;
//                     displayScreen.textContent = result;
                    
//                // }
//                currentNumber = 0;
               
//           }
          

//           if (['x'].includes(btnText)) {
//                if (incrementor === 0) {
//                     incrementor = currentNumber;
//                } else {
//                     incrementor = parseInt(incrementor) * parseInt(currentNumber);
                    
//                     currentNumber = 0;
//                }
               
//                // btnText = '=';
//           }
          
//      })
// }


//--------------FUNCTION---------------//

// function multiply(x, y) {
     
//      let c = x * y;
//      if(x < 1 || y < 1) {

//      }
     
// }

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