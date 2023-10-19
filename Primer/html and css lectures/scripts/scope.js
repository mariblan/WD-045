// GLOBAL SCOPE
//The global scope is the root of the js file.
// Variables declared in the global scope are named global variables.
// Global variables are reachable everywhere within the code
const myName = 'Mari';
let age = 29;
var lastName = 'Blanco';

// LOCAL SCOPE

// With CONST and LET we refer to the local scope.
// The local scope is inside any block of code.
// Any variable declared inside a block of code with const and let is a local variable.

const hiLocal = (name, lastname) => {
  // Local variables.
  let age = 22;
  const myName = 'Marta';
  return `My name is ${myName} ${lastName} and my age is ${age}`;
};

console.log(myName);
console.log(age);

if (myName) {
  // Local variable.
  let age = 22;
  const myName = 'Marta';
  console.log(`My name is ${myName} ${lastName} and my age is ${age}`);
}

console.log(myName);
console.log(age);

// FUNCTION vs BLOCK SCOPE

// With Var the local scope has to be understood by dividing it in FUNCTION and BLOCK scope.

// Function scope happens inside the block of code of functions. Any variable is unreachable in there,
// whether it is declared with const, let or var.

const hiFunction = (name, lastname) => {
  // Local variables
  let age = 22;
  const myName = 'Marta';
  var lastName = 'Canal';
  return `My name is ${myName} ${lastName} and my age is ${age}`;
};

console.log(myName);
console.log(age);
console.log(lastName);

// BLOCK SCOPE => happens inside the block of code of anything that is not a function.

// Any variable declared with const and let inside it is unreachable from the global scope.

// VAR variables declared inside a block scope are still reachable from the global scope and can
// accidentally update the value of any global variable with the same name.
if (myName) {
  // Local variables
  let age = 22;
  const myName = 'Marta';
  var lastName = 'Canal';
  console.log(`My name is ${myName} ${lastName} and my age is ${age}`);
}

console.log(myName);
console.log(age);
console.log(lastName);
