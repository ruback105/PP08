const trueBoolean = true; // 1
const falseBoolean = false; // 0

console.log(trueBoolean + falseBoolean);

console.log(typeof trueBoolean);

console.log(Number(trueBoolean));
console.log(Number(falseBoolean));

console.log("------------");

console.log("False boolean:");
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));

console.log("True boolean:");
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("T"));
console.log(Boolean("1" + 1));

console.log("------------");

let test;

console.log(test);

test = null;

console.log(test);
