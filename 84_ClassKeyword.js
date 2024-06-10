//2015/ES6
// Class Keyword
// Javascript classes are fake, internally it happens in previous example way only

class User {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
}

const user1 = new User("Shubham", "Thorat", 23, "Pune");
console.log(user1);
console.log(user1.about());

console.log(Object.getPrototypeOf(user1))