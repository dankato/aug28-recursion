// Counting Sheep
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


countSheep(3);







// Array Double
// 1. what is the input to the program
// 2. what is the output of the program
// 3. what is the input to each recursive calls
// 4. what is the output of each recursive calls