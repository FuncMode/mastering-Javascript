

// for loop

// if i == 3 stop the adding

// so meaning kung ang i ay less than pa sa 3 mag iincrease ng 1 pero kung false na stop na adding

// for (let i = 0; i < 3; i++) {
//     console.log(`ulit # ${i}`);
// }

/* let accessCount = 3;

while(accessCount) {

    let typePass = prompt('type your password');

    if(typePass === 'password') {
        alert('success');
        break;
    } 

    accessCount--;
    alert(`you have ${accessCount} to access`)

    if(!accessCount) {
        setInterval(() => {
            alert('Error!');
        }, 100);
    }
} */


// let x = 1;
// do {
//     console.log(x);

//     x++;
// } while(x > 0); 



/* let x = 3;
do {
    console.log("Doing: " + x);
    x--;
} while (x > 0); */

// const user = {
//     name: "ako",
//     age : 100
// }

// for (let key in user) {
//     console.log(key + ' ' +user[key]);
// }

// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//     console.log(number);
// }


// const arr = [1, 2, 3];

// console.log(typeof arr[Symbol.iterator]); // "function"
// console.log(Symbol.iterator in arr);      // true ✅

// console.log(Symbol.iterator);

// for (let i = 0; i < 5; i++) {
//     console.log('hello world');
// }


/* const containerCount = document.querySelector('h1');

let countIndex = 0;
containerCount.textContent = `count: ${countIndex}`;


setInterval(() => {
    containerCount.textContent = `count: ${countIndex}`;
    countIndex = (countIndex + 1) % 6; 
}, 1000); */

// for (let i = 0; i <= 5; i++) {
//     containerCount.textContent = `count: ${i}`;
//     console.log(i);
//     if(i === 5) {
//         i = 0;
//         continue;
//     }
// }

/* let limitEnterPass = 3;


while(limitEnterPass) {

    const userPass = prompt('type your password'); 

    if(userPass === '1234') {
        alert('success!');
        break;
    };

    limitEnterPass--;
    alert(`you have ${limitEnterPass} attemps`);

    if(!limitEnterPass) {
        setInterval(() => {
            alert('Error!');
        }, 100);
    }

} */


/*     const user = {
        username: "admin",
        password: 1234,
    }
    for (userKey in user) {
        if(userKey === 'password') {
            break;
        }
        console.log(userKey);
    } */


    // const fruits = ['apple', 'mango'];

    // for (let fruit of fruits) {
    //     console.log(fruit);
    // }

    // let str = 'hello world'
    // for (let string of str) {
    //     console.log(string);
    // }



    // for (let i = 0; i <= 10; i++) {
    //     console.log(i);
    // }

    // let n = 5;
    // let total = 1;
    // while(total <= 5) {
    //     console.log(total += n);
    //     total++;
    // }

    // let N = 5;
    // let sum = 0;
    // let i = 1;
    // while(i < 5) {
    //     sum += i;
    //     i++;
    // }

    // console.log("Ang suma ng numbers 1 to " + N + " ay: " + sum);

    // let total = 0;

    // for(let i = 1; i <= 10; i++) {
    //     console.log(i);
    //     total += i;
    // }
    // console.log(total);
    

    // let total = 0;
    // const numbers = [1,2,3,4,5];
    
    // for (let num of numbers) {
    //     total += num;
    // }
    // console.log(total);

    // let i = 10;
    // do {
    //     console.log(i);
    //     i--;
    // } while(i > 0)
/* 
    const person = {
        name: "Juan", 
        age: 25, 
        city: "Manila" 
    };
 */
/*     for (let per in person) {
        console.log(`${per}: ${person[per]}`);
    } */

    // for (let per of person) {
    //     console.log(per);
    // }

    // for (let per of Object.entries(person)) {
    //     for ( let [key, value] of per) {
    //         console.log(`${key}: ${value}`);
    //     } 
    // }

/*     for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    } */

    // function recursive(obj) {
    //     for (let person in obj) {
    //         console.log(`${person}: ${obj[person]}`);
    //     }
    // }

    // recursive(person);


    // const n = 5;
    
    // console.log(`Multiplication Table: ${n}`);

    // for (let i = 0; i <= n; i++) {
    //     console.log(`${n} x ${i} = ${n * i}`);
    // }

