//How to Iterate Object

const person = {
    name : 'Shubham',
    age : 23,
    gender : 'Male',
    'my hobbies' : ['Listening Music', 'Sleeping']
}
console.log(person);

//WAY 1 ===> For in Loop
for(let key in person){
    console.log(person[key]);

}

//FOR OF loop will not work
// =======> Person is not ITERABLE


//WAY 2 ===> Object.keys()
//It will return array of keys

for(let key of Object.keys(person)){
    console.log("Key is : "+key);
    console.log("Value is : "+person[key]);
    // console.log(typeof person[key]);
    // console.log(Array.isArray(person[key]));
}


