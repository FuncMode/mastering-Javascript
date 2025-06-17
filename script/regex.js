

/* // const pattern = /cat/i;

// i - is for case sensitive

// console.log(pattern.test('I have a CAT'));
// console.log(pattern.test('I have a dog')); */

// const { useReducer } = require("react");

// ranges 
/* // const patternNum = /[0-9]/;
// console.log(patternNum.test(1234)); 
// console.log(patternNum.test('wereere'));  */

/* const patternLetters = /[a-zA-Z]/;

console.log(patternLetters.test('abtere'));
console.log(patternLetters.test('34343'));
console.log(patternLetters.test('WQWEEWE'));
 */


/* quantifiers */
// const patternLetters = /[a-z]+/;
// console.log(patternLetters.test(''));
// console.log(patternLetters.test('e'));
// console.log(patternLetters.test('ewew'));

// (min and max)
/* const pattern = /[a-zA-Z]{6,8}/;

console.log(pattern.test('1'))
console.log(pattern.test('rwe'))
console.log(pattern.test('12323'))
console.log(pattern.test('angelito')) */


// const pattern = /^[a-zA-Z]/;

// console.log(pattern.test('234234'))

// start (^) and ($) end

// const start = /^hello/i;
// const end = /word$/i;
// console.log(start.test('HELLO'))
// console.log(start.test('word'))


// console.log(end.test('world hello'))
// console.log(end.test('hello word'));


// const validEmail = /^[\w]+@[\w]+\.[a-zA-Z]{2,4}$/;

// console.log(validEmail.test('angelito@gmail.com'));



// digit only = /\d/


// const digitOnly = /\d/;
// console.log(digitOnly.test(23232))
// console.log(digitOnly.test('dfer'))

// const insertName = prompt('Enter your name?');
// const noWhiteSpace = /\S/.test(insertName);
// const whiteSpace = /\s/.test(insertName);


// if(!whiteSpace) {
//     alert('no white space');
// } else {   
//     alert('have white spcee');
// }
// if(!whiteSpace)
// console.log(noWhiteSpace);


// any chars except of 'hello world'

// const except = /[^helloWorld]/gi;
// console.log(except.test('helloWorld werwere'));

// get all input
// const get = /[a-a]/g;

// console.log(get.test('asderer'))

// no g flag
/* const pattern = /hello/;
const str = 'hello world, word, hello';

console.log(str.match(pattern)); */

// with g flag
// const pattern = /hello/g;
// const str = 'hello world, word, hello';

// console.log(str.match(pattern));


// handle input dynamic

// //helper elements
// const element = (selector) => document.querySelector(selector);
// const listener = (el, action, callback) => element(el).addEventListener(action, callback);
// const showInvalidInputText = (el, text) => element(el).textContent = text;
// const resetInput = (el) => element(el).value = '';

// const validEmail = /^[\w]+@[\w]+\.[a-zA-Z]{2,4}$/;
// const validPassord = /^[A-Z]{1}[a-zA-Z0-9]{6,8}$/;

// function handleInput(el, event, inputName) {
//     listener(el, event, (e) => {
//         validateInput(e.target.value.trim(), inputName);
//     }); 
// }

// function validateInput(value, inputName) {

//     if(!value) {
//         showInvalidInputText('#invalidMessage', 'Input cannot be empty.');
//         return false;
//     }

//     if(value.includes(' ')) {
//         showInvalidInputText('#invalidMessage', 'No spaces allowed.');
//         return false;
//     }

//     if(inputName === 'email') {
//         if (!validEmail.test(value)) {
//             showInvalidInputText('#invalidMessage', 'Invalid Password format.');
//             return false;
//         }
//     }

//     if(inputName === 'password') {
//         !validPassord.test(value) ? showInvalidInputText('#invalidMessage', 'invalid format Password') : showInvalidInputText('#invalidMessage',`💹valid: ${value}`);
//         return false;
//     }

//     showInvalidInputText('#invalidMessage', `✅ Valid ${inputName}: ${value}`);
//     return true;
// }

// handleInput('#email', 'input', 'email');
// handleInput('#password', 'input', 'password');


// listener('#myForm', 'submit', (e) => {
//     e.preventDefault();

//     e.preventDefault(); // stop page reload

//     const emailValue = element('#email').value.trim();
//     const passwordValue = element('#password').value.trim();

//     const isEmailValid = validateInput(emailValue, 'email');
//     const isPasswordValid = validateInput(passwordValue, 'password');

//     if (isEmailValid && isPasswordValid) {
//         alert('🎉 Form submitted successfully!');
//         // Pwede dito mag-send to server o localStorage etc.
//     } else {
//         alert('❌ Please correct the errors before submitting.');
//     }
// });




