//trim()
//toUpperCase()
//toLowerCase()
//slice

let firstName = "        Shubham        ";

console.log(firstName);
console.log(firstName.length);

//trim()
let newName = firstName.trim();
console.log(newName);
console.log(newName.length);

//toUpperCase()
let upperCaseName = newName.toUpperCase();
console.log(upperCaseName);

//toLowerCase()
let lowerCaseName = upperCaseName.toLowerCase();
console.log(lowerCaseName);

//slice(startIndex, endIndex)
let trimmedName = newName.slice(0,4);

console.log(trimmedName);
// endIndex is excluded
//if only one argument is provided, second is considered as last index
console.log(newName.slice(0));