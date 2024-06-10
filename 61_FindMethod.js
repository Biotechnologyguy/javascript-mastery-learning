// Find Method : 


const animals = ['dog', 'cat', 'pig', 'lion'];

const ans = animals.find((animal)=>{
  return animal === 'dog';
});

console.log(ans);

let users = [
  { userId: 1, firstName: "Shubham", gender: "Male", age: 23 },
  { userId: 2, firstName: "Mayur", gender: "Male", age: 23 },
  { userId: 3, firstName: "Vishal", gender: "Male", age: 23 },
  { userId: 4, firstName: "Omkar", gender: "Male", age: 23 },
];

const user = users.find(user => user.userId==3);

console.log(user);