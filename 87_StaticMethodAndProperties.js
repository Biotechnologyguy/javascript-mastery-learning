// Static method and properties

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static drive (){
    console.log("I am driving");
  }
}

const p1 = new Person("Shubham", "Thorat", 23);
console.log(p1);

Person.drive();