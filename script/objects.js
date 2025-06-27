

/* const user = {
    name: 'person',
    age: '21',
    display: () => {

    }
}
 */

/* const objectConstructor = new Object();
objectConstructor.name = 'ok';
console.log(objectConstructor); */

// constructor function

/* function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const person1 = new Person('person', '21', 'male') ;
console.log(person1); */

/* 
const template = {
    greet: function() {
        console.log('hello world');
    }
}

const newObj = Object.create(Object());
// newObj.greet();
console.log(newObj);     */

/* 
const logger = {
  log: function(message) {
    console.log("LOG:", message);
  }
};

const fileLogger = Object.create(logger);
fileLogger.log("Saving file..."); // LOG: Saving file...

const networkLogger = Object.create(logger);
networkLogger.log("Connecting to server..."); // LOG: Connecting to server...
 */
/* 
const person = {
    name: null,
    displayName: function() {
        return `hi ${this.name}`;
    }
}

const copy = Object.create(person);
copy.name = 'personn';
console.log(copy.displayName()); */


/* class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
}

const person1 = new Person();
 */


