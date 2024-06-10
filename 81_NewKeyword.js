// This is called as constructor function
// By convension we write its first letter CAPITAL 

const CreateUser = function (firstName, lastName, age, address)  {
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
  
//   Following things are taken care by NEW keyword:
// (1) creates empty object and assign it to THIS (this = {})
// (2) returns THIS object
// (3) Sets proto of THIS to that function's prototype ()