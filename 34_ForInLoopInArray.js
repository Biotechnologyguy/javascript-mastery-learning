//While loop in array

const fruits = ["apple", "mango", "banana", "grapes"];
const upperCaseFruits = [];

for(let index in fruits){
    console.log("Inside forIn")
    console.log("Index : " ,index);
    upperCaseFruits.push(fruits[index].toUpperCase());
}

console.log("Fruits", fruits)
console.log("upperCaseFruits", upperCaseFruits);