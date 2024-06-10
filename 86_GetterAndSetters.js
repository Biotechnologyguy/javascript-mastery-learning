// Getter and setter

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // This will be treated like a property and not a function
  get fullName() {
    return `${this.firstName}  ${this.lastName}`;
  }
  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(fullName){
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p1 = new Person("Shubham", "Thorat", 23);
console.log(p1);
console.log(p1.fullName);

const p2 = new Person();
console.log(p2);
p2.setName("Shubham", "Thorat");
console.log(p2);

p2.fullName = "Mayur Badhe";
console.log(p2);