// (() => {
//     // store input user data
//     const values = {
//         baseNumber: null,
//         arithmetic: '+',
//         maximumNumber: null
//     };

//     // getEnterData user
//     function handleEnterData(elementId, actionEvent, key) {
//         document.querySelector(elementId).addEventListener(actionEvent, (e) => {

//             const { value } = e.target;
            
//             // if key meron dun sa values lagyan ng value
//             values[key] = value || 0;
//             // console.log(values['baseNumber'], values['arithmetic'], values['maximumNumber']);
//             showElementToUser();
//         });
//     }

//         // call to get the input
//     handleEnterData('#baseNumber', 'input', 'baseNumber');
//     handleEnterData('#arithmetic', 'change', 'arithmetic');
//     handleEnterData('#maximumNumber', 'input', 'maximumNumber');

//     // invalid Input or no input
//     function invalidInput(element, classValue) {
//         document.querySelector(element).className = classValue; 

//         // remove class in 2's
//         setTimeout(() => {
//             document.querySelector(element).className = '';
//         }, 2000);
//     }

//     // generate table to display to user
//     function generateTable() {
//         const baseNumber = Number(values['baseNumber']);
//         const arithmetic = values['arithmetic'];
//         const maximumNumber = Number(values['maximumNumber']);

//         /* validation section by Enter (key)*/
        
//         // if no value reject 
//         if(!values['baseNumber'] && !values['maximumNumber']) {
//             alert('Input value Number first, please try again');
//             invalidInput('#baseNumber' , 'invalid');
//             invalidInput('#maximumNumber' , 'invalid');
//             showElement('#content', 'none');
//             showElement('#btn', 'none');
//             resetContainer('.child-table', '');
//             return;
//         }

//         // if no value second input 
//         if(baseNumber && !maximumNumber) {
//             invalidInput('#maximumNumber' , 'invalid');
//             return;
//         }

//         // if no value first input 
//         if(!baseNumber && maximumNumber) {
//             invalidInput('#baseNumber' , 'invalid');
//             return;
//         }

//         // if both input number has same zero value
//         if((baseNumber && maximumNumber) === 0) {
//             alert('Input higher value Number, please try again');
//             removeInputValue('#baseNumber', '');
//             removeInputValue('#maximumNumber', '')
//             return;
//         }

//         const delay = () => new Promise(resolve => setTimeout(resolve, 0));
        
//         async function processAll() {
//             showElement('.spinner', 'block');
//             resetContainer('.child-table', '');
//             removeInputValue('#baseNumber', '');
//             disableSelectOperator(true);
//             removeInputValue('#maximumNumber', '')
//             showElement('#btn', 'none');

//             const fragment = document.createDocumentFragment();

//             for (let i = 0; i < maximumNumber; i++) {
//                 await delay()
//                 const p = document.createElement('p');
//                 p.textContent = `
//                 ${baseNumber} ${arithmetic === '*' ? 'x' : arithmetic} ${i} = ${eval(`${baseNumber}${arithmetic === '/' ? fixedNumber() : arithmetic}${i}`)}
//                 `;
//                 fragment.appendChild(p);
//             }

//             // place 2 decimal pleces to prevent more result number in divede
//             function fixedNumber() {
//                 const compute = baseNumber / maximumNumber;
//                 return compute;
//             }
            

//             showElement('.spinner', 'none');
//             document.querySelector('.child-table').appendChild(fragment);
//             showElement('#content', 'block')
//             updateTextContent('#content', `- Table of (${baseNumber}) to (${maximumNumber}) -`)
//         }

//         processAll();
//         // back to default value
//         values['baseNumber'] = null  || 0;
//         values['maximumNumber'] = null || 0;
//     }

//     function resetContainer(element, text) {
//         document.querySelector(element).innerHTML = text;
//     }

//     // if click button generate the table
//     document.querySelector('#btn').addEventListener('click', generateTable);

