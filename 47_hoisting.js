// Hoisting

// if we are using FUNCTION DECLARATION, we can call function before declaring it
hello();

function hello(){
    console.log("Hello");
}

// Please UNCOMMENT below function calls to see what error we get

// helloUsingFunctionExpression();//Cannot access 'helloUsingFunctionExpression' before initialization

const helloUsingFunctionExpression = function (){
    console.log("Hello World!!");
}


// helloUsingArrowFunction();//Cannot access 'helloUsingArrowFunction' before initialization

const helloUsingArrowFunction = ()=>{
    console.log("Hello World"); 
}



// LETS CHECK FOR VARIABLES
console.log(hello3);//undefined
var hello3 = "Hello33";

// console.log(hello1);//Cannot access 'hello1' before initialization
let hello1 = "Hello2";

// console.log(hello2);//Uncaught ReferenceError: Cannot access 'hello2' before initialization
const hello2 = "Hello2";


