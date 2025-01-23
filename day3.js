// q=> 1
// You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"];
let [eyes, nose, lips, ears] = arr;

console.log(eyes);
console.log(nose);
console.log(lips);
console.log(ears);

// q=> 2

function length(str) {
  return str.length;
}

console.log(length("Hello World")); ///);/ //➞ 11

console.log(length("Edabit")); ///);/ //➞ 6

console.log(length("wash your hands!")); ///);/ //➞ 16

//  q=> 3

// Yeh function banane ke liye hum ek simple
// JavaScript function likhte hain jo input number ka aadha,
// chautha hissa aur aathva hissa return karega. Code niche diya gaya hai:

function halfQuarterEighth(arr) {
  return [arr / 2, arr / 4, arr / 8];
}

console.log(halfQuarterEighth(6)); //➞ [3, 1.5, 0.75]
console.log(halfQuarterEighth(22)); //➞ [11, 5.5, 2.75]
console.log(halfQuarterEighth(25)); //➞ [12.5, 6.25, 3.125]

//  q=> 4

// Create a function that takes a whole number as input and returns the shape with that
// number's amount of sides. Here are the expected outputs to get from these inputs.

function nsideShape(sides) {
  switch (sides) {
    case 1:
      return "circle";
    case 2:
      return "semi-circle";
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    case 9:
      return "nonagon";
    case 10:
      return "decagon";
    default:
      return "Shape not defined for this number of side";
  }
}

console.log(nsideShape(3)); // triangle
console.log(nsideShape(1)); // circle
console.log(nsideShape(9)); // nonagon
console.log(nsideShape(12)); //Shape not defined for this number of side

// q => 5

// Create a function that takes an array with numbers
//  and return an array with the elements multiplied by two.

function getMultipliedArr(arr) {
  return arr.map((num) => num * 2);
}

console.log(getMultipliedArr([2, 5, 3])); //➞ [4, 10, 6]
console.log(getMultipliedArr([1, 86, -5])); //➞ [2, 172, -10]
console.log(getMultipliedArr([5, 382, 0])); //➞ [10, 764, 0]