//     // if click enter
//     document.addEventListener('keydown', (e) => {
//         if(e.key === 'Enter') {
//             generateTable();    
//             return;
//         }
//     })
//     // upateTextContent
//     function updateTextContent(element,value) {
//         document.querySelector(element).textContent = value;
//     }

//     // disable operator first if no value input
//     function disableSelectOperator(boolean) {
//         return document.querySelector('#arithmetic').disabled = boolean;
//     }

//     // show btn if both input have value
//     function showElement(element, value) {
//         return document.querySelector(element).style.display = value;
//     }

//     // default
//     disableSelectOperator(true);

//     // clear btn if no input value
//     function showElementToUser() {
//         // console.log(`type: ${typeof values['baseNumber']}, ${values['baseNumber']}, ${values['arithmetic']}, type: ${values['maximumNumber']}, ${typeof values['maximumNumber']}`);

//         /* validation section by Input  */

//         if (values['baseNumber'] === 0 && values['maximumNumber'] === 0) {
//             invalidInput('#baseNumber' , 'invalid');
//             updateTextContent('#content', `- Table of (${values['baseNumber']}) to (${values['maximumNumber']}) -`);
//             return;
//         }

//         // true first input but no value input second reject
//         if(values['baseNumber'] !== 0 && !values['maximumNumber']) {
//             invalidInput('#maximumNumber' , 'invalid');
//             disableSelectOperator(true);
//             showElement('button', 'none');
//             updateTextContent('#content', `- Table of (${values['baseNumber']}) to (${values['maximumNumber']}) -`);
//             return;
//         }
//         // clear first input but no value second input reject
//         if(!values['baseNumber'] && !values['maximumNumber']) {
//             invalidInput('#baseNumber' , 'invalid');
//             return;
//         }

//         // clear second input but no value first input
//         if(!values['maximumNumber'] && !values['baseNumber']) {
//             invalidInput('#maximumNumber' , 'invalid');
//             return;
//         }

//         // have value second input but no value first input reject
//         if(values['maximumNumber'] !== 0 && !values['baseNumber']) {
//             invalidInput('#baseNumber' , 'invalid');
//             disableSelectOperator(true);
//             showElement('button', 'none');
//             updateTextContent('#content', `- Table of (${values['baseNumber']}) to (${values['maximumNumber']}) -`);
//             return;
//         }
//         // if both input same zero value reject
//         if(values['baseNumber'] === '0' && values['maximumNumber'] === '0') {
//             invalidInput('#baseNumber' , 'invalid');
//             invalidInput('#maximumNumber' , 'invalid');
//             return;
//         }

//         // if firt input true and if second input is equal to zero reject
//         if(values['baseNumber'] !== '0' && values['maximumNumber'] === '0') {
//             invalidInput('#maximumNumber' , 'invalid');
//             return;
//         }

//         // if first input is equal zero value and second input is true reject
//         if(values['baseNumber'] === '0' && values['maximumNumber'] !== '0') {
//             invalidInput('#baseNumber' , 'invalid');
//             return;
//         }

//         // if both input value is valid number
//         if(values['baseNumber'] && values['maximumNumber']) {
//             showElement('button', 'block');
//             showElement('#content', 'block');
//             updateTextContent('#content', `- Table of (${values['baseNumber']}) to (${values['maximumNumber']}) -`);
//             disableSelectOperator(false);
//             return;
//         }
//     } 

//         function removeInputValue(element, text) {
//             document.querySelector(element).value = text;
//         }
// })();




// (() => {
//     // Store user input
//     const values = {
//         baseNumber: 0,
//         arithmetic: '+',
//         maximumNumber: 0
//     };

//     // Centralized input handling
//     function handleInput(elementId, event, key) {
//         document.querySelector(elementId).addEventListener(event, (e) => {
//             const { value } = e.target;
//             values[key] = key === 'arithmetic' ? value : Number(value);
//             validateInputs();
//         });
//     }

//     handleInput('#baseNumber', 'input', 'baseNumber');
//     handleInput('#arithmetic', 'change', 'arithmetic');
//     handleInput('#maximumNumber', 'input', 'maximumNumber');

