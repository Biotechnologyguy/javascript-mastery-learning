// splice method 
// start, insert, delete
// Make changes in original array

const numbers = [1,2,3,4,5,6,7,8,9];

// DELETE : deleted item is returned
console.log('deleted numbers', numbers.splice(2, 3));
console.log(numbers);
// insert
numbers.splice(0, 0, 11);
console.log(numbers);

// insert and delete 
console.log('Deleted Numbers',numbers.splice(1, 3, 55,11,22,1,5));
console.log(numbers);

