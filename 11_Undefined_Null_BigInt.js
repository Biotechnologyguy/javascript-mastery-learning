//Undefined
// variable is created but no value is assigned
let firstName ;
console.log(typeof(firstName), firstName); //undefined

firstName = "Peter";
console.log(typeof(firstName), firstName); //String


// null
let lastName = null;
console.log(typeof lastName, null);
//its a bug, error in javascript that typeof null is object.

//BigInt

let myNumber = BigInt(123);
let sameMyNumber = 12n;

console.log(typeof myNumber);
console.log(typeof sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER);

console.log(myNumber+sameMyNumber);