// call(), apply(), bind()

// (1) call() :
// By using call() method, we can pass whatever value we want to pass to method as THIS

const user1 = {
  firstName: "shubham",
  lastName: "Thorat",
  age: 23,
  about: function (hobby, favMusician) {
    console.log(
      `User's name is ${this.firstName} ${this.lastName}, age is ${this.age}, hobby is ${hobby} and fav Musician is ${favMusician}`
    );
  }
};
const user2 = {
  firstName: "Mayur",
  lastName: "Badhe",
  age: 22,
};

user1.about("Coding", "Taylor Swift");

// We have to use call() method to borrow about method of user1
// First argument to the call() method is "THIS"
user1.about.call(user2, "Biking", "The Chainsmokers");


// (2) apply() :
// internally uses call() method
// pass the method args as an array
user1.about.apply(user2, ["apply USer", "apply Singer"]);

// (3) bind() : 
// Returns the function that we can call later

const func = user1.about.bind(user2, "Swimming", "Selena Gomez");
func();