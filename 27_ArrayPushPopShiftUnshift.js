// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push -->Adds element at last
fruits.push("banana");
console.log(fruits);

// pop  -->Removes element from last
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift -->Adds an element at start
fruits.unshift("My Fruit");
console.log(fruits)
// shift -->Removes element from start
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);