console.log("Happy Birthday To you");

const sayHappyBirthday = () => {
  console.log("Happy Birthday To you");
};

sayHappyBirthday();
sayHappyBirthday();

// Create a function which will add 5 and 2
const addFiveAndTwo = () => {
  console.log("Sum of 5 and 2 is : " + (5 + 2));
};

addFiveAndTwo();

// But if I want to again add two numbers, lets create generic function

const addTwoNum = (num1, num2) => {
  console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
};

addTwoNum(4, 11);
addTwoNum(55, 11);
addTwoNum();

const addThreeNum = (num1, num2, num3) => {
  console.log(`Sum of ${num1}, ${num2} and ${num3} is ${num1 + num2 + num3}`);
};
addThreeNum(2, 66, 33);

//odd or even

const isEven = (num) => {
  const even = num % 2 === 0;
  console.log(num + " is " + even);
  return even;
};

isEven(1);
isEven(2);
isEven(3);

// takes input as string and returns its first char

const getFirstChar = (str) => {
  console.log(str[0]);
};

getFirstChar("Shubham");
getFirstChar("Mayur");
getFirstChar("Vishal");

// takes input as array and target number. returns index at which target number is present else return -1

const isPresentAt = (arr, target) => {
  for (const index in arr) {
    if (arr[index] === target) {
      console.log(`${target} is found at index 4{index} in given array`);
      return;
    }
  }
  console.log(`${target} is not found in given array`);
};

const array = [1, 2, 3, 4, 5, 77, 22, 33, 44, 5];
isPresentAt(array, 22);
isPresentAt(array, 11);
isPresentAt(array, 4);
isPresentAt(array, 43);


// This is how you can reduce syntax for the arrow function
const isEven3 = num => console.log(` ${num} is even = ${num%2===0}`);

isEven3(15)