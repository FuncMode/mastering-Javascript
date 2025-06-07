
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
console.log(5 == '5');
console.log(0 == false);
console.log(1 == true); // true 

/* 
all of this is example is checking the value not the data type
*/

// === - check value and the data type

console.log(1 === true); //false - because same value but should be same data type also
console.log(false === 0); // false - same value but not different data type  

// != - its check if value data is not equal in the comparison data

console.log(1 != true); // so false - why? because the first value is same in the second value 

console.log(1 != 0) ; // true, kase magkaiba sila ng value


// !== - check kung ang not equal ba sila ng value at data type

console.log(1 !== 0); // true because kahit  equal ng data hindi naman sila equal ng value its consider not equal

console.log(false !== 0); // its verry obvious kase ang 'false' ay isang boolean type at ang 0 ay number type - so true 


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