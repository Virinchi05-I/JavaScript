// ******************** Conversion ********************

// let score = 33
// let score = "33"

// let score = "33abc" 
/*  sometimes js will convert this string into number but still this is not a number type as this it also contain abc
    and thus when we print, it will show NaN(not a number) but if its typeof is printed it will show number i.e it will be
    converted into a number and its typeof will be considered as number, have to be careful */    

//let score = null
/* 
    null will be converted to 0 
*/

//let score = undefined
//let score = true
// let score = "Tushar"

// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/* 
    "33" => 33
    "33abc" => NaN
    true/false => 1/0
    undefined => NaN
    null => 0
*/

// let isLoggedIn = 1 // output => true
// let isLoggedIn = "" // output => false so if the value of isLoggedIn is an empty string this will 
                       // confirm that no use is logged in the system

// let isLoggedIn = "Tushar" // output => true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let num = 33

let strNum = String(num)

// console.log(typeof strNum)
// console.log(strNum)

// ********************* Operations ********************

let value = 3

let negValue = -value
//console.log(negValue)

let str1 = "Hello"
let str2 = " Tushar"
//console.log(str1 + str2)

// console.log("1" + 2)
// console.log(1 + "2")

// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

/*
console.log(typeof ("1" + 2 + 2)) => string
console.log(typeof (1 + 2 + "2")) => string
"1" + 2 + 2 => "12" + 2           => "122"
1 + 2 + "2" => 3 + "2"            => "32"
*/

let gameCounter = 0
++gameCounter // preIncrement
gameCounter++ // postIncrement
// console.log(gameCounter)



