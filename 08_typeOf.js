//typeof operator

//Datatypes(primitive data types) : 
//string "shubham"
//number 2,3,6,8
// Boolean
//undefined
// null
//BigInt
//symbol

let age = 22;
let firstName = "Shubham";
console.log(typeof(age));
console.log(typeof(firstName));


//convert number to string.

//way 1
age = age + "";
console.log(typeof(age));

//way 2
age = age.toString();
console.log(typeof(age));

//way 3
age = String(age);
console.log(typeof(age));


//convert string to number.
//way 1
//add + sign before string
age = +age;
console.log(typeof(age));

//way 2
age = Number(age);
console.log(typeof(age));