/* const element = (selector) => document.querySelector(selector);
const listener = (el, action, callback) => element(el).addEventListener(action, callback);
const showInvalidInputText = (el, text) => element(el).textContent = text;
const resetInput = (el) => element(el).value = '';

const validEmail = /^[\w]+@[\w]+\.[a-zA-Z]{2,4}$/;
const validPassword = /^[A-Z]{1}[a-zA-Z0-9]{6,8}$/;

// Real-time input validation
function handleInput(el, event, inputName) {
    listener(el, event, (e) => {
        validateInput(e.target.value.trim(), inputName);
    });
}

// Validation Logic
function validateInput(value, inputName) {
    if (!value) {
        showInvalidInputText('#invalidMessage', 'Input cannot be empty.');
        return false;
    }

    if (value.includes(' ')) {
        showInvalidInputText('#invalidMessage', 'No spaces allowed.');
        return false;
    }

    if (inputName === 'email') {
        if (!validEmail.test(value)) {
            showInvalidInputText('#invalidMessage', 'Invalid Email format.');
            return false;
        }
    }

    if (inputName === 'password') {
        if (!validPassword.test(value)) {
            showInvalidInputText('#invalidMessage', 'Invalid Password format.');
            return false;
        }
    }

    // If all valid:
    showInvalidInputText('#invalidMessage', `✅ Valid ${inputName}: ${value}`);
    return true;
}

// Apply real-time check
handleInput('#email', 'input', 'email');
handleInput('#password', 'input', 'password');

// Form Submit
listener('#myForm', 'submit', (e) => {
    e.preventDefault(); // stop page reload

    const emailValue = element('#email').value.trim();
    const passwordValue = element('#password').value.trim();

    const isEmailValid = validateInput(emailValue, 'email');
    const isPasswordValid = validateInput(passwordValue, 'password');

    if (isEmailValid && isPasswordValid) {
        alert('🎉 Form submitted successfully!');
        clearInput();
        // Pwede dito mag-send to server o localStorage etc.
    } else {
        alert('❌ Please correct the errors before submitting.');
    }
});


function clearInput() {
    resetInput('#email');
    resetInput('#password');
} */





/* 
Example 

const isValidPass = 

*/








// function submitData(valueInput) {
//     element('#submit').addEventListener('click', (e) => {
//         e.preventDefault();

//         console.log(valueInput);
//     })
// }

// listener('#email', 'input', (e) => {
//     const inputValue = e.target.value.trim();

//     if(!inputValue) {
//         showInvalidInputText('#invalidMessage','');
//         return;
//     };

//     if(inputValue.includes(' ')) {
//         showInvalidInputText('#invalidMessage', 'no space required!');
//         return;
//     }

//     !validEmail.test(inputValue) ? showInvalidInputText('#invalidMessage', 'invalid format Emaiil') : showInvalidInputText('#invalidMessage', `💹valid: ${inputValue}`);
// })


// (() => {
//     // element helper

//     const element = (el) => document.querySelector(el);
//     const listener = (el, event, callback) => element(el).addEventListener(event, callback);
//     showInvalidMessageInput = (el, value) => element(el).textContent = value;
//     const disablebtn = (el, value) => element(el).disabled = value;
//     const inputValue = (el) => element(el).value.trim();
//     // initial btn disable if no value input 
//     disablebtn('#submitBtn', true);

//         function handleInputUser(el, event, inputName) {
//             listener(el, event, (e) => {
//                 const value = e.target.value.trim();
//                 const isValid = validationInput(value, inputName);
//                 showBtnDisabledifvalid();
//             });
//         }


//     handleInputUser('#username', 'input', 'username');
//     handleInputUser('#password', 'input', 'password');

//     /* 
//     // test input
//     username: Pogi1234
//     password Password12
//     */

//     const validUsernamePattern = /^[\w]{8}$/;
//     const validPasswordPattern = /^[A-Z]{1}[a-zA-Z0-9]{6,10}$/;

//     function validationInput(value, inputName) {
//             if (!value) {
//                 showInvalidMessageInput('#invalidMessage', 'Input cannot be empty.');
//                 return false;
//             }

//         if(value.includes(' ')) {
//             showInvalidMessageInput('#invalidMessage', `no space required. please try again!`);
//             return false;
//         }

//         if(inputName === 'username') {

//             if(!validUsernamePattern.test(value)) {
//                 showInvalidMessageInput('#invalidMessage', `❌ Invalid Username, please try again!`);
//                 return false;
//             } 
//         }

