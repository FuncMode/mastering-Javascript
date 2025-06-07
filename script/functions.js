
// function demo() {
//     console.log(this);
//     return () => {
//         console.log(this);
//     }
// } 

// demo()();

// (() => {
//     console.log(this);
// })();

/* 
const obj = {
    name: "ana",
    greet: function() {
        // this arrow function inherit in the parent so you can access the obj
        return () => {
            console.log(this);
        }
    }
}

obj.greet()(); */

/* let numbers = [1,2,3,4,5];

numbers.forEach(function(value) {
    console.log(value);
}) */


    
// const person = {
//   name: "Mark",
//   hobbies: ["coding", "gaming", "biking"],
//   printHobbies: function () {
//     this.hobbies.forEach(function (hobby) {
//       console.log(this.name + " loves " + hobby); // ❌ undefined
//     }.bind(person));
//   }jk
// };

// person.printHobbies();

