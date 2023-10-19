// LOOPS

// FOR LOOP
// Useful when you know the amount of times that the loop should run.
// Between the parenthesis you need to pass in this order:
// 1. The variable that will control how many times it runs.
// 2. The condition
// 3. The incrementor (that is the variable with a ++ if you want to increase it
// by 1 or =+ and a number if you want to increase it more than by 1 on each run)

// The loop runs until the condition becomes false.

// for the condition you can use a number...

for (let i = 1; i <= 10; i++) {
  console.log(`This is run number ${i}`);
}

// ...another variable...
const runTimes = 20;
for (let i = 1; i <= runTimes; i += 2) {
  console.log(`This is run number ${i}`);
}

// ... or the length method with an array
const students = ['Ben', 'Alicia', 'Tom', 'Bolita', 'Anna'];

for (let i = 0; i < students.length; i++) {
  console.log(`Hi, ${students[i]}`);
}

// WHILE LOOP

// Useful when you know the condition that has to happen when you want to stop the loop, but
// this doesn't depend on the amount of runs.

// The loop runs until the condition inside the while becomes false.

let n = 1;
let correct = false;

while (n <= 10) {
  console.log(`This is run number ${n}`);
  n++;
}

while (correct === 'false') {
  correct = prompt('Please, write true!', 'true');
  n++;
}

// DO/WHILE LOOP

// Works in the same way as the WHILE LOOP, but if the condition is false in the beginning it
// would at least run one time.
do {
  correct = prompt('Please, write true!', 'true');
  console.log(n);
  n++;
} while (correct !== 'true' && n < 5);

console.log(correct);
