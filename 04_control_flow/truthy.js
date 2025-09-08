// const userEmail = "tkpatha@tp.co" // it is a truthy value
// const userEmail = "" // it is a falsy value
const userEmail = [] // it is a truthy value

// if (userEmail) {
//   console.log("User email is set.");
// }
// else {
//   console.log("User email is not set.");
// }

// if (userEmail.length === 0) { // to check if an array is empty or not 
//     console.log("Array is empty")
// }

const emptyObj = {} // it is a truthy value an empty obj

// if (Object.keys(emptyObj).length === 0) { // to check if an object is empty or not 
//   console.log("Empty object is truthy.");
// }

// Nullish Coalescing Operator (??): null undefined 
// nullish coalescing operator is used to assign a default value to a variable if it is null or undefined

let val1
// val1 = 5 ?? 10 
// val1 = null ?? 10
val1 = undefined ?? 15

// console.log(val1)

// Terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



/*
    Falsy Values:              
        false,
        0,
        -0,
        Big Int 0n,
        "", // empty string
        null,
        undefined,
        NaN // Not a Number

        truthy Values:
        "0", // string with 0
        "false", // string with false
        " ", // string with space
        [], // empty array
        {}, // empty object
        function(){} // empty function
        Symbol() // empty symbol
*/