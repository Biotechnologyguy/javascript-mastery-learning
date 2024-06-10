//While loop in array

const fruits = ["apple", "mango", "banana", "grapes"];
const upperCaseFruits = [];

let i = 0;
while (i < fruits.length) {
  upperCaseFruits.push(fruits[i].toUpperCase());
  i++;
}
console.log("Fruits", fruits)
console.log("upperCaseFruits", upperCaseFruits);