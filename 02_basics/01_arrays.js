// array 

const myArr = [1, 2, 3, 4, 5,]
const myArr2 = new Array(1 ,2, 3, 4 ,5)

// console.log(myArr[4])

// Array methods

// myArr.push(6) // adds an element to the end
// myArr.push(7)
// myArr.pop() // removes the last element

// myArr.unshift(-1) // adds an element to the beginning
// console.log(myArr)

// myArr.shift() // removes the first element
// console.log(myArr)

// console.log(myArr.includes(9)) // checks if the array includes an element
// console.log(myArr.indexOf(2)) // returns the index of the element

const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

// slice splice 

// console.log("Original Array ", myArr)

// const myn1 = myArr.slice(1, 3) // returns a new array with elements from index 1 to 2 upperIndex is not taken 

// console.log("Original Array ", myArr) 
// console.log("sliced Array ",myn1)

// const myn2 = myArr.splice(1, 3)

// console.log("Original Array ", myArr) 
// console.log("Spliced Array ", myn2)

myArr.map((element, index) => {
    myArr[index] = element * 2
})

console.log(myArr);

myArr.forEach((element, index) => {
    console.log(`Element: ${element} and Index: ${index}`);
})









