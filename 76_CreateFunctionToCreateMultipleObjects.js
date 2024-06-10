// Function that takes user details and returns user object

const createUser = (firstName, lastName, age, address)=>{
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.about = function(){
      return `${this.firstName} ${this.lastName} is ${age} years old.`;
    };
    user.is18 = function(){
      return this.age>=18;
    }
    return user;
}

const user1 = createUser("Shubham", "Thorat", 18, "Pune");
console.log(user1.about());

const user2 = createUser("Mayur", "Badhe", 23, "Hinjewadi");
console.log(user2.about());