//Spread Operator
//array, string, object etc

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, 9, 0];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
// const arr3 = [...arr1, arr2]; //this will not spread the second array.
// Second array will come as it is as single element

const string1 = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = [...string1];
console.log(alphabetArray);

//Number is not iterable
const mynum = 1234567890;
// const numArray = [...mynum];

//Objects
const myObj1 = {
  key1: 'value1',
  key2: 'value2',
};
  
const myObj2 = {
  key3: 'value3',
  key4: 'value4',
  key1: 'Overriden value'  

};

const myObj3 = {
  ...myObj1,
  ...myObj2
}

console.log(myObj3);

// when we want to store the values in variable with same name as key name
const {key1, key4} = myObj3;
console.log("After destructuring  ", key1, key4)

//When we want to store the values but we dont want their name same as the key name.
// We can 