// Objects inside array : 
// Very USeful in realworld Applications

const users = [
    {userId : "Shubham", gender:"Male"},
    {userId : "Mayur", gender:"Male"},
    {userId : "Vishal", gender:"Male"},
]

const [user1, user2, user3] = users;
console.log(user1);

const [{userId}, , {gender: user3Gender}] = users;
console.log(userId + "   ---  "+user3Gender);
