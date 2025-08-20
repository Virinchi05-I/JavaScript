const score = 400
// console.log(score);

const balance = new Number(1000); // using Number object it have several methods 
// console.log(balance);

// console.log(balance.toString()); // convert to string
// console.log(balance.toFixed(2)); // format to 2 decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // format to 4 significant digits

const hundred = 1000000

// console.log(hundred.toLocaleString()); // format to locale string (e.g., "1,000,000")
// console.log(hundred.toLocaleString('en-IN')); // format to India locale

// ++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6)) // rounds to nearest integer;
// console.log(Math.ceil(4.2)) // rounds up to the nearest integer
// console.log(Math.floor(4.9)) // rounds down to the nearest integer;
// console.log(Math.min(4, 2, 8, 6)) // returns the minimum value
// console.log(Math.max(4, 2, 8, 6)) // returns the maximum value

// console.log(Math.random()) // returns a random number between 0 and 1;
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);





