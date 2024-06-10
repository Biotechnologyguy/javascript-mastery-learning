//Difference between Dot and Bracket notation

const person = {
    name : 'Shubham',
    age : 23,
    gender : 'Male',
    'my hobbies' : ['Listening Music', 'Sleeping']
}

console.log(person);


// How to get person Hobbies?
// We cant use dot notation here
console.log("My Hobbies are : ",person["my hobbies"]);



//What if we have key stored in VARIABLE?
// We cant use dot notation here
let key1 = "name";

console.log("Person name using Key1 variable : "+ person[key1]);