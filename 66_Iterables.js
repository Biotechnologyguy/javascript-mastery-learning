// Iterables
// We can iterate over it using FOR OF Loop
// String, Array are iterables

 const firstName = 'shubham';
 for (const char of firstName) {
    console.log(char);
 }

 const items = ['item1', 'item2', 'item3'];

for (const item of items) {
    console.log(item);
}

// Objects are not iterable

// Array like objects:
// Those who have length property
// And we can access them using index
// Example- String
const lastName = 'thorat';
console.log(lastName.length);
console.log(lastName[2]);