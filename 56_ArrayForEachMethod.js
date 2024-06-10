// Important array Methods

// forEach
// map
// filter
// reduce

// forEach : Takes callback function as i/p
// Automatically passes (number, index) as a params to that function
// We can write that function seperately or
// We can write it as an anonymous function

const mulBy2 = (number, index) => {
  console.log(`Number is ${number} and its index is ${index}`);
};

const array = [1, 7, 2, 66, 4, 32, 89, 21];

array.forEach(mulBy2);

// We can do the same thing with anonymous function as well
array.forEach((number, index) => {
  console.log(`Number is ${number} and its index is ${index}`);
});

// lets do some more things

array.forEach((number, index) => {
  console.log(number * index);
});

let users = [
  { firstName: "Shubham", gender: "Male", age: 23 },
  { firstName: "Mayur", gender: "Male", age: 23 },
  { firstName: "Vishal", gender: "Male", age: 23 },
  { firstName: "Omkar", gender: "Male", age: 23 },
];

users.forEach((user, index) => {
  console.log(user.firstName);
});
