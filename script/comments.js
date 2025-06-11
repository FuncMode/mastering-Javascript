


/* 
creating square root of nunber
*/

/* function square(number) {
    return (root) => {
        return number * root;
    }
};

// see result by console.log
const result = square(8)
console.log(result(3)); */

// const bigArray = new Array(1000000).fill(1);


// for(let i = 0; i < bigArray.length; i++) {
//     console.log(i);
// }


// bigArray.forEach(function(item, index, arr) {
//   arr[index] = item + 1;
// });

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Item ${i}`;
//   fragment.appendChild(li);  // Walang reflow pa dito
// }

// document.body.appendChild(fragment); // Isang reflow lang

// const ul = document.querySelector('ul');

/* console.time('start');
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  ul.appendChild(li); // Reflow kada append
}
console.timeEnd('end');

document.body.appendChild(ul); */

// const ul = document.querySelector('ul');
// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 5; i++) {
//   const li = document.createElement('li');
//   li.textContent = `Item ${i}`;
//   fragment.appendChild(li); // Walang reflow, nasa memory lang
// }

// ul.appendChild(fragment); // Isang reflow lang
