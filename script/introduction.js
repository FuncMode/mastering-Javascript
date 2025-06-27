

// document.write('hello world'


// ling by line execute (top to bottom)
// console.log('hello world');

// console.log('hi');


// dynamically typed

// let data = 'string'  // knows javascritp what did you type


// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);
// console.log("3");


/* 
single threaded 
*/

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');


// console.log('hello world 1');


// setTimeout(() => {
//     console.log('mabuhay');
// }, 3000);


// console.log('hello world 2');


/* 
dito sa example na toh meron tayong asynchronous na settimeout na may delay na 2 so ang javascript ay tuloy tuloy ang run at hindi neto iniintay ang async na matapos bagkos tutuloy ito sa susunod na code if meron mann kasunod din kapag natapos na ang delay sa setTimeout tyaka neto babalikan neto javascript para kunin ang data doon
*/


// ang javascript ay kaya nitong mag hintay o mag sagawaa ng background task ng hindi pinipigilan ang ibang code 
// alert('hello world')

// console.log('start');

// setTimeout(() => {
//     console.log('done');
// }, 3000); 

// console.log('end');

/* function diplayProcess(text) {
    return document.querySelector('p').textContent = text;
}


function fetchData() {
    diplayProcess('loading...');
    return new Promise((res) => {

        setTimeout(() => {
            res('file done');
        }, 4000);

        setTimeout(() => {
            diplayProcess('processing... please wait');
        }, 2000);
    });

}

fetchData()
.then(data => {
    diplayProcess(data);
})
.catch(err => {
    diplayProcess(err);
}) 
 */


/* 

function runInChunks(start, end) {
  if (start >= end) return;
  for (let i = start; i < start + 1000 && i < end; i++) {
    // Mabigat na task (ex. render DOM)
  }
  setTimeout(() => runInChunks(start + 1000, end), 0);
}
runInChunks(0, 10000); // ✅ smoother execution */


// function throttle(fn, limit) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = Date.now();
//     console.log(now);
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       fn(...args);
//     }
//       console.log(lastCall);

//   };
// }

// window.addEventListener('scroll', throttle(() => {
//   console.log("Throttled scroll event");
// }, 200));



    // function throttle(fn, limit) {
    //   let lastCall = 0;
    //   return function (...args) {
    //     const now = Date.now();
    //     if (now - lastCall >= limit) {
    //       lastCall = now;
    //       fn(...args);
    //     }
    //   };
    // }

    // const updateScroll = () => {
    //   document.getElementById("status").textContent = `ScrollY: ${window.scrollY}`;
    // };

    // window.addEventListener("scroll", throttle(updateScroll, 200));

/* 
      function debounce(fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }

  const fakeSearch = (text) => {
    document.getElementById("result").textContent = `Searching for "${text}"...`;
  };

  document.getElementById("search").addEventListener(
    "input",
    debounce((e) => {
      fakeSearch(e.target.value);
    }, 500)
  ); */



/*     function returnFun(num) {
        return (double) => {
            let total = num * double;
            return total;
        }
    }

    console.log(returnFun(12)(4)); */


/*       function memoize(fn) {
    const cache = {};
    return function (x) {
      if (x in cache) {
        return cache[x];
      }
      const result = fn(x);
      cache[x] = result;
      return result;
    };
  }

  const factorial = memoize(function(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  });

  document.getElementById("num").addEventListener("input", (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      document.getElementById("output").textContent = `Factorial: ${factorial(val)}`;
    }
  }); */



/*   function greet() {
    console.log('hello world');
  }


  function start() {
    greet();
  }

  start(); */


/*   const data = fs.readFileSync('example.txt', 'utf8'); // Hintay muna basahin!
console.log(data);
console.log('Nagbasa ng file...'); */

/* console.log('1');

function pass() {
  console.log('2');
}

function receive(callback) {
  callback();
}


console.log('3');
receive(pass);
 */

/* console.log('1');
console.log('2');
console.log('3'); */

/* console.log('1');

// microtask queue
setTimeout(() => {
  console.log('3');
}, 1000);

Promise.resolve().then(() => {
  console.log('2');
})

console.log('4'); */
/* 
const numbers = [1, 2, 3, 4, 5];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled); */

/* const numbers = [1, 2, 3, 4, 5];

let sum = 0;

let i = 0;
let numLen = numbers.length;

for (; i < numLen; i++) {
  sum += numbers[i];
}
console.log(sum); */

// function total() {
//   return 56;
// }

// const totalAmount = total();
// console.log(totalAmount);

/* function greet() {
  return 'hello world';
}

let greetBrowser = greet;
greetBrowser = 'hello world';
console.log(greetBrowser); */


/* function pass(name) {
  console.log(`hello ${name}`);
}

function receive(passHere) {
  return passHere;
}

console.log(receive(pass)); */
/* 
function callItself(callback, name) {
  let greet = 'hello' + " " + name;
  callback(greet, name);
}

callItself((result) => {
  console.log(result);
}, 'angelito'); */

/* const add = (a,b) => a + b;
console.log(add(12,12)); */

/* function outer() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  }
}

let add = outer();
console.log(add());
console.log(add());
console.log(add()); */

/* 
alert('ok'); */

/* 
console.log([].map) */

// const numbers = [1,2,3,4,5];
/* 
const double = (value, index, array) => value * 2;

const see = numbers.map(double);

console.log(see); */

/* const double = numbers.map((value, index, array) => value);
console.log(double);
 */

/* const greet = function() {
  return () => {};
}
console.log(greet); */
// const init = greet;

