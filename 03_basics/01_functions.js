// function

function sayMyName(){
    console.log("T")
    console.log("U")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("R")    
}

/*  sayMyName --> Reference
    sayMyName() --> Invocation/Execution 
*/

//sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 +  num2)
// }

function addTwoNumbers(num1, num2){
    
    // let sum = num1 + num2
    // return sum

    return num1 + num2
}

// const result = addTwoNumbers(10, 20) 
// console.log(result) // undefined

function loginUserMessage(username){
    if(!username){
        console.log("Please provide a username")
        return      
    }
    return `${username} just Logged in`
}

// const message = loginUserMessage("Tushar")
// console.log(message) // Tushar just Logged in

// console.log(loginUserMessage()) 
/*
    "undefined" just Logged in because this function is expecting a parameter
    but we are not passing any argument
    so it is taking the default value of "undefined"
    to avoid this we can set a default value for the parameter  
*/

function calculateCartPrice(...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = { 
    username: "Tushar",
    price: 1000,
}
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }

// handleObject(user)
// handleObject({
//     username: "Tushar",
//     price: 1000,
//  })