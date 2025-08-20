const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // This will add the entire dc_heros array as a single element to marvel_heros
// console.log(marvel_heros) // Output: ["thor", "ironman", "spiderman", ["superman", "flash", "batman"]]

// const allHeros = marvel_heros.concat(dc_heros) // This will concatenate the dc_heros array to marvel_heros
// console.log(allHeros) // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

const all_new_Heros = [...marvel_heros, ...dc_heros] // This will spread both arrays into a new array
// console.log(all_new_Heros) // Output: ["thor", "ironman", "spiderman", "superman", "flash", "batman"] 

//                                    /\
//                                    ||
//                                    ||
/*
    this is a more modern and preferred way to combine arrays in JavaScript.
    It creates a new array that contains all elements from both arrays without nesting.
    The spread operator (...) is used to unpack the elements of both arrays into a new array.
    this method is more readable and avoids the potential confusion of nested arrays.
    this can also combine more than two arrays easily.
    The spread operator is widely supported in modern JavaScript environments.
    It is a cleaner and more efficient way to merge arrays compared to using concat or push.
    It is also useful for creating shallow copies of arrays or merging multiple arrays together.
    The spread operator can also be used with other data structures like objects.
*/

const Arr = [1, 2, 3,[4, 5, 6], 7, [8, 9, [10, 11, 12]]]
// console.log(Arr.flat()) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]] 
// console.log(Arr.flat(2)) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(Arr.flat(Infinity)) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]   

// console.log(Array.isArray("Tushar"))
// console.log(Array.from("Tushar")) // Output: ["T", "u", "s", "h", "a", "r"]

// console.log(Array.from({name: "Tushar"})) 
/*  this will return an empty array because the 
    object does not have iterable properties
    this is often asked in interviews             
    to check if the object is iterable or not
    Array.from() is used to create an array from an iterable or array-like object.
*/

let score1 = 100
let score2 = 200
let score3 = 300
const scores = Array.of(score1, score2, score3) 
console.log(scores) // Output: [100, 200, 300]