//         if(inputName === 'password') {
//             if(!validPasswordPattern.test(value)) {
//                 showInvalidMessageInput('#invalidMessage', `❌ Invalid Password, please try again!`);
//                 return false;
//             } 
//         }

//         showInvalidMessageInput('#invalidMessage', `✅ Valid ${inputName}`);
//         return true;
//     };

//     function showBtnDisabledifvalid() {

//         const usernameVal = inputValue('#username');
//         const passwordVal = inputValue('#password');

//         const isUsernameValid = validUsernamePattern.test(usernameVal) && !usernameVal.includes(' ') && usernameVal !== '';
//         const isPasswordValid = validPasswordPattern.test(passwordVal) && !passwordVal.includes(' ') && passwordVal !== '';

//         disablebtn('#submitBtn', !(isUsernameValid && isPasswordValid));
//     }


//     listener('#myForm', 'submit', (e) => {
//         e.preventDefault();

//         const usernameVal = inputValue('#username');
//         const passwordVal = inputValue('#password');

//         const isUsernameValid = validationInput(usernameVal, 'username');
//         const isPasswordValid = validationInput(passwordVal, 'password');

//         if (isUsernameValid && isPasswordValid) {
//             alert('🎉 Form submitted successfully!');
//             clearInputs();
//             showBtnDisabledifvalid();
//         } else {
//             alert('❌ Please correct the errors before submitting.');
//         }
        
//     });


//     function clearInputs() {
//         element('#username').value = '';
//         element('#password').value = '';
//         showInvalidMessageInput('#invalidMessage', '');
//     }
// })();


// (() => {

//     // function element helper
//     const querySelector = (el) => document.querySelector(el);
//     const inputValue = (el) => querySelector(el).value.trim();
//     const disablebtn = (el, value) => querySelector(el).disabled = value;
//     const eventListener = (el, event, callback) => querySelector(el).addEventListener(event, callback);
//     const setErrorMessage = (el, messageText) => querySelector(el).textContent = messageText;

//     // disable btn default initial
//     disablebtn('#submitBtn', true);

//     /* 
//     // -- test input --
//     username: username
//     password: Password123
//     */

//     const patterns = {
//         username: /^[\w]{8}$/,
//         password: /^[A-Z]{1}[a-zA-Z0-9]{8,10}$/
//     }

//     function handleInput(el, event, inputName) {
//         eventListener(el, event, () => {
//             // i use my arrow function inputValue to get Input
//             const value = inputValue(el)
//             // console.log(patterns['password'].test(value));
//             // pass to function to validate it
//             validateInput(value, inputName);
//             // if both input is valid updatebtn from disabled
//             updateSubmitButtonState();
//         });
//     }

//     handleInput('#username', 'input', 'username');
//     handleInput('#password', 'input', 'password');

//     function validateInput(value, inputName) {

//         if(!value) {
//             setErrorMessage('#invalidMessage', `[${inputName}]: Cannot be empty, please try again!`);
//             return false;
//         }
        
//         if(value.includes(' ')) {
//             setErrorMessage('#invalidMessage', `[${inputName}]: No Space required, please try again!`);
//             return false;
//         }

//         // console.log(patterns[inputName].test(value))

//         if(!patterns[inputName].test(value)) {
//             const customMessage = inputName === 'username'
//             ? '❌ username: must be exactly 8 characters'
//             : '❌ password: start Uppercase + 6 - 10 characters';
//             setErrorMessage(`#invalidMessage`, customMessage);
//             return false;
//         }

//         setErrorMessage(`#invalidMessage`, `[${inputName}]: Valid✅`);
//         return true;
//     }

//     function updateSubmitButtonState() {
//         const username = inputValue('#username');
//         const password = inputValue('#password');

//         const isUsernameValid = validateInput(username, 'username');
//         const isPasswordValid = validateInput(password, 'password');

//         disablebtn('#submitBtn', !(isUsernameValid && isPasswordValid));
//     }

// })(); 


// (() => {

//     // function element helper
//     const querySelector = (el) => document.querySelector(el);
//     const inputValue = (el) => querySelector(el).value.trim();
//     const disablebtn = (el, value) => querySelector(el).disabled = value;
//     const eventListener = (el, event, callback) => querySelector(el).addEventListener(event, callback);
//     const setErrorMessage = (el, messageText) => querySelector(el).textContent = messageText;
//     const resetText = (el) => querySelector(el).textContent = '';
//     const resetInput = (el) => querySelector(el).value = '';
    
//     // disable btn default initial
//     disablebtn('#submitBtn', true);

