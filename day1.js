// Question => 1

function getLastItem(array) {
  return array[array.length - 1];
}

console.log(getLastItem([1, 2, 3])); // // // //                      //➞ 3

console.log(getLastItem(["cat", "dog", "duck"])); // // // //                      //➞ "duck"

console.log(getLastItem([true, false, true])); // // // //                      //➞ true

// Question => 2
// Less Than, Greater Than

function arrBetween(num1, num2, arr) {
  return arr.filter((number) => number > num1 && number < num2);
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); // // //                      //➞ [5, 4, 7]

console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); // // //                      //➞ [8, 6]

console.log(arrBetween(7, 32, [1, 2, 3, 78])); // // //                      //➞ []);

// Question => 3
// The 50-30-20 strategy is a simple way to budget, which involves spending 50%
// of after-tax income on needs, 30% after tax
// income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed
// to do is to make a function that will return an object
// that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati) {
  return {
    needs: ati * 0.5,
    wants: ati * 0.3,
    Saving: ati * 0.2,
  };
}

console.log(fiftyThirtyTwenty(10000)); // //                      //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)); // //                      //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)); // //                      //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// Question => 4
// Given two arrays, which represent two sandwiches, return whether both sandwiches use
// the same type of bread. The bread will always be found at the start and end of the array.

function hasSameBread(sandwiches1, sandwiches2) {
  return (
    sandwiches1[0] === sandwiches2[0] &&
    sandwiches1[sandwiches1.length - 1] === sandwiches2[sandwiches2.length - 1]
  );
}

console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  )
); //                      //➞ true
console.log(
  hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  )
); //                      //➞ false
console.log(
  hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
); //                      //➞ false

// Question => 5
// Create a function that takes an array of integers and strings.
// Convert integers to strings and return the new array.

function parseArray(arr) {
  return arr.map((item) => item.toString());
}
console.log(parseArray([1, 2, "a", "b"])); //➞ ["1", "2", "a", "b"]

console.log(parseArray(["abc", 123, "def", 456])); //➞ ["abc", "123", "def", "456"]

console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"])); //➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
parseArray([]); //➞ []

