//Primitive types 

let num1 = 12;
let num2 = num1;
console.log(num1);
console.log(num2);

console.log("After changing num1");
num1++;
console.log(num1);
console.log(num2);

//Reference Type

let array1 = ["item1","item2"];
let array2 = array1;
console.log(array1);
console.log(array2);

console.log("After changing Array1");
array1.push("item3");

console.log(array1);
console.log(array2);

//Primitives are stored in stack.
//Reference types are stored in heap. 
//In above case array2 points to the location where array1 is stored.
//So in case of ref types, this behaviour is noticed.

//If I add element to array1, it will be automatically added to array2

