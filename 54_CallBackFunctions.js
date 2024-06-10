// Callback Functions

// Function can accept any value. Can it accept function as a param

const helloWorld = (callback)=>{
    const nameThatCameFromDBMayBe = "Shubham";
    console.log("Hello World!!!!");
    callback(nameThatCameFromDBMayBe);
}

const myFunc = (name)=>{
    console.log("This is callback Function");
    console.log("Your Name is ", name);
}

helloWorld(myFunc);