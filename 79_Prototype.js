// in JavaScript, function is also an Object
// ONLY Functions provide prototype Property
// Arrow Functions do not have PROTOTYPE
// PROTOTYPE is like empty object

const hello = function(){
  console.log("Hello World");
}
hello();
// We can treat function as Object as well
console.log(hello.name);

// We can add our own properties to function
hello.username = "Shubham";
console.log(hello.username);

// Function provides more useful methods(call, apply, bind)
// Function gives us FREE SPACE
// that space is {} i.e empty object. We call this object as a prototype
// If we want to add any key value pairs related to that function, we can add it in prototype
console.log(hello.prototype);

// by default if we print hello.prototype, we will get only one properties 
// i.e constructor whose value is function hello(f)

// (1) We can add key value pairs in prototype as well
hello.prototype.setUsingPrototype = "myval";
hello.prototype.setUsingPrototype2 = "myval2";

// Now we will get two more properties along with constructor
// i.e. {setUsingPrototype: 'myval', setUsingPrototype2: 'myval2', constructor: ƒ}
console.log(hello.prototype);

// Added below examples for understanding only
hello.prototype.constructor.call();

// (2) We can also add functions to prototype
hello.prototype.sing = function(){
  console.log("la la la");
}

hello.prototype.sing();

