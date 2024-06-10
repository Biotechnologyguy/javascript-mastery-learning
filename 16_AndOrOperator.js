//AND OR Operator

let age = 17;
let firstName = "Bruce";

if (firstName[0] === "B" && age >= 18) {
    console.log("Your name starts with B and you are above 18");
}else{
    console.log("Your name Doesn't starts with B and you are below 18");
}

if (firstName[0] === "B" || age >= 18) {
    console.log("Inside if");
}else{
    console.log("Inside Else");
}