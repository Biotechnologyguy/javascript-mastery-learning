//How to clone array
//How to concat two array

let array1 = ["item1", "item2"];
let array2 = array1;

//to create array2 in such a way that if i change array1, array2 should not change

// way 1(slice() method) ====> FASTEST method

let array3 = array1.slice(0);

console.log("array1 : ", array1);
console.log("array3 : ", array3);
array1.push("item3");
console.log("After adding item3 to array1");
console.log("array1 : ", array1);
console.log("array3 : ", array3);


//Way 2 (concat() Method)

let array4 = [].concat(array1);

console.log("array1 : ", array1);
console.log("array4 : ", array4);
array1.push("item4");
console.log("After adding item4 to array1");
console.log("array1 : ", array1);
console.log("array4 : ", array4);


//Way 3 (Spread Operator) ===> MOSTLY USED

let array5 = [...array1];

console.log("array1 : ", array1);
console.log("array4 : ", array5);
array1.push("item5");
console.log("After adding item5 to array1");
console.log("array1 : ", array1);
console.log("array5 : ", array5);


//Add all elements of array1 in array6 and some additional elements then

let array6 = [...array1, "item6", "item7"];

console.log("array1 : ", array1);
console.log("array6 : ", array6);

// or
let array7 = array6.concat("item8");
console.log("array6 : ", array6);
console.log("array7 : ", array7);