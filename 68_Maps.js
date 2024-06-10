// Maps : ITERABLE

// Stores data in ordered fashion

// Store key-value pair like objects
// Duplicate keys are not allowed like objects

// Difference between Maps and Objects
// Objects can only have String or Symbol as a key


// In Maps we can use anything as a key like Number, array, String


const person = new Map();
person.set('firstName', 'shubham');
person.set('age', 23);
person.set('hobby', 'BGMI');
console.log(person);

// How to access values of Map
console.log(person.get('age'));

for (const key of person.keys()) {
  console.log(key);
}

// As map is iterable, we can use FOR OF Loop
for (const element of person) {
  console.log(element);
} 
// Above returns array of [key, value]
// We can destructure the same

for (const [key, value] of person) {
  console.log(key, value);
}

const newMap = new Map([['firstName', 'Shubham' ], ['lastName', 'thorat']]);
console.log(newMap);
console.log(person);

const person1 = {
  id:1,
  firstName : 'Shubham'
}
console.log(person1);

// we can store additional info about this person in map

const person1Map = new Map();
person1Map.set(person1, {'age':23, 'gender' : 'male'});
console.log(person1Map);

console.log(person1Map.get(person1));
console.log(person1Map.get(person1).age);
