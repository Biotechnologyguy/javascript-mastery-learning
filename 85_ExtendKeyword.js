class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`;
  }

  isSuperCute(){
    return this.age <=1;
  }

  isCute(){
    return true;
  }
}

class Cat extends Animal{
  constructor(name, age, sound){
    super(name, age);
    this.sound = sound;
  }

  // We can override methods
  isSuperCute(){
    return true;
  }
}

const animal1 = new Cat("Maau", 2, "Meow");

console.log(animal1);
console.log(animal1.isCute());
console.log(animal1.isSuperCute());
console.log(animal1.eat());

