// map method
// takes callback function as a i/p, returns NEW ARRAY

const numbers = [1, 45, 6, 7, 8, 3, 6, 9];

const squaredNumbers = numbers.map((number, index) => {
  console.log(index);
  return number * number;
});

console.log(numbers);
console.log(squaredNumbers);

const newArray = numbers.map((number, index) => {
  console.log(number * index);
});

// We will get array of undefined if map function is not rreturning anything
console.log(newArray);

const stringArray = numbers.map((num, idx)=>{
  return `${num} - ${idx}`;
});

// we can change the datatype of array as well 
console.log(stringArray);


// REAL WORLD EXAMPLE OF MAP

let users = [
  { firstName: "Shubham", gender: "Male", age: 23 },
  { firstName: "Mayur", gender: "Male", age: 23 },
  { firstName: "Vishal", gender: "Male", age: 23 },
  { firstName: "Omkar", gender: "Male", age: 23 },
];

const userNames = users.map((user, idx)=>{
  return user.firstName;
});

console.log(userNames);