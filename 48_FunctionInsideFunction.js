// Function inside function

const app = () => {
    const myFunc = () =>{
        console.log("Inside myFunc");
    }

    const addTwo = (num1, num2) => {
        console.log(`Addition of ${num1} and ${num2} is ${num1*num2}`);
    }

    const mul = (num1, num2)=>{
        console.log(`Multiplication of ${num1} and ${num2} is ${num1*num2}`);
    }

    console.log("Inside app")
    myFunc();
    addTwo(15,5);
    mul(13,15);
};

app();