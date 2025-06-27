
/* const selectorTag = (el) => document.querySelector(el);
const max = selectorTag('input').dataset.role;
console.log(max);
 */


// const input = document.querySelector('input');
// const max = input.dataset.maxlength;
// console.log(max);

/* document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent actual submission
  
  const inputs = this.querySelectorAll('input');
  let errors = [];

  inputs.forEach(input => {
    const value = input.value.trim();
    const dataset = input.dataset;

    // Check if required
    if (dataset.required === "true" && value === "") {
      errors.push(`${input.id} is required.`);
    }

    // Check max length
    if (dataset.maxlength && value.length > parseInt(dataset.maxlength)) {
      errors.push(`${input.id} must be at most ${dataset.maxlength} characters.`);
    }

    // Check pattern (e.g., email regex)
    if (dataset.pattern) {
      const regex = new RegExp(dataset.pattern);
      if (!regex.test(value)) {
        errors.push(`${input.id} is invalid.`);
      }
    }

    // Check min (for number input like age)
    if (dataset.min && value !== "" && parseInt(value) < parseInt(dataset.min)) {
      errors.push(`${input.id} must be at least ${dataset.min}.`);
    }
  });

  const errorBox = document.getElementById('errorMessages');
  errorBox.innerHTML = errors.length ? errors.join('<br>') : "Form is valid!";
});
 */


/* const selector = (el) => document.querySelector(el);

const input = selector('#username');
const role = input.dataset.role; */



/* const numbers = [123,123,123];

function compute(...nums) {
  return nums.reduce((prev, acc) => prev += acc, 0);
}

function callback(fn) {
  return function (args) {
    return fn(args);
  }
}

const computeNums = callback(compute);
console.log(computeNums(numbers)); */

const input = document.getElementById('username');
const errorMsg = document.getElementById('error-msg');

/*
ang eventListener ang tumatawag sa debounce function so si debounce function namaan ay tinatawag ang returnn function na validation input so ang validation input ay naka function so lalagyan ng delay
*/

// function debounce(callback, delay) {
//   let timeout;
//   return function(args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => callback(args), delay);
//   };
// }


// function validateUsername() {
//   const value = input.value.trim();
//   const isValid = /^[a-zA-Z0-9_]{3,15}$/.test(value);
//   if (!isValid) {
//     errorMsg.textContent = 'Username must be 3–15 characters, letters/numbers only';
//   } else {
//     errorMsg.textContent = '';
//   }
// }

// // Apply debounce (500ms delay)
// input.addEventListener('input', debounce(validateUsername, 500));

/* function pass() {
  return 'hello world';
}

function receive(callback) {
  console.log(callback());
}

receive(pass); */
/* 
function anonymouse(callback) {
  let str = 'hello world';
  callback(str);
}

anonymouse((result) => {
  console.log(result)
}) */

/* const selector = (tag) => document.querySelector(tag);
const eventListener = (tag, action, callback) => selector(tag).addEventListener(action, callback);
const numbers = [12,12,12,123,123];

function compute(...args) {
  return args.reduce((prev, accu) => prev += accu, 0);
}

function receive(callback) {
  return function (...args) {
    return callback(args);
  }
}

eventListener('button', 'click', receive()); */
/* 
const selector = (tag) => document.querySelector(tag);
const eventListener = (tag, action, callback) => selector(tag).addEventListener(action, callback);


function pass() {
  return 'hello world';
}

function diplay(callback) {
}

eventListener('button', 'click', diplay(pass)) */ 