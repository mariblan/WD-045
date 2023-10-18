// Console methods
console.log('Hello world!');
console.warn('Hi');
console.error('Hi');

// Variables

const myName = 'Mari';
let yourName = 'Patricia' + ' Maria';
let herHisName;

console.log(myName);
console.log(yourName);
console.log(herHisName);

herHisName = `Jorge and Patricia and ${myName}`;
console.log(herHisName);

yourName += ' Ben';
console.log(yourName);

yourName = 'Ben';
console.log(yourName);

// Conditionals and Operators
// && = and
// || = or
// ! = falsy value or not the same as

// IF/ELSE
if (myName === 'Patricia Maria') {
  console.log(myName);
} else if (myName !== 'John' || myName === 'Maria') {
  console.log(myName);
} else {
  console.log('The name is wrong');
}

let student;

if (!myName) {
  console.log(myName);
}

if (!student) {
  console.log(student);
} else {
  console.log('No value!');
}

// Ternary operator

student ? console.log(student) : console.log('no value');

!student ? console.log(student) : console.log('there is a value');

// SWITCH

student = 'Mihaela';

switch (student) {
  case 'Denis':
    console.log(`I am ${student}`);
    break;
  case 'Mihaela':
    console.log(`I am ${student}`);
    break;
  case 'Anna':
    console.log(`I am ${student}`);
    break;
  case 'Darko':
    console.log(`I am ${student}`);
    break;
  default:
    console.log(`No student`);
}
