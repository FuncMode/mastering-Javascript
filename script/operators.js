
/* let num = 10;
num += 12;
console.log(num); */

/* let x = 12;
let y = 12;
 */
/* 
// add
console.log(x + y);

// subtract
console.log(x - y);

// multiply 
console.log(x * y);

// divide 
console.log(x / y); */

// modules
// console.log(3 % 15);

// exponentt
// console.log(2 ** 3); // 2 * 2 * 2 = 8


/* console.log(5 == 5); // true
console.log(5 == '5'); //true

console.log(5 === '5') // false

console.log(false === 0); // false

console.log(false != 0); // false
console.log(true != 1); // false
 */
// console.log('' !== ' ');
// console.log(!!'');
// console.log(!!' ');




/* function validation() {

    const promptAge = prompt('type your age');
    const age = Number(promptAge);

    if(!promptAge || isNaN(promptAge) || promptAge <= 0 || promptAge >= 100) {
        alert('Invalid age! please try again')
        return;
    } 

    const message = age >= 18 ? 'Adult' : 'Minor';
    
    alert(message);

};


validation();
 */


// vote

// function votersUser() {

//     let question1 = confirm('voter kaba?');

//     if(!question1) {
//         alert('cancel, thanks');
//         return
//     }
    
//     let inputAge = prompt('type your age?');
//     let age = Number(inputAge);

//     if(!inputAge || isNaN(inputAge) || inputAge >= 100 || inputAge === 0) {
//         alert('hindi ka pwede bomoto please try again');
//         return;
//     }

//     const message = age >= 18 ? 'pwede bomoto' : 'di pa pwede bomoto';

//     alert(message);
// }

// votersUser();

// let number = 0;


// setInterval(() => { 
//     console.log(number);
//     number = (number + 1) % 6;
// }, 1000);


// console.log(number);
// console.log((number + 1) % 6);



// == check if same value
// console.log(5 == '5');
// console.log(0 == false);
// console.log(1 == true); // true 

/* 
all of this is example is checking the value not the data type
*/

// === - check value and the data type

// console.log(1 === true); //false - because same value but should be same data type also
// console.log(false === 0); // false - same value but not different data type  

// != - its check if value data is not equal in the comparison data

// console.log(1 != true); // so false - why? because the first value is same in the second value 

// console.log(1 != 0) ; // true, kase magkaiba sila ng value


// !== - check kung ang not equal ba sila ng value at data type

// console.log(1 !== 0); // true because kahit  equal ng data hindi naman sila equal ng value its consider not equal

// console.log(false !== 0); // its verry obvious kase ang 'false' ay isang boolean type at ang 0 ay number type - so true 


// &&, ||, ! - this is logical operator

// && - dapat same true, kapag false ang isa false na ang result

// || - kaht isa langg ang true it will be consider true ang result

// ! - manipulating the result example if true then you apply (!) in the true the result is false



// typeOf, instanceOf - this is the type operator - (typeOf)check if the what is the data type value

// instanceOf - it's used to check if the one object ay instance or gawa ba ay object na yun sa parent object 

// example 

// function constructor object

// ttype Person

// function Person(name) {
//     this.name = name;
// }

// const person = new Person();

// console.log(person instanceof Person); // true
// console.log(Person instanceof Object);


// example of typeOf 

// let number = 1;

// console.log(typeof number) // show the type of data in console

// console.log(0 && true);
// console.log(false || true);

// console.log(typeof Object === 'function');



// console.log(3 % 3);



// let number = 0;

// setInterval(() => {
//     console.log(number);
//     number = (number + 1) % 6
// }, 1000);

// arithmetic 

// add 5 + 5;
// multiply  10 * 3;
// divide 10 / 3;
// subtact 10 - 4
// modules 10 %  3
// exponent 10 ** 3


// assignemnt operator

/* let number = 4;
number += 3;
number -= 4
number /= 4
number *= 3
number %= 3
number **= 3
 */



// comparison

// == - it use to check the same value not data type

// console.log(5 == '5'); // true same value ignore data type
// console.log(0 == false); // false same value because false is 0 in number

// === - it use to check if the data  same value in the data type

// console.log(true === 1); // false not same data type 1 is number 
// console.log(null === false);; // false the null type is object 

// != - it use to check if value not equal ignore the data type
// console.log(1 != true); // false eqaul value yan 
// console.log(1 != false); // true because false is zero value
// console.log(' ' != 0); // false kase equal sila na zero value



// !== - it use to check if data value not equal and data type 

// console.log(1 !== true); // true
// console.log(0 !== false); // true
// console.log(' ' !== ''); // true kase ('') ito ay true ('') sa boolean so true not equal pa rin sila ng type kahit same sila ng zero value sa n number
// console.log(false !== true); //true


/* let x = 10;
x += 2;
console.log(x); */


/* 
- type of operator's

// arithmetic operator - (+, -, *, /, %, **)
// assignment operator - (+=, -=, etc..)
// comparison operator - (==, ===, !=, !==, >, <, >=, <=)
// string operator - (+) // concatenating the string using + 
// logical operator - (&&, ||, !)
// type operator - (typeOf, instanceOf)


*/

