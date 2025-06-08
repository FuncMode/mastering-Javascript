

// variable Name
let fname = 'angelito';
const age = 21;


// creating function for variableName
function greet(name) {
    return `hello i am ${name} and i'm ${age}`;
} 

// assign to the variable
const result = greet(fname);

// see the result
console.log(result);



// Simulate user input via prompt (browser environment)
/* const username = prompt("Enter username:");
const isActive = confirm("Is the account active?");
const role = prompt("Enter role (admin/user):");

// Build the user object
const user = {
  name: username,
  isActive: isActive,
  role: role
};

// Modular check functions
function isMissing(user) {
  return !user.name;
}

function isInactive(user) {
  return !user.isActive;
}

function isNotAdmin(user) {
  return user.role !== "admin";
}

// Main login logic (with early returns)
function login(user) {
  if (isMissing(user)) return console.log("❌ No username provided.");
  if (isInactive(user)) return console.log("⛔ Account is inactive.");
  if (isNotAdmin(user)) return console.log("⚠️ Access denied: Admins only.");

  console.log(`✅ Welcome, admin ${user.name}!`);
}

// Run the program
login(user);
 */


/* (() => {
  // user input
  const inputUsername = prompt('what is userName (admin/user)');

  // container of input username
  const userObj = {
    role: inputUsername,
  }

  // check if valid username (admin) input
  function isValidUsername(user) {
    return user.role === 'admin';
  }

  // check the input user
  function checkUser() {
    if(!isValidUsername(userObj)) {
        alert('only admin allowed!');
        return;
    }
      alert(`Welcome admin!`);
  }

  checkUser();
})(); */

/* 

const inputUser = prompt('type your role');
// check user role
function checkRoleUser(user) {
  // if prompt cancel or ok (!user) = true, or user is not equal to 'admin' = true
  if(!user || user !== 'admin') {
      alert('user admin only allowed!');
      return;
  }
  alert(`Welcome ${user}!`);
}

// call the function (invoke)
checkRoleUser(inputUser); */


