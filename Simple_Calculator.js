//Selected the displayScreen element to display the numbers to user.
//Selected the buttons and looped them using for of loop. 
//Created Click Event listener
//Created a variable 'isCalculatorOn' with a boolean value
//Added if statments to checks if btn === 'OFF' /'On', button text changes to 'OFF'/ 'On'
//I have attached the isCalculatorOn to the if statements, to change true to false
//This value will if false will prevent user from getting values of buttons clicked. 

const displayScreen = document.querySelector('#displayScreen');
const buttons = document.querySelectorAll('button');

let isCalculatorOn = false;

for (const button of buttons) {
     button.addEventListener('click', function() {
          let btn = button.textContent;

          if (btn === 'OFF') {
               button.textContent = 'On';
               isCalculatorOn = true;
               console.log(btn);
               console.log("isCalculatorOn", isCalculatorOn);
          } else if (btn === 'On') {
               button.textContent = 'OFF';
               isCalculatorOn = false;
               console.log(btn);
               console.log("isCalculatorOn", isCalculatorOn);
          }

          if (isCalculatorOn === true) {
               console.log(btn);
          }
     })
}