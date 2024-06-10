// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 23;
let guess = +prompt("Guess a Number");

if(guess === winningNumber){
    console.log("Your Guess is correct!!!")
}else{
    if (guess > winningNumber) {
        console.log("Too high");
    }else{
        console.log("Too Low");
    }
}


