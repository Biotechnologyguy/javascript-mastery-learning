// Optional Chaining
// We get undefined instead of ERROR
// Useful when we have nested objects

const user = {
  firstName : "Shubham",
  lastName : "Thorat",
  address : {
    houseNumber :11
  }
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);