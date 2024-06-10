//Objects ===>Reference Type
//Arrays are good but not sufficient for real world data
//Objects stores key value pairs
//Don't have index

// How to create objects
const obj1 = {}; //Also called as object literal ===> {}

const person = {
    name : 'Shubham',
    age : 23,
    gender : 'Male',
    hobbies : ['Listening Music', 'Sleeping']
}
console.log(person);

// How to access data from objects
console.log("Person Name : ", person.name);
console.log("Person Age : ", person.age);
console.log("Person Hobbies : ", person.hobbies);



//How to add key value pair to Object
person.nickname = "Biotechnologyguy";

console.log(person);

