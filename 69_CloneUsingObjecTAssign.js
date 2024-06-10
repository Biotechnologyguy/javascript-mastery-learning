// Clone using Object.assign

const obj = {
  key1: "value1",
  key2: "value2",
};

// (1) Using Spread Operator
const newObj = { ...obj };

console.log(newObj);

console.log("object");

// (2) Using Object.assign() : OLD Way
const thirdObj = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(thirdObj);
