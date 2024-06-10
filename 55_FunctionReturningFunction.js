// Function Returning Function

// We can take func as a function. But can we return function from Function?
// in both the cases that function(which is accepting or returning func)
// is called as a higher order function

const helloWorld = () => {
  return () => {
    console.log("Hello World");
  };
};

const ans = helloWorld();
ans();