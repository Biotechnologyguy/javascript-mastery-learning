// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items  
//bcz we can access them using INDEX

let fruits = ["Banana", "Apple", "PineApple"];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let mixed = [1,"String", null, undefined];
let obj = {};
console.log( fruits);
console.log( numbers);
console.log( mixed);
console.log( obj);

console.log(typeof fruits);
console.log(typeof numbers);
console.log(typeof mixed);
console.log(typeof obj);

//To check whether it is array or not
console.log(Array.isArray(fruits));
console.log(Array.isArray(numbers));
console.log(Array.isArray(mixed));
console.log(Array.isArray(obj));

console.log(fruits);
fruits[2] = "Guava";
console.log(fruits);