//     // Element helpers
//     const $ = (selector) => document.querySelector(selector);
//     const show = (el, display) => $(el).style.display = display;
//     const setText = (el, text) => $(el).textContent = text;
//     const resetContent = (el) => $(el).innerHTML = '';
//     const setInvalid = (el) => {
//         $(el).className = 'invalid';
//         setTimeout(() => $(el).className = '', 2000);
//     };

//     function validateInputs() {
//         const { baseNumber, maximumNumber } = values;

//         if (!baseNumber && !maximumNumber) {
//             setInvalid('#baseNumber');
//             setInvalid('#maximumNumber');
//             show('#btn', 'none');
//             disableOperator(true);
//             setText('#content', '- Invalid input -');
//             return;
//         }

//         if (!baseNumber) {
//             setInvalid('#baseNumber');
//             disableOperator(true);
//             show('#btn', 'none');
//             return;
//         }

//         if (!maximumNumber) {
//             setInvalid('#maximumNumber');
//             disableOperator(true);
//             show('#btn', 'none');
//             return;
//         }

//         // Valid input
//         disableOperator(false);
//         show('#btn', 'block');
//         setText('#content', `- Table of (${baseNumber}) to (${maximumNumber}) -`);
//     }

//     function disableOperator(state) {
//         $('#arithmetic').disabled = state;
//     }

//     // Generate table when button clicked or Enter pressed
//     $('#btn').addEventListener('click', generateTable);
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') generateTable();
//     });
    
//     async function generateTable() {
//         const { baseNumber, arithmetic, maximumNumber } = values;

//         if (!baseNumber || !maximumNumber) {
//             alert('Please enter valid numbers.');
//             return;
//         }

//         show('.spinner', 'block');
//         resetContent('.child-table');
//         clearInputs();

//         const fragment = document.createDocumentFragment();

//         for (let i = 0; i <= maximumNumber; i++) {
//             await delay(0); // simulate async

//             const p = document.createElement('p');
//             p.textContent = createTableRow(baseNumber, arithmetic, i);
//             fragment.appendChild(p);
//         }

//         show('.spinner', 'none');
//         $('.child-table').appendChild(fragment);
//         show('#content', 'block');
//     }

//     function createTableRow(base, op, i) {
//         const symbol = op === '*' ? 'x' : op;
//         let result;

//         if (op === '/') {
//             result = i === 0 ? '∞ (Cannot divide by zero)' : (base / i).toFixed(2);
//         } else {
//             result = eval(`${base} ${op} ${i}`);
//         }

//         return `${base} ${symbol} ${i} = ${result}`;
//     }

//     function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }

//     function clearInputs() {
//         $('#baseNumber').value = '';
//         $('#maximumNumber').value = '';
//         values.baseNumber = 0;
//         values.maximumNumber = 0;
//         disableOperator(true);
//         show('#btn', 'none');
//     }

//     // Default UI state
//     disableOperator(true);
//     setText('#content', '- Table will appear here -');
// })();


// (() => {
//     // storing inputNumber and select operators
//     const values = {
//         baseInput: 0,
//         selectOp: '+',
//         maxInput: 0,
//     };

//     // get input and select opeartor value
//     const handleInput = (elementId, event, key) => {
//         document.querySelector(elementId).addEventListener(event, (e) => {
//             // get element value once action trigger
//             const { value } = e.target;

//             // store to object if argument match in the key of obj 
//             values[key] = key === 'selectOp' ? value : Number(value);
//             // console.log(`${typeof values['base']} ${values['op']} ${typeof values['max']}`)
//             validateInput();
//         });
//     };

//     // start getting input user once action trigger
//     handleInput('#baseNumber', 'input', 'baseInput');
//     handleInput('#arithmetic', 'change', 'selectOp');
//     handleInput('#maximumNumber', 'input', 'maxInput');


//     /* Elements helper */
//     // for all element
//     const element = (el) => document.querySelector(el);
//     const showElement = (el, displayValue) => element(el).style.display = displayValue;
//     const showSetText = (el, textValue) => element(el).textContent = textValue;
//     const resetContent = (el) => element(el).innerHTML = '';
//     const setInvalid = (el) => {
//         element(el).className = 'invalid';

