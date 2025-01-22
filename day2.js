//  Q =>1
// Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
  return arr.map((value) => typeof value);
}

console.log(arrayValuesTypes([1, 2, "null", []])); // / ///);   // ["number", "number", "string", "object"]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null])); // / ///);   // ["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
); // / ///);   // ["number", "string", "string", "object", "object", "boolean", "number"]

// Q => 2
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

var [head, tail] = [1, 2, 3, 4];

console.log(head); // outputs  1
console.log(tail); // outputs 2

// Q => 3
// Create a function that takes an array of two numbers and checks if the
// square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
  return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}

console.log(checkSquareAndCube([4, 8]));
//);   // true

console.log(checkSquareAndCube([16, 48]));
//);   // false

console.log(checkSquareAndCube([9, 27]));
//);   // true

// q=> 4

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(stringarray) {
  return stringarray.map(Number);
}

console.log(toNumberArray(["9.4", "4.2"])); //);   // [9.4, 4.2]

console.log(toNumberArray(["91", "44"])); //);   // [91, 44]

console.log(toNumberArray(["9.5", "8.8"])); //);   // [9.5, 8.8]

// Q=> 5
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used.
// Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(result) {
  return Object.keys(result).length;
}

console.log(totalAmountAdjectives({ a: "moron" })); // 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); // 3
console.log(
  totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })
); // 4
