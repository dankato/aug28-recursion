// Exercise 1 - Counting Sheep
// 1. what is the input to the program: number
// 2. what is the output of the program: string
// 3. what is the input to each recursive calls: number
// 4. what is the output of each recursive calls: string

function countSheep(num) {
	// base case
	if(num === 0) {
		return console.log('no more sheep');
	}
	// recursion case
	console.log('another sheep jumps over the fence ' + num)
	let newNum = num - 1;
	countSheep(newNum);
}

// countSheep(3);

// Exercise 2 - Array Double

// Write a program that takes an array as input which contains an unknown set of numbers, and output an array which doubles the values of each item in that array. Test your solution by trying a handful of different arrays.

// 1. what is the input to the program: array
// 2. what is the output of the program: array
// 3. what is the input to each recursive calls: array
// 4. what is the output of each recursive calls: array

function arrayDoubler(arr) {
  // base case
  if (!arr.length) {
    return [];
  }

  // recursive case
  const doubledValue = arr[0] * 2;

  return [doubledValue, ...arrayDoubler(arr.slice(1))];
}

console.log(
  arrayDoubler([1,2,3])
);

console.log(
  arrayDoubler([0,-2,45, 6.7])
);

// Exercise 3 - Reverse String

// Write a program that reverses a string. Take a string as input, reverse the string, and return the new string.

// 1. what is the input to the program: string
// 2. what is the output of the program: string
// 3. what is the input to each recursive calls: string
// 4. what is the output of each recursive calls: string

function reverseString(string) {
  // base case
  if(string === "") {
    return "";
  }
  // recursion case
  return string.slice(-1) + reverseString(string.split(string.slice(-1))[0]);
}

reverseString('string');


// Exercise 4 - nth Triangular Number

// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// 1. what is the input to the program: 
// 2. what is the output of the program: 
// 3. what is the input to each recursive calls: 
// 4. what is the output of each recursive calls: 