//         setTimeout(() => element(el).className = '', 2000);
//     };

//     // to validate number to display or not
//     function validateInput() {
//         // obj values
//         const { baseInput, maxInput } = values;

//         // if no enter value
//         if(!baseInput && !maxInput) {
//             setInvalid('#baseNumber');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- no enter value, please try again! -`);
//             return;
//         }

//         // if no enter value in max
//         if(baseInput && !maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (maximum) number! -`);
//             return;
//         }

//         // if no enter value in base
//         if(!baseInput && maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#baseNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (base) number! -`);
//             return;
//         }

//         // if valid just display
//         disableSelectOperator(false);
//         showElement('#btn', 'block');
//         showSetText('#content', `- Table of (${baseInput}) to (${maxInput}) -`);
//     };

//     function disableSelectOperator(value) {
//         element('#arithmetic').disabled = value;
//     }
//     /* for click and Enter User */
//     element('#btn').addEventListener('click', generateTable);
//     document.addEventListener('keydown', (e) => {

//         if(e.key === 'Enter') generateTable();
//     });

//     async function generateTable() {
//         const { baseInput, selectOp, maxInput } = values;


//         // if no enter value
//         if(!baseInput && !maxInput) {
//             setInvalid('#baseNumber');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- no enter value, please try again! -`);
//             return;
//         }

//         // if no enter value in max
//         if(baseInput && !maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#maximumNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (maximum) number! -`);
//             return;
//         }

//         // if no enter value in base
//         if(!baseInput && maxInput) {
//             disableSelectOperator(true);
//             showElement('#btn', 'none');
//             setInvalid('#baseNumber');
//             showElement('#content', 'block');
//             showSetText('#content', `- please enter value in (base) number! -`);
//             return;
//         }

//         // show spinner loading if valid
//         showElement('.spinner', 'block');
//         // reset first before insert
//         resetContent('.child-table');
//         // clear input when done generate table
//         clearInput();

//         const fragment = document.createDocumentFragment();

//         for (let i = 0; i < maxInput; i++) {
//             // loading effect
//             await delay(0);

//             const p = document.createElement('p');
//             p.textContent = createTableRow(baseInput, selectOp, i); 
//             fragment.appendChild(p);
//         };

//         showElement('.spinner', 'none');
//         element('.child-table').appendChild(fragment);

//     };

//     function createTableRow(baseInput, selectOp, i) {
//         const symbol = selectOp === '*' ? 'x' : selectOp;
//         // inital value
//         let result = 0;

//         // if user select divide to prevent infinity
//         if(selectOp === '/') {
//             result = i === 0 ? '(Cannot divide by zero)' : (baseInput / i).toFixed(2);
//         } else {
//             result = eval(`${baseInput} ${selectOp} ${i}`);
//         }

//         return `${baseInput} ${symbol} ${i} = ${result}`;
//     }

//     function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }

//     function clearInput() {
//         element('#baseNumber').value = '';
//         element('#maximumNumber').value = '';
//         values['baseInput'] = 0;
//         values['maxInput'] = 0;
//         disableSelectOperator(true);
//         showElement('#btn', 'none');
//     }

//     disableSelectOperator(true);
//     showElement('#content', 'block');
//     showSetText('#content', '- table will appear here -');
// })(); 



// console.log(sum);

/* 
const numbers = [1,2,3,4,5];
let currentIndex = 0;
let sum = 0;
let numLen = numbers.length;
while(currentIndex < numLen) {
    sum += numbers[currentIndex];
    currentIndex++;
}
console.log(sum); */
/* 
let n = 10;

do {
    console.log(n);
    n--;
} while(n > 0);  */

// const person = { name: "Juan", age: 25, city: "Manila" };


// const { name, age, city } = person;
// console.log();
// console.log('name' in person);
// for (let per on )

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// for (let {key, value} = person) {

// }


/* const fruits = ["apple", "banana", "mango"];

const [ a, b, c ] = fruits;
console.log(c); */
// const [0,23] = fruits;


