const CreateUser = function (firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
};

CreateUser.prototype.about = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = new CreateUser("Shubham", "Thorat", 18, "Pune");
console.log(user1.about());

const user2 = new CreateUser("Mayur", "Badhe", 23, "Hinjewadi");
console.log(user2.about());

for (const key in user1) {
  console.log(key);
  // Above keys from __proto__ will also be printed
  // To avoid, we can use hasOwnProperty method
  if(user1.hasOwnProperty(key)){
    console.log(key);
  }

}
