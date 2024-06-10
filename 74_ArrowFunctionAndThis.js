// Arrow Functions DON NOT Have this
// It takes THIS from SURROUNDING
// We CANNOT change this of arrow function using call()

const user1 = {
    firstName: "shubham",
    lastName: "Thorat",
    age: 23,
    about: ()=>{
      console.log(this.firstName);
    }
  };

  user1.about();