// Problem in first approach : Everytime we create an object, 
// those methods are getting created and taking memory for each object.

const userMethods = {
  about: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const createUser = (firstName, lastName, age, address) => {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

  return user;
};

const user1 = createUser("Shubham", "Thorat", 18, "Pune");
console.log(user1.about());

const user2 = createUser("Mayur", "Badhe", 23, "Hinjewadi");
console.log(user2.about());