// console.log(Math.sqrt(54).toFixed(0));


/* console.log(Date.UTC(2025, 6, 23, 12, 22, 0, 0)); */
/* 
const demo = () => {
  console.log('hello world');
} */



/* setTimeout(() => {
  console.log('hello world 1');
}, 2000);

const selector = (tag) => document.querySelector(tag);
const eventListener = (el, action, callback) => selector(el).addEventListener(action, callback)

eventListener('button', 'click', () => {
  console.log('hello world 2')
}); */


// Synchronous code sunod sunod
/* 
console.log('1');
console.log('2');

// Asynchronous code pwedeng mag delay at hintayin pero habang nag hihintay pwede magpatuloy sa susunod na code

setTimeout(() => {
  console.log('3');
}, 2000);

console.log('4');
 */


/* function greet(name) {
  return `hello ${name}`;
}

console.log(greet('angelito')); */
/* const display = greet('person');
console.log(display);
 */


/* function insertName(name) {
  if(typeof name === 'undefined' || name.length === 0 || typeof name === 'number') {
    return;
  }

  return display(name);
}

function display(name) {
  console.log(`nakapasa ako: ${name}`)
}

insertName('person'); */

// imperative

// const numbers = [1];
// const doubled = [];

// const numLen = numbers.length;
// let i = 0;

// for(; i < numLen; i++) {
//   doubled.push(numbers[i] * 2);
// }
// console.log(doubled);

/* let sum = 0;

for(; i < numLen; i++) {
  sum += numbers[i];
}
console.log(sum); */

/* console.log('1');
Promise.resolve().then(() => console.log('2'));

console.log('3') */

/* function processData(data, callback) {
  return callback(data);
}

processData('hello world', (data) => {


}); */


// const numbers = [1,2,3,4,5];

// const iterate = numbers.forEach(value => {
//   console.log(value);
// })
/* 
const doubled = numbers.map(valueNum => valueNum * 2);
console.log(doubled); */


/* const filter = numbers.filter(n => n % 2 !== 0).forEach(pass => {
  console.log(pass);
}); */


/* 
requestAnimationFrame(() => {
  console.log('1');
}); // 4

console.log('2'); // 1


setTimeout(() => {
  console.log('3'); // 3
}, 0)

Promise.resolve().then(() => console.log('4')); // 2 */


/* console.log("1"); // 1

setTimeout(() => {
  console.log("2 - macrotask");
}, 0); // 4

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => {
    console.log("3 - microtask from fetch");
  }); // 5

Promise.resolve().then(() => {
  console.log("4 - microtask from promise");
}); // 3

console.log("5"); // 2 */


/* queueMicrotask(() => {
  console.log('1');
})
console.log('2'); */

/* const process = new Promise((res, rej) => {

  let isActive = null;

    if(isActive) {
      res('yes active');
    } else {
      rej('not active');
    }
})

async function fetchData() {
  console.log('waiting..');
  try {
    const data = await process;
    console.log(data);
  } catch(err) {
    console.log(err);
  } 
}

fetchData(); */
/* 
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

test();


console.log("3");
Promise.resolve().then(() => console.log('4'))
 */

/* async function example() {
  console.log("A");       // sync
  await null;             // pause here
  Promise.resolve().then(() => console.log('D'));
  console.log("B");       // scheduled as microtask
}

example();
console.log("C");         // sync */


/* async function fetchData() {
  
  const data = await Promise.resolve();
  console.log('1')
}
console.log('2');
fetchData() */

document.body.style.backgroundColor = '#000';

/* async function fetchData(params) {
  return 'hello world';
}

fetchData()
.then(data => {
  console.log(data)
})
.catch(err => console.log(err)) */

/* async function fetchData(params) {

  try {
    let isActive = err;
    if(isActive) {
      console.log('ok');
    } else {
      console.log('no');
    }
  } catch(err) {
    console.log(`error: ${err}`);
  }
}

fetchData(); */

/* async function data(params) {
  return 'siya tang ina mo';
}




async function magmahal() {
  try {
    const tao = await data();
    console.log("Mahal ko na", tao);
  } catch (sakit) {
    console.log("Nasaktan ako:", sakit);
  }
}

magmahal(); */

/* const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Object with value ${heldValue} has been garbage collected`);
});

let user = { name: "Juan" };

registry.register(user, "user-data");
 */
/* const registry = new FinalizationRegistry((key) => {
  cache.delete(key);
});

const cache = new Map();

function trackUser(user) {
  cache.set(user.id, user);
  registry.register(user, user.id);
}

let u = { id: "123", name: "Juan" };
console.log(trackUser(u));
 */
// Later... if `u` is no longer referenced anywhere else:
// -> `user` will be garbage collected
// -> registry callback deletes it from cache

/* async function data() {
  return Promise.resolve('hello world');
}

data()
.then(data => console.log(data))
.catch(err => console.log(err)); */


/* data()
.then(data => console.log(data))
.catch(err => console.log(err)); */


/* const numbers = [1,2,3,4,5];
const doubled = [];

const numsLen = numbers.length;
let start = 0;

let total = 0;

for(;start < numsLen; start++) {
  total += numbers[start] * 2;
  doubled.push(numbers[start] * 2);
}
console.log(total);
console.log(doubled); */

/* 
behind 
total = 0;
total = numbers from 0, 1, 2, 3, 4
so 0 + numbers[0] = 1 so 0 + 1 = 1 * 2 = 2
end so on
*/

/* function createUser(name) {
  const user = {
    name,
    createdAt: new Date()
  };
  return user;
}

const user = createUser('person');
console.log(user); */