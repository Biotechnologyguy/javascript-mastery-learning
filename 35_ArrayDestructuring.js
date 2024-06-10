// Array Destructuring (ES6)

const myArray = ["Value1", "Value2"];

let [myVar1, myVar2] = myArray;

console.log("Value of myVar1 : ", myVar1);
console.log("Value of myVar2 : ", myVar2);


//What if elements in array are less than number of variable declared.
// remaining vars will be undefined ==> Var3 will be undefined
let [var1, var2, var3] = myArray;
console.log("Value of var1 : ", var1);
console.log("Value of var2 : ", var2);
console.log("Value of var3 : ", var3);


// What if we want to skip any element from array and take rest elements
//Mango will be skipped here
let fruits = ["apple", "mango", "banana", "grapes"];
let [fruit1, ,fruit2, fruit3] = fruits;
console.log("Value of Fruit1 : ", fruit1);
console.log("Value of Fruit2 : ", fruit2);
console.log("Value of Fruit3 : ", fruit3);


//What if you want to store first two elements in two variables and create seperate array for rest elements
let [fruit4, ...fruits2] = fruits;

console.log("Value of Fruit4 : ", fruit4);
console.log("Value of Fruits array : ", fruits2);


