const x = 10;
const y = "5";
const z = 7;
const text = "abc";

console.log(Number(y));
console.log(String(y));

console.log(Number(x) + Number(y));
console.log(String(x) + String(z));

const convertedText = Number(text); // NaN

console.log(Number.isNaN(convertedText));
