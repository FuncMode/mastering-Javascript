

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