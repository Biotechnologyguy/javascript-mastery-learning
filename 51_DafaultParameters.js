// Default Parameters

const add = (num1 = 0, num2=0) => {
    console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`)
};

add(1,5);
add(5);
add();