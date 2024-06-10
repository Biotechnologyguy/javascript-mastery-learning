// Rest Parameters

const add = (...restParams) => {
  let sum = 0;
  for (let param of restParams) {
    console.log(param)
    sum = sum + Number(param);
  }
  console.log("Sum is ", sum);
};

add(1, 2, 3, 4);
// add(1, 2);
// add(1, 2, 3);
// add();
