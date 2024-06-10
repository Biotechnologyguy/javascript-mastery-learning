//For loop in array

let fruits = ["apple", "mango", "banana", "grapes"];
let upperCaseFruits = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  upperCaseFruits.push(fruits[i].toUpperCase());
}

let fruitsLength = fruits.length;
console.log("Array Length : ", fruitsLength);

console.log(upperCaseFruits);
