

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