/* let attemps = 3;
let password = 'tangaa';



while(attemps) {

    let typePassword = prompt('type your password');

    if(typePassword === password) {
        alert('success');
        break;
    }

    attemps--;
    alert(`you have ${attemps}!`);
} */
/* 
    const prices = [100, 200, 300]; // Total: 600
    let total = 0;
for (let add of prices) {
    total += add;
}
console.log(total); */

// for (let i = 1; i <= 30; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }


/* 
if odd console(number) and odd kung hindi console(even) and number
 */

/* for (let i = 1; i < 10; i++) {
    if(i % 2 === 0) {
        console.log('even', i);
    } else {
        console.log('odd',i);
    }
}  */


/*     for (let i = 1; i < 10; i++) {
        if (i % 2 === 1) {
            
            if(i === 5) {
                console.log('ok')
            } else {
                console.log(i);
            }
        }
    } */

    // console.log(1 % 2 === 1);
    // console.log(2 % 2 === 1)
    // console.log(3 % 2 === 1);

/*     for(let i = 1; i <= 30; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    } */


    /* 
    syntax 
    for (initial, codition, increment)
    */
/*     let i = 1
    while(i <= 5) {
        if(i % 3 === 0) {
            continue;
        } 
        console.log(i);
        i++;
        // console.log(i);
    }    */


    // task 1
    // let i = 1
    // for (; i <= 10; i++) {
    //     console.log(i);
    // }
    // let i = 1;
    // while(i <= 10) {
    //     console.log(i);
    //     i++;
    // }
    // let i = 1;
    // do {
    //     console.log(i);
    //     i++;
    // } while (i <= 10)

    // const numbers = [1,2,3,4,5,6,7,8,9,10];

    // for (let num of numbers) {
    //     console.log(num);
    // }

    // task 2
    // for (let i = 1; i <= 20; i++) {
    //     if(i % 2 === 0) {
    //         console.log(i);
    //     }
    // }

    // let N = 5;
    // let sum = 0;
    // let counter = 1;

    // for(; counter <= N; counter++) {
    //     sum += counter;
    // } 
    // console.log(sum);

    // task 4
    // let i = 1;
    // do {
    //     console.log(i);
    //     i++;
    // } while (10 >= i);

    // task 5

    // for (let i = 1; i <= 10; i++) {
    //     console.log(`${5} x ${i} = ${eval(5 * 1)}`);
    // }

    // const n = 5;
    
    // console.log(`Multiplication Table: ${n}`);

    // for (let i = 1; i <= 10; i++) {
    //     console.log(`${n} x ${i} = ${n * i}`);
    // }

    



/*     let i = 1;
    for(; i <= 5; i++) {
        console.log(i);
    } */

/*     let i = 1;

    while(i <= 10) {
        console.log(i);
        i++;
    } */

    // let i = 1;
    // do {
    //     console.log(i);
    //     i++;
    // } while(i > 10);

/*     let str = 'hello world';

    for (let string of str) {
        console.log(string);
    } */

/* 
    const nums = [1,2,3,4,5];

    for (let n in nums) {
        console.log(n);
    } */

/*     for (let i = 1; i <= 10; i++) {
        console.log(i);
    } */

        // for (let i = 2; i <= 20; i++) {
        //     if (i % 2 === 0) {
        //         console.log(i);
        //     } else {
        //         console.log('not');
        //     }
        // }
        // let i = 5;
        // let counter = 1;
        // let sum = 0;

/*         for (; counter <= i; counter++) {
            // console.log(counter);
            sum += counter;
        }
        console.log(sum); */
/* 
        let i = 10;

        do {
            console.log(i);
            i--;
        } while (i > 0); */

        // let n = 5;
        // let i = 0
        // for (; i < n; i++) {
        //     console.log(`${n} x ${i} = ${n * i}`);
        // }


        // function factorial(n) {
        //     let result = 1;

        //     for (let i = 2; i <= n; i++) {
        //         // result *= i;
        //         // console.log(n);
        //         console.log(i);
        //     }
        //     // return result;
        // }
        // factorial(5);

        // console.log(factorial(5));
        // // console.log(5 ** 4);

