// Lexical Scope 
// lexical envt = the place where function is declared
// if the variable in not present in the function where 
// it is being used, js will search for it in the lexical envt
// if not present there as well,it will go further in lexical envt 

function app() {
  const myVar = "value1";
  function myFunc() {
    const myVar = "value59";
    console.log("Inside MyFunc", myVar);
  }
  const myFunc2 = function () {};
  const myFunc3 = () => {};


  console.log(myVar);
  myFunc();
}

app();
