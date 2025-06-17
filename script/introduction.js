

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