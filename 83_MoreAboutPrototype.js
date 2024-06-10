// We can create array like

// 1) way 1

const arr = [1, 2, 3, 4, 5];
arr.flatMap; //we get so many methtods like this with array

// 2) Way 2 ==> This is what happens internally
const arr2 = new Array(1,2,3,4,5,6,7);
console.log(arr2);

console.log(Object.getPrototypeOf(arr));
// prototype of ARRAY is array [] with all the fields in it