/* (() => {
    const firstInput = document.querySelector('#firstInput');
    const secondInput = document.querySelector('#secondInput');
    const operators = document.querySelector('#operators');
    const result = document.querySelector('#result');

    let firstNumberContainer = null;
    let secondNumberContainer = null;
    let operatorContainer = null;

    firstInput.addEventListener('input', (e) => {

        const { value } = e.target;

        if(!value || isNaN(value)) return;

        firstNumberContainer = value;
        compute();
    });

    secondInput.addEventListener('input', (e) => {

        const { value } = e.target;

        
        if(!value || isNaN(value)) return;

        secondNumberContainer = value;
        compute();
    });

    operators.addEventListener('change', (e) => {

        const { operator } = e.target;

        operatorContainer = operator;
        compute();
    });

    function compute() {

        if((firstNumberContainer && secondNumberContainer) === null || !operatorContainer) {
            result.textContent = 'result: 0';
            return;
        }

        let computeResult = null;

        switch(operatorContainer) {
            case '+' : {
                computeResult = firstNumberContainer + secondNumberContainer;
                break;
            }
            case '-' : {
                computeResult = firstNumberContainer- secondNumberContainer;
                break;
            }
            case '*' : {
                computeResult = firstNumberContainer * secondNumberContainer;
                break;
            }
            case '/' : {
                computeResult = firstNumberContainer / secondNumberContainer;
                break;
            }
            default : {
                computeResult = '❌ Unknown operator';
            }
        }

        result.textContent = `Result: ${computeResult}`;
    }

})(); */



// (() => {
//     const firstInput = document.querySelector('#firstInput');
//     const secondInput = document.querySelector('#secondInput');
//     const computeContainer = document.querySelector('#compute');
//     const operators = document.querySelector('#operators');
//     const result = document.querySelector('#result');

//     let firstValue = null;
//     let secondValue = null;
//     let operator = null;

//     // dyanamic type of number
//     firstInput.addEventListener('input', (e) => {
//         const value = e.target.value;

//         firstValue = Number(value);
//         computeDisplay();
//     });

// // dyanamic type of number
//     secondInput.addEventListener('input', (e) => {
//         const value = e.target.value;

//         secondValue = Number(value);
//         computeDisplay();
//     });


//     // dynamic select operators
//     operators.addEventListener('change', (e) => {
//         operator = e.target.value;
//         computeDisplay();
//     });

//     // display compute user
//     function computeDisplay() {

//         // if firstValue and secondValue if false set 0 in textContent if true set the current value Number and the operator ganun din
//         computeContainer.textContent = `${!firstValue ? '0' : firstValue} ${!operator ? operators.value : operator} ${!secondValue ? '0' : secondValue} =`;

//         // if firstValue and secondValue is === 0 clear the computeContainer and return or exit agad
//         if(firstValue === 0 && secondValue === 0) {
//             computeContainer.textContent = '';
//             result.textContent = 'result: 0';
//             return
//         }

//         /* 
//         ang balak ko ay mag eval so dapat equal ang firstValue at secondValue sa computeContainer
//         */
//         resultDisplay()
//     }

//     // display total result
//     function resultDisplay() {

//         // base
//         let computeResult = null;
//         // remove equal in textContent
//         if(computeContainer.textContent.includes('=')) {
//             computeResult = `${!firstValue ? '0' : firstValue} ${!operator ? operators.value : operator} ${!secondValue ? '0' : secondValue}`;
//         }   

//         // total
//         result.textContent = `result: ${eval(computeResult)}`;
//     }
// })();


/* 
(() => {

    const firstInputNumber = document.querySelector('#firstInput');
    const selectOperators = document.querySelector('#operators');
    const secondInputNumber = document.querySelector('#secondInput');

    let firstValueNumber = null;
    let secondValueNumber = null;
    let operatorValue = selectOperators.value;

    // dynmic input to get firstNumberValue
    // firstInputNumber.addEventListener('input', getHandleFirstInput);

    // // dynamic Input callback
    // function getHandleFirstInput(e) {

    //     const { value } = e.target;
    //     firstValueNumber = Number(value);
    //     getAllValue()
    // }

    // Generalized input handler for both numbers
        function handleNumberInput(e, assignTo) {
            const { value } = e.target;
            // Assign value dynamically based on the passed reference
            if(assignTo === 'first') firstValueNumber = Number(value);
            if(assignTo === 'second') secondValueNumber = Number(value);
            getAllValue();
        }

        // Apply handler to both inputs
        firstInputNumber.addEventListener('input', (e) => handleNumberInput(e, 'first'));
        secondInputNumber.addEventListener('input', (e) => handleNumberInput(e, 'second'));



    // dynmic change select operator to change  
    selectOperators.addEventListener('change', selectHandleOperator);

    // callback function
    function selectHandleOperator(e) {

        const { value } = e.target;
        operatorValue = value;
        getAllValue()
    }

    // dynmic input to get secondNumberValue
    // secondInputNumber.addEventListener('input', getHandleSecondNumber);

    //     // dynamic Input callback
    // function getHandleSecondNumber(e) {

    //     const { value } = e.target;
    //     secondValueNumber = Number(value);
    //     getAllValue()
    // }

    // get all value in the input number and select operator
    function getAllValue() {
        isValidNumberToDisplay();
    }

    // i don't want to dispaly zero value
    function isValidNumberToDisplay() {
        // display Compute
        computeDisplayValue('#compute', `${firstValueNumber || '0'} ${operatorValue} ${secondValueNumber || '0'}`);
        
        // if first and second number is zero is true exit agad and no display
        if(firstValueNumber === 0 && secondValueNumber === 0) {
            computeDisplayValue('#compute', 'no input number, clear');
            computeDisplayValue('#result', 'result: 0');

            // clear the text;
            setTimeout(() => {
                    computeDisplayValue('#compute', '');
            }, 2000);
            return;
        };
        resultTotalDisplay(operatorValue);
    }

    // display total value
    function resultTotalDisplay(operatorValue) {

        // lookup obj to compare in the operatorValue
        const operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
        };

        computeDisplayValue('#result', `result: ${operations[operatorValue](firstValueNumber, secondValueNumber)}`);
        
    }

    // dom updates
    function computeDisplayValue(element, value) {
        return document.querySelector(element).textContent = value;
    }
})(); */