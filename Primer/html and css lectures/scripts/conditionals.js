// CONDITIONALS
// Operators that can be used for conditions

// && = and => both conditions have to be true for the block to be read
// || = or => one of the two conditions has to be true
// ! = written in front of the variable it implies that it is a falsy value.
// === checks that the value and data type are the same.
// == checks that the value is the same, but not the data type.
// !== checks that the value is not equal to.

const myName = 'Mari';
let age = 26;

// IF/ELSE conditionals
if (myName === 'Patricia') {
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
