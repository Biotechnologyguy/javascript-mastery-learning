// FILTER function -array method
// Callback function of filter SHOULD ALWAYS return a boolean value

const numbers = [1, 45, 6, 7, 8, 3, 6, 9];

// if for given element of Array, callback function returns true, it will be added to new array, else skipped
const evenNums = numbers.filter((num, idx)=>{
  return num % 2 == 0;
});

console.log(evenNums);