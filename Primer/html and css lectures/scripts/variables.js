// VARIABLES
// Declaring variables
// CONST => used for variables that CANNOT update their value.
// You MUST iniciate it with a value.
const myName = 'Mari';

// LET => used for variables that CAN update their value.
// You can iniciate it with or without a value
let yourName = 'Patricia' + ' Smith';
let sentence;

// VAR => the ES5 way to declare variables. A bad practice to use in general, as it is
// very easy to accidentally update the value of the variable accidentally.
// You can iniciate it with or without a value
var myAge = 34;
var myHobbies;

// loging the variables in the console
console.log(myName); // logs 'Mari' in the console
console.log(yourName); // logs 'Patricia Smith' in the console
console.log(sentence); // yields undefine when logging into the console as it has not yet been given a value.
console.log(myAge); // logs 34 in the console
console.log(myHobbies); // yields undefine when logging into the console as it has not yet been given a value.

// UPDATING LET and VAR variables
// updating current value with another value with =
yourName = 'Ben';
sentence = `Jorge and Patricia and ${myName}`;
myAge = 26;
myHobbies = ['cats', 'cook', 'read'];

console.log(myName); // logs 'Mari' in the console
console.log(yourName); // logs 'Ben' in the console
console.log(sentence); // logs 'Jorge and Patricia and Mari' in the console
console.log(myAge); // logs 26 in the console
console.log(myHobbies); // logs ["cats", "cook", "read"] in the console

// updating current value by adding something to the current value with +=
yourName += ' Bravo';
sentence += ` Blanco`;
myAge += 4;
myHobbies += ' and dogs';

console.log(myName); // logs 'Mari' in the console
console.log(yourName); // logs 'Ben' in the console
console.log(sentence); // logs 'Jorge and Patricia and Mari Blanco" in the console
console.log(myAge); // logs 30 in the console
console.log(myHobbies); // logs cats,cook,read and dogs in the console

// POSSIBLE ERRORS
// const myName = "Marta"; // error => a variables with that name already exists.
// myName = "Marta"; // error => you cannot assing another value to a const variable.
// let yourName = "Jorge"; // error => a variables with that name already exists.

//Other CONSOLE METHODS you can use lo log variables in the console

console.warn(myName);
console.error(myName);
