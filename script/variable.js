

// declaring variable using var,let,const

// var name = 'angelito';
// let gender  = 'male';
// const age = 21;

// declaring + initial value && declare variable without value

// example

// let pogi = true // declare variableName of "pogi" + value of 'true'


// let active; // declaring variable without value



// behavior of variable keyword var, let, const

// var - can redeclare and reassign (function scope)

// example of redeclare

// var age = 21; 
// var age = 20;

/* 
as you see the age variable can repeat (redeclare)
*/

// example of reassign

// var name = 'angelito';
// name = 'pogi';

/* 
as you see reassigningg the variable value without keyword variable
*/

// function scope (var)

// function varFunc() {
//     var age = 21;
//     console.log(age);
// }
// console.log(age); // referrence Error not define age


// let - can be reassign the value (block scope) and can be reassign in the same scope but can't redeclare in the same scope but in the different block scope yes


// example 

// let person = 'ikaw';
// person = 'ako';


// 


// block scope in global scope
// let person = 'angelito';


// block scope

/* {
    let person = 'ikaw';

    // no errr because nasa different scope sya
} */

    
// const - can't chamge the value, should be have initial value, also block scope



// const person = {
//     name: 'ana'
// }

// // person.name = 'liza';
// // console.log(person);
// {
//     const person = {};
//     console.log(person);
// }

/* 
const student = {
    name: "Mark",
    age: 20
};


let newAge = student.age + 1;
student.age = newAge;
console.log(student); */


// syntax - container of every data types like (number, string, boeelan, null, undefine, array(special part of objec), object, function, );

// pwedeng palitan or reassign the variable and chage the data (if you use let) o di na pwedeng palitan if (you use const)

// let data = 'names';

/* 
const user = 'ikaw';

// pass the variable
function demo(userName) {
    // if userName undefined 
    return !userName ? alert('please insert username') : alert(`hi, ${userName}`);
}

demo(user); */


// declaring variables
// let person = 'ako';

// declare after assign the value

// let number = null; // intentional declare the variable with no value 

// assign the value
// number = 5;
// console.log(number);
// console.log(person);


// var - can be reasign, redeclare and hoisted - function scope

/* var person = 'ikaw';
var person = 'ako';

function varFunc() {
    return console.log(person);
}

varFunc(); */

// let - can reassign, bawal redeclare ang variable at block scope

// const - bawal reassign at redeclare at daapt may initial value at block scope


// ang variable ay container ng mga data types tulad ng:
/* 
- string
- number
- boolean
- null
- undefined
- object
    - array
- function
- symbol
- BigInt

*/

//  !== - tinitignan kung hindi sila same ng value at data type or kahit isa lang dyan 
// console.log(23 === Object(23)); // false

// const tempStr = new Object('hello world');
// console.log(tempStr.toUpperCase()); 

// let original = null;
// let copy = original;
// console.log(original);
// console.log(copy = 'hello world');
// console.log(original);