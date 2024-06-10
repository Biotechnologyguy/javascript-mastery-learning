// Sets : ITERABLE
// Stores data
// has its own methods as well
// No index-based access
// order is not guarenteed
// Unique Items only : No Duplicates allowed

const numbers = new Set([1, 2, 3, 1]);
numbers.add(7);
numbers.add(9);
const items = ["item1", "item2", "item3"];
numbers.add(items);
// This array will not be added more than once
numbers.add(items);

// but when we create an array, it will be added twice
// Because, address of these two arrays is different
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);
console.log(numbers);

console.log(numbers.has(1));
console.log(numbers.has(items));

numbers.forEach((number) => console.log(number));

// Sets are iterable, lets apply for of loop
for (const number of numbers) {
  console.log(number);
}

const myArray = [1,3,5,6,2,3,3,5,6];

const mySet = new Set([...myArray]);
console.log(mySet);

console.log(mySet.size);