const obj = {
  key1 : "Value1",
  key2 : "Value2"
};
const obj1 = {};
obj.key1 = "Value1";

// There is one more way to create EMPTY Object
const obj2 = Object.create(obj);
console.log(obj2);
// Object.create(obj) method has set obj object to the __proto__ of obj2
// So obj is stored in __proto__ of obj2
// __proto__  ===  [[prototype]] : both are same
// prototype is completely different

// in above case, if any key is not present in obj2, it will search for it in its proto

console.log(obj2.key2);

// Now lets solve our problem using this

const user = {
  about: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const createUser = (firstName, lastName, age, address) => {
  const myUser = Object.create(user);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
  return myUser;
};

const user1 = createUser("Shubham", "Thorat", 18, "Pune");
console.log(user1.about());

const user2 = createUser("Mayur", "Badhe", 23, "Hinjewadi");
console.log(user2.about());