//     const patterns = {
//         username: /^[\w]{8}$/,
//         password: /^[A-Z]{1}[a-zA-Z0-9]{8,10}$/
//     }

//     const errorElements = {
//         username: '#usernameError',
//         password: '#passwordError'
//     };

//     function handleInput(el, event, inputName) {
//         eventListener(el, event, () => {
//             const value = inputValue(el);
//             validateInput(value, inputName);
//             updateSubmitButtonState();
//         });
//     }

//     /* 
//     test
//     username: username
//     password: Password123
//     */

//     handleInput('#username', 'input', 'username');
//     handleInput('#password', 'input', 'password');

//     function validateInput(value, inputName) { // el param tanggalin
//         if(!value) {
//             setErrorMessage('#invalidMessage', `[${inputName}]: Cannot be empty, please Input!`);
//             resetText(errorElements[inputName]);
//             return false;
//         }
        
//         if(value.includes(' ')) {
//             setErrorMessage('#invalidMessage', `[${inputName}]: No Space required, please try again!`);
//             return false;
//         }

//         if(!patterns[inputName].test(value)) {
//             const customMessage = inputName === 'username'
//             ? '❌ username: must be exactly 8 characters'
//             : '❌ password: start Uppercase + 6 - 10 characters';
//             setErrorMessage(errorElements[inputName], customMessage);
//             return false;
//         }

//         setErrorMessage(errorElements[inputName], `[${inputName}]: Valid✅`);
//         return true;
//     }

//     function isValidUsernameAndPassword() {
//         const username = inputValue('#username');
//         const password = inputValue('#password');

//         const isUsernameValid = validateInput(username, 'username'); 
//         const isPasswordValid = validateInput(password, 'password');
//         return !(isUsernameValid && isPasswordValid);
//     }

//     function updateSubmitButtonState() {
//         disablebtn('#submitBtn', isValidUsernameAndPassword());
//     }

//     eventListener('#form', 'submit', (e) => {
//         e.preventDefault();
        
//         if(!isValidUsernameAndPassword()) {
//             clearInputsAndDisableBtn();
//             alert('🎉 Form submitted successfully!');
//             disablebtn('#submitBtn', isValidUsernameAndPassword())
//         } else {
//             alert('❌ Please fix the errors before submitting.');
//         }
//     }); 

//     function clearInputsAndDisableBtn() {
//         resetInput('#username');
//         resetInput('#password');
//     }

// })();


    // const querySelector = (el) => document.querySelector(el);
    // const inputValue = (el) => querySelector(el).value.trim();
    // const eventListener  = (el, event, callback) => querySelector(el).addEventListener(event, callback);
    // const showInvalidMessage = (el, text) => querySelector(el).textContent = text;
    // const disablebtn = (el, value) => querySelector(el).disabled = value;

    // const pattern = /^[\w]{8}$/;

    // disablebtn('#submit', true);

    // function debounce(fn, delay) {
    //     let timeout;
    //     return function (...args) {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => fn(...args), delay);
    //     }
    // }

    // eventListener('#username', 'input', debounce(() => {
    //         const value = inputValue('#username');
    //         validateInput(value);
    //     }, 500));

    // function validateInput(value) {

    //     if(!value) {
    //         showInvalidMessage('#invalidMessage', '');
    //         return;
    //     }

    //     if(!pattern.test(value)) {
    //         showInvalidMessage('#invalidMessage', '❌ username: must be exactly 8 characters');
    //         disablebtn('#submit', true);
    //         return;
    //     }

    //     showInvalidMessage('#invalidMessage', 'valid✅');
    //     disablebtn('#submit', false);
    //     return true;
    // }

    // eventListener('#submit', 'click', () => {
    //     const value = inputValue('#username');

    //     const isValidUsername = validateInput(value);

    //     if(!isValidUsername) {
    //         alert('❌ Please fix the errors before submitting.');
    //         clearInput();
    //         disablebtn('#submit', true);
    //         showInvalidMessage('#invalidMessage', '');
    //         return;
    //     }

    //     alert('🎉 Form submitted successfully!');
    //     clearInput();
    //     disablebtn('#submit', true);
    //     showInvalidMessage('#invalidMessage', '');
    // });

    // function clearInput() {
    //     querySelector('#username').value = '';
    // }



    // function isEven(num) {
    //     return num % 2 === 0;
    // }


    // function formatCurrency(amount, currency = 'USD') {
    //     return new Intl.NumberFormat('US', {
    //         style: 'currency',
    //         currency,
    //     }).format(amount);
    // }

    // console.log(formatCurrency(14000));

    // function demo() {
    //     return true;
    // }

    // console.log(demo())


    