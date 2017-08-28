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

// console.log(
//   arrayDoubler([1,2,3])
// );

// console.log(
//   arrayDoubler([0,-2,45, 6.7])
// );

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

// reverseString('string');

// Exercise 4 - nth Triangular Number

// Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// 1. what is the input to the program: number
// 2. what is the output of the program: number
// 3. what is the input to each recursive calls: number
// 4. what is the output of each recursive calls: number

function triangularNumber(num) {
  // base case
  if (num === 0) {
    return num;
  }
  // recursive case
  return num + triangularNumber(num - 1);
}

console.log(
  triangularNumber(3)
);

console.log(
  triangularNumber(9)
);

console.log(
  triangularNumber(45)
);

// Exercise 5 - String Splitter

// Split a string based upon a separator (similar to String.prototype.split).

// 1. what is the input to the program: string, separator
// 2. what is the output of the program: array
// 3. what is the input to each recursive calls: string, separator
// 4. what is the output of each recursive calls: array


// indexOf
// index + seperator.length

function split(string, separator){
  let index = string.indexOf(separator);
  if(index === -1) {
    return [string];
  }

  return [ string.slice(0, index), ...split(string.slice(index + separator.length), separator) ]
}

/** 
 * first iteration
 * str = 'elias'
 * expect = ['el', 'as']
 * 
 * idx = 2
 * return ['el', ...split(string.slice(3), separator) ]
 * return [ 'el', ...split('as', separator)]
 * return ['el', split('as', 'l')]
 *
 *
 * second iteration:
 * str = 'as'
 * idx = -1
 *
 * return [as]
 *
 * ['el', 'as']
 */

console.log(
  split('8/30/2001', '/')
)