/*         function recursiveFactorial(n) {
            if(n === 0  || n === 1) return 1;
            return n * recursiveFactorial(console.log(n));
        }

        console.log(recursiveFactorial(5)); */



        // function recursive(num) {
        //     if(num === 0) {
        //         return 0;
        //     }
        //     console.log(num);

        //     return recursive(num - 1);
        // }

        // recursive(5);
/*     let sum = 0;
        function recursive(n) {
            if(n === 0) {
                return 0;
            }
            sum += recursive(n - 1);
        }
        recursive(5);
        console.log(sum); */

/* 
        function recursive(n) {
            if(n === 0 || n === 1) {
                return 1;
            }

            return n * recursive(n - 1);
        }

        console.log(recursive(4)); */

        // function recursive(n) {
        //     if(n > 0) {
        //         n - 1;
        //     }
        //     return recursive(n - 1);
        // }


        // const obj = {
        //     name: 'angelito',
        //     age: 21,
        //     grade: {math: 24, english: 21}
        // }

        // function iterate(obj) {
        //     for(let key in obj) {
        //         if(typeof obj[key] === 'object') {
        //             iterate(obj[key])
        //         } else {
        //             console.log(obj[key]);
        //         }
        //     }
        // }

        // iterate(obj);

    // const array = [1,2,3,4,4,5];
    // const find = 4;
    // for(let i = 0; i <= array.length; i++) {
    //     if(array.includes(find)) {
    //         console.log(i)
    //     } else  {
    //         console.log('not found');
    //     }
    // }
/*     const nums = [1,2,3,4,5];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 4) {
            console.log('yes') 
        } else {
            console.log('no')
        }
    } */


    // for(let i = 0; i < 5; i++) {
    //     if(i === 3) {
            
    //     }
    // }
/*     let i = 0;
    for (; i <= 10; i++) {
        console.log(i);
    } */

/*     let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    console.log(sum); */

/*     for(let i = 2; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    } */

/*     let fruits = ["apple", "banana", "cherry"];

    for (let i = 0; i < fruits.length; i++) {
        if(fruits[i] === 'cherry') {
            break;
        } else {
            console.log(fruits[i]);
        }
    } */

/*     let i = 0;
    for (; i < 5; i++) {
        if(i === 5) break;
        console.log(i);
    } */
/*     let i = 0;
    for(; i <= 5; i++) {
        if(i % 2 === 0) continue;
        console.log(i);
    } */

/*     (() => {
        const selector = (el) => document.querySelector(el);
        const eventListener = (el, event, callback) => selector(el).addEventListener(event, callback);
        const inputValue = (el) => selector(el).value.trim(); 
        const disabledBtn = (el, value) => selector(el).disabled = value;
        const containerOutput = (el) => selector(el);
        // default disable btn
        disabledBtn('#generate', true);

        const values = {
            firstInputNumber: null,
            secondInputNumber: null,
        }

        function handleInputUser(el, event, key) {
            eventListener(el, event, () => {
                const value = inputValue(el);
                values[key] = value || 0;
                validateInputValue();
                // console.log(values['firstInputNumber'], values['secondInputNumber']);
            });
        }

        handleInputUser('#firstInputNumber', 'input', 'firstInputNumber');
        handleInputUser('#secondInputNumber', 'input', 'secondInputNumber');

        function validateInputValue() {
            const { firstInputNumber, secondInputNumber } = values;
            // console.log(firstInputNumber, secondInputNumber);

            if(firstInputNumber > 10 || secondInputNumber > 10) {
                alert('10 maximum number required');
                disabledBtn('#generate', true);
                return;
            }


            // if(firstInputNumber)
            disabledBtn('#generate', false);
        }

        eventListener('#generate', 'click', generateTable);
        document.addEventListener('keydown', (e) => {
            const {  firstInputNumber, secondInputNumber } = values;
            if(e.key === 'Enter') {
                if(firstInputNumber > 10 || secondInputNumber > 10) {
                    alert('10 maximum numbers!');
                    return;
                }
                generateTable();
            }
        });

        function generateTable() {
            containerOutput('#output').innerHTML = '';
            const { firstInputNumber, secondInputNumber } = values;

            const fragment = document.createDocumentFragment();

            for(let i = 0; i <= secondInputNumber; i++) {
                
                const output = document.createElement('p');
                output.textContent = `${firstInputNumber} x ${i} = ${firstInputNumber * i}`;
                fragment.appendChild(output);
            }

            containerOutput('#output').appendChild(fragment);
        }
    })(); */


