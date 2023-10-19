// ARRAY OF STRINGS
const students = ['Ben', 'Alicia', 'Tom', 'Bolita', 'Anna'];
console.log(students);
console.log(students[1]);

// LENGTH
console.log(students.length);

for (let i = 0; i < students.length; i++) {
  console.log(`Hi, ${students[i]}`);
}

// NUMBERS ARRAY
const numbers = [10, 2, 53, 14, 5, 6];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers.sort((a, b) => a - b));

// MIXED ARRAY
const mixed = ['Tom', 22, true];
console.log(mixed);

// ARRAY OF ARRAYS
const arrayOfArrays = [[1, 2, 3], students, numbers, mixed];
console.log(arrayOfArrays);

// ARRAY OF OBJECTS
const arrayOfObjects = [
  {
    name: 'Bolita',
    age: 2,
    race: 'siamese cat',
  },
  {
    name: 'Tom',
    age: 3,
    race: 'comon european cat',
  },
];

console.log(arrayOfObjects);
console.log(arrayOfObjects[0]);
console.log(arrayOfObjects[0].name);

// SOME ARRAY METHODS!!

// JOIN
console.log(students.join(', '));

// SLICE
const newArray = students.slice(1, 3);
console.log(newArray);

// POP
console.log(students.pop());
console.log(students);

// PUSH
students.push('Sara');
console.log(students);

// SORT
console.log(students.sort());
console.log(students[0]);
