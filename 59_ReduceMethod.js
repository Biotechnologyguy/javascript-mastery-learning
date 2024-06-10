// Reduce method

// Goal : get sum of all elements in the array : to understand reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Can accept upto 4 parameters to callback function
// Please read document by hovering over method
const sum = numbers.reduce((accumulator, currentValue, currentidx) => {
  console.log(accumulator, currentValue, currentidx);
  return accumulator + currentValue;
});

console.log(sum);

// accumulator      currentValue      return
// 1                      2              3
// 3                      3              6
// 6                      4              10
// 10                     5              15


const products = [
  {productId : 1, productName : "laptop", price : 67000},
  {productId : 2, productName : "TV", price : 50000},
  {productId : 3, productName : "Mobile", price : 152000},
  {productId : 4, productName : "Tablet", price : 15000}
];

// Here we can pass Initial Value of accumulator as a sexond argument to the reduce function

const cartTotal = products.reduce((accumulator, nextProduct)=>{
  return accumulator + nextProduct.price;
}, 0);

console.log(cartTotal);