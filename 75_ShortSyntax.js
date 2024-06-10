const user1 = {
  firstName: "shubham",
  lastName: "Thorat",
  age: 23,
  about(){
    console.log(this.firstName);
  }
};

user1.about();