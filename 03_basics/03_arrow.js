const user = {
    username: "tushar",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
        
    }
}

// user.WelcomeMessage(); 

// user.username = "sam"
// user.WelcomeMessage()

// console.log(this) 
/* this refers to the global object in non-strict mode 
 this will give empty object in strict mode it will give undefined */

// function chai(){
//     let username = "tushar"
//     console.log(this.username) // undefined in strict mode, global object in non-strict mode 
// }

// chai()

const chai =  () => {
    let username = "tushar"
    console.log(this)
}

// chai()

// const addTwoNumber = (num1, num2) => { // this is the standard way to write arrow function
//     return num1 + num2
// }

/*
    this is a shorter way to write arrow function called implicit return
    it will return the value without using return keyword use this when you have only one expression
    
    when you use curly braces it will not return the value automatically
    if you want to return the value you have to use return keyword
*/

const addTwoNumber = (num1, num2) => num1 + num2

// console.log(addTwoNumber(2, 3)) 

// const User = () => {username: "tushar"} // this will give syntax error because it is not returning an object
const User = () => ({username: "tushar"})  //to return object type we have to use parenthesis around the object
console.log(User()) 

