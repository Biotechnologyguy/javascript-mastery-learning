// sort method
// ASCII TABLE
//char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

// Sort :

// sort method MUTATES Originalm array

const numbers = [45, 1, 32, 71, 3, 9, 11];
console.log(numbers);

numbers.sort();
// in above case, it is sorting them by considering them as a STRING
console.log(numbers);

const userNames = ["shubham", "mayur", "sumeet", "deadshot"];
console.log(userNames);

userNames.sort();
console.log(userNames);

// Now lets sort numbers
// if callback fn returns :
// +ve == second number comes first
// -ve == first number comes first
// 0   == Both numbers are equal

numbers.sort((num1, num2) => {
  return num2 - num1;
});

console.log(numbers);


const products = [
  {productId : 1, productName : "laptop", price : 67000},
  {productId : 2, productName : "TV", price : 50000},
  {productId : 3, productName : "Mobile", price : 152000},
  {productId : 4, productName : "Tablet", price : 15000}
];

// prive Low to high
products.sort((p1, p2)=>{
  return p1.price - p2.price;
});
console.log(products);

// price high to low
products.sort((p1, p2)=> p2.price - p1.price);
console.log(products);

// we can clone array if we dont want to modify original array

