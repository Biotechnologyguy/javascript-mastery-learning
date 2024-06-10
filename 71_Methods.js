// Methods 
// Functions inside Object

const person ={
  firstName : "Shubham",
  lastName : "Thorat",
  age :23,
  // about : ()=>{
  //   console.log(`Person name is ${person.firstName} ${person.lastName} and age is ${person.age}`);
  // }
  // this keyword will not work with Arrow Functions
  about : function(){
    console.log(`Person name is ${this.firstName} ${this.lastName} and age is ${this.age}`);
  }
}

person.about();

// We called about function with person object so inside that function, value of this will contain this object
