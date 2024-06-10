// Every Method :
// Checks whether every element in the array follows the particular condition

const evenNumbers = [4, 22, 8, 32, 48];
const oddNumbers = [1, 3, 9, 3, 75, 97];

console.log(evenNumbers.every((number) => number % 2 === 0));
console.log(oddNumbers.every((number) => number % 2 !== 0));

// Even if one number fails to satisfy the condition, it returns false

const products = [
  { productId: 1, productName: "laptop", price: 67000 },
  { productId: 2, productName: "TV", price: 50000 },
  { productId: 3, productName: "Mobile", price: 152000 },
  { productId: 4, productName: "Tablet", price: 15000 },
];

console.log(products.every((product) => product.price < 200000));