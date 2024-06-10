// Parameter Destructuring
// Object
// React

const person = {
  name: "Shubham",
  age: 22,
  gender: "male",
};

// I think we can make use of it while we pass props to component. We can pass them as Object
const printUser = ({ name, age, gender, keyNotPresent }) => {
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(keyNotPresent);
};

printUser(person);