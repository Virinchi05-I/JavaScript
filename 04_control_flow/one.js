// if

// const score = 200

// if (score > 100) {
//     // const power = "fly"
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)
/*
    when we use var power has a global scope 
    when we use let and const power has a block scope
*/

//multiple if statements

// const balance = 1000

// // if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("Low balance")
// }else if (balance < 750) {
//     console.log("Balance is ok")
// }else if (balance < 900) {
//     console.log("Balance is high")
// }else {
//     console.log("Balance is very high")
// }


//multiple conditions

// const userLoggedIn = true
// const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("allow to buy courses");
// }

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}    