/*     for(let i = 1; i <= 5; i++) {
        if(i % 2 === 0) {
            break;
        }

        console.log(i);
    } */

/*     let fruits = ["apple", "banana", "cherry"];


    for(let i = 0; i < fruits.length; i++) {
            if(fruits[i] === 'apple') continue;
            console.log(fruits[i]);
    } */

/*     for (let i = 1; i <= 10; i++) {
        if (i === 5) break;
        console.log(i);
    } */
    /* let i = 1; 
    for(;i <= 30; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    } */

//     function isPalindrome(str) {
//         let len = str.length;
//         let i = 0;

//         for(; i < len; i++) {
//             // console.log(str[len - 1 - i]);
//             // console.log(str[i]);
//             // console.log(str[i]);
//             console.log(str[len - 1 - i]);
//         }
//         return true;
//     }

//     let word = 'hello';
//     if(isPalindrome(word)) {
//     console.log(`${word} is a palindrome`);
//     } else {
//     console.log(`${word} is NOT a palindrome`);
// }
// let str = 'hello';
// console.log(str.length);
// let i = 0;

// for(; i < str.length; i++) {
//     console.log(str[str.length - 1 - i], i);
// }

/* function customRangePrinter(start, end, step) {
    let i = start;
    for(; i <= end; i += step) {
        console.log(i);
    }
}

customRangePrinter(1, 10, 2); */

/* 
function customRangePrinter(start, end, step) {
    if (step === 0) {
        console.log("Step cannot be zero!");
        return;
    }

    // forward counting
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            console.log(i);
        }
    } else {  // backward counting
        for (let i = start; i >= end; i += step) {
            console.log(i);
        }
    }
}

// Example backward counting:
customRangePrinter(10, 1, -2); */

/* for(let i = 1; i < 20; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
} */
/* 
    for(let i = 10; i >= 1; i--) {
        console.log(i);
    } */

/*     for(let i = 3; i <= 30; i++) {
        if(i % 3 === 0) {
            console.log(i);
        }
    } */

/*     const personNames = ['ako', 'sila', 'tayo'];

    for(let n of personNames) {
        console.log(`hi ${n}`);
    } */

    
/*     const totalOfEvenNum = [];

    for(let i = 1; i < 100; i++) {
        if(i % 2 === 0) {
            totalOfEvenNum.push(i);
        }
    }
    console.log(`the total of Even Numbers from 1 - 100 is: ${totalOfEvenNum.length}`); */

/*     for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
 */


/* for (let i = 3; i <= 30; i += 3) {
  console.log(i);
} */

/*   let count = 0;
for(let i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        count++;
    }
}
console.log(`Even numbers from 1 to 100: ${count}`); */
/* 
let count = 0;
for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {
        count++;
    }
}
console.log(count); */

/* for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j}`);
    }
} */


/*     for(let i = 1;  i <= 50; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if(i % 3 === 0) {
            console.log('Fizz');
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    } */

/*     function countVowels(str) {
        let count = 0;
        const vowels = 'aeiou';

        for(let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase();

            if(vowels.includes(char)) { 
                count++;
            }
        }
        console.log(`vowels count: ${count}`);
    }

    countVowels('hello world') */

    // let arr = [1,2,3,4];

    // for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[arr.length - 1 - i]);
    // } 

// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let space = ''; // para sa spaces
//     let star = '';  // para sa stars
//     // console.log(i);
//     // First inner loop: spaces
//     for (let j = 1; j <= rows - i; j++) {
//         space += ' ';
//         // console.log(j);
//         // console.log(space);
//     }

//     // Second inner loop: stars
//     // for (let k = 1; k <= 2 * i - 1; k++) {
//     //     star += '*';
//     // }

//     // console.log(space + star);
// }

