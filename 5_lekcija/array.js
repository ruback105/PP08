// 0 - apple, 1 - orange, 2 - cherry
const fruits = ["apple", "orange", "cherry"];

console.log(fruits);
console.log(fruits.length);
console.log(Array.isArray(fruits));

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "banana";

console.log(fruits);

console.log("------------");
fruits.push("raspberries");
console.log(fruits);

const poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

console.log("------------");
fruits.unshift("blackberries");
console.log(fruits);

const shiftedFruit = fruits.shift();
console.log(fruits);
