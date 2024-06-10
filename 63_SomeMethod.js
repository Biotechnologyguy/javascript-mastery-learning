// Some Method :
// Checks whether atleast one element in the array follows the particular condition

const evenNumbers = [4, 22, 7, 66, 48];
const oddNumbers = [1, 2, 9, 3, 75, 97];

console.log(evenNumbers.some(number => number%2===0));
// Even if one number satisfy the condition, it returns true

const products = [
    {productId : 1, productName : "laptop", price : 67000},
    {productId : 2, productName : "TV", price : 50000},
    {productId : 3, productName : "Mobile", price : 152000},
    {productId : 4, productName : "Tablet", price : 15000}
  ];

  
console.log(products.some(product => product.price > 100000));