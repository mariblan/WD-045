// FUNCTIONS
// ES5 FUNTIONS

// The parameter is the placeholder that you use in the parenthesis when declaring the function.
// Inside the parenthesis you declare the parameter and give it a position that is going to help
// the function know later on which argument is asigned to each parameter.
// Inside the block of code, you use this placeholder where you want to display the value you are
// going to give it when calling the function.
function hello(name, lastname, age) {
  const sentence = `My name is ${name} ${lastname} and my age is ${age}`;
  return sentence;
}

// Calling a function => you just need to write the name of the function with the parenthesis.
// If you don't call a function the code of said function won't run.

// The argument is the value that you pass in the parenthesis when you call the function.
// The in which you write the arguments matters => the first argument will be the value of the
// first parameter, the second argument the value of the second parameter and so on.
console.log(hello('Maria', 'Blanco', 29));
console.log(hello('Anna', 'Lambrano', 34));
console.log(hello('Sarah', 'High', 50));

//ES6 OR ARROY FUNCTIONS

// Parameter and arguments work in the same way as in the ES5 Functions

// Inside the function, you can also use variables created in the global scope.
const n2 = 23;

const hi = (name, lastname) => {
  const sentence = `My name is ${name} ${lastname} and my age is ${n2}`;
  return sentence;
};

console.log(hi('Sarah', 'High'));
