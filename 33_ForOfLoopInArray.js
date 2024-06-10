//While loop in array

const fruits = ["apple", "mango", "banana", "grapes"];
const upperCaseFruits = [];

for(let fruit of fruits){
console.log(fruit);
upperCaseFruits.push(fruit.toUpperCase());
}

console.log("Fruits", fruits)
console.log("upperCaseFruits", upperCaseFruits);