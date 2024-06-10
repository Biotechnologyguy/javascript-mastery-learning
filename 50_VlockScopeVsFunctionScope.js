// Block scope vs function scopw
// Let and const are block scoped
// Var is function scoped

// Below is allowed with Var but not const and let
{
    var firstName = "Shubham";
}
console.log(firstName);