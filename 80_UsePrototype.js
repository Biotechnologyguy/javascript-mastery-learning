  const createUser = function (firstName, lastName, age, address)  {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    return user;
  };

  createUser.prototype.about = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  };
  createUser.prototype.is18 = function () {
    return this.age >= 18;
  };
  
  const user1 = createUser("Shubham", "Thorat", 18, "Pune");
  console.log(user1.about());
  
  const user2 = createUser("Mayur", "Badhe", 23, "Hinjewadi");
  console.log(user2.about());
  