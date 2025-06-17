
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

/* 
(() => {

    // remove text automatically
    // function autoRemoveText(elemId, text, callbackFunc) {
    //     setTimeout(() => {
    //         callbackFunc(elemId, text);
    //     }, 3000);
    // }

    // to reuse again for dynamic changes input
    function isHasInputValueDisabled(value) {
        return document.querySelector('#operators').disabled = value;
    };

    // default disable if no value input
    isHasInputValueDisabled(true);

    // to store the input value
    const values = {
        firstValueInput: null,
        operatorValue: '+',
        secondValueInput: null,
    };

    // to get value number and operator
    function getHandleInputNumber(elementId, action, key) {
        document.querySelector(elementId).addEventListener(action, (e) => {

            // get value number or operator value
            const { value } = e.target;
            
            // if no input in the both input values it's converted to Number because false is zero in number
            values[key] = value || 0;
            //if operator value is true of NaN  insert value of operators if not base '+' value
            validationToDisplayValue(value);
        });
    };

    // call function to get value input user
    getHandleInputNumber('#firstInputNumber', 'input', 'firstValueInput');
    getHandleInputNumber('#operators', 'change', 'operatorValue');
    getHandleInputNumber('#secondInputNumber', 'input', 'secondValueInput');

    // validation section 
    function validationToDisplayValue(value) {

        // if no input both input number  - display text (clear
        if(!value) {
            messageOrResult('#computeDisplay', 'Clear!');
            isHasInputValueDisabled(true);
            messageOrResult('#result', 'result: 0');
            // autoRemoveText('#computeDisplay', '', messageOrResult);
            return;
        };

        // validate no input number dpat meron silang parehas if isng input lang ang merong number reject
        if(values['firstValueInput'] && !values['secondValueInput'] || values['secondValueInput'] && !values['firstValueInput']) {
            messageOrResult('#computeDisplay', 'both Input Should have Input Value Number!');
            isHasInputValueDisabled(true)
            return;
        };

        // if both input is zero value = input more than zero!
        if(values['firstValueInput'] && values['secondValueInput'] === '0' || values['firstValueInput'] === '0' || values['secondValueInput'] === '0') {
            messageOrResult('#computeDisplay', 'input more than zero in both input or next input!');
            return;
        }
        // if no zero in  first and second value display
        messageOrResult('#computeDisplay', `${values['firstValueInput']} ${values['operatorValue']} ${values['secondValueInput']} = `);
        isHasInputValueDisabled(false);
        calculateTotalInputNumber(values['operatorValue'], values['firstValueInput'], values['secondValueInput']);
    };

    // get element and insert txt value
    function messageOrResult(elementId, text) {
        return document.querySelector(elementId).textContent = text;
    };

    // calculate Input Number value
    function calculateTotalInputNumber(operator, firstNum, secondNum) {

        const operations = {
            '+' : (a, b) => a + b,
            '-' : (a, b) => a - b,
            '*' : (a, b) => a * b,
            '/' : (a, b) => a / b, 
        };

        messageOrResult('#result', `result: ${operations[operator](Number(firstNum), Number(secondNum))}`);
    };

})();
 */

// let count = 0;

// setInterval(() => {
//     console.log(count);
//     count = (count + 1) % 6;
// }, 1000);


// console.log('5' != 5); // false 

// const input = document.querySelector('#username');
// console.log(input);


/* (() => {
    document.querySelector('button').addEventListener('click', () => {
            // correct input user
    const validUsername = 'admin';
    const validPassword = 'admin123';

    // input data user
    function handleInputUser(elementId) {
        return document.querySelector(elementId);
    }

    // get input user value
    const getInputUsername = handleInputUser('#username').value.trim();
    const getInputPassword = handleInputUser('#password').value.trim();

    // if true not equal reject
    const isValidInputUsername = getInputUsername !== validUsername;
    const isValidInputPassword = getInputPassword !== validPassword;

    // if no input user
    const isNoInputUser = !getInputPassword && !getInputPassword;

    // validition section
    function validateInputUser() {
        if(isNoInputUser) {
            handleInputUser('#username').required = true;
            console.log(handleInputUser('#username'))
            alert('ok');
            return;
        };
    }
    validateInputUser();
    });
})(); */


// const checkUserDiscount = prompt('type your purchase total');
// const userIsMember = prompt('you are member in this shop');

// // validation user 
// function validateUserAnswer(checkUserDiscount, userIsMember) {

//     switch(true) {

//         // no input 
//         case (!checkUserDiscount && !userIsMember) : {
//             alert('cancel');
//             break;
//         };

//         // no input user memeber
//         case (checkUserDiscount && !userIsMember || !checkUserDiscount && userIsMember) : {
//             alert('please input user Member or discouunt should be both have value');
//             break;
//         };

//     }
// }

// validateUserAnswer(checkUserDiscount, userIsMember);


/* function checkEligbleDiscount(totalPurchase, isMember) {

    if(totalPurchase >= 1000 && isMember === true) {
        alert('you have discount!');
        return;
    }
    alert('no discount');
}

checkEligbleDiscount(1000, true); */

/* 
function validateLogin(password, accountLocked) {

    
    if((password === 'admin123' || password === 'user456') && accountLocked === true) {
        alert('account Locked!, please try again');
        return;
    }

    if ((password !== 'admin123' || password !== 'user456') && accountLocked === true || accountLocked === false) {
        alert('wrong password');
        return;
    } 

    if((password === 'admin123' || password === 'user456') && accountLocked === false) {
        alert('login sucess');
    }
}


validateLogin('admin123', false); */
/* 
function checKAgeEnterEvent(age, isbanned) {
    if(age >= 18 && isbanned !== false) {
        alert('allowed but you are banned this event');
        return;
    };

    if(age < 18 && isbanned !== true) {
        alert('not allowed under age!');
        return;
    }

    if(age > 18 && isbanned !== true) {
        alert('welcome!');;
    } 
}

checKAgeEnterEvent(28, false); */


// console.log('hello' && 33);


// const enterRole = prompt('enter your role');

// const fallback = enterRole || 'guest';

// console.log(fallback);


/* 
== - tinitignan lang kung same value
=== - tinitignan kung same sila ng value at ng data type
!= - titignan kung hindi ba sila same ng value
!== - tinitignan kung di ba sila same ng value at ng data type
*/

// console.log(5 == [5]);
// console.log(5 === '5');
// console.log(false != 0);
// console.log(false !== 0);

// const user = {};

// ang user ba ay instance (or gawa ba siga galing class or function constructor object or sa isang built-in object)
// console.log(user instanceof Object);



/* function Person(name, age) {
    this.name = name;
    this.age = age;
} */


/* 
sytax:
(object instanceOf(operator) constructorFunction)

*/
/* 
const person1 = new Person('pogi', '21');
console.log(person1 instanceof Person); */


// console.log(new String instanceof Object);

