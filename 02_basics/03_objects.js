// 1. using object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Tushar",
    "full name": "Tushar Kumar Pathak",
    [mySym]: "myKey1",
    age: 23,
    location: "kolkata",
    email: "tkpathak2505@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email) // accessing properties using dot notation this is not recommended for keys with spaces
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // accessing properties using symbols


/* console.log(JsUser."full name")--> this is why we cannot use dot notation 
for keys with spaces and should use bracket notation */

JsUser.email = "tkpathak@chatgpt.ai.co"
// Object.freeze(JsUser) // this will make the object immutable, no changes can be made to it
// JsUser.email = "tkpathak@microsoft.com"

// console.log(JsUser) 

JsUser.greeting = function(){
    console.log("Hello Js User") 
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`) 
}
 

// calling the function inside the object

console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo())

console.log(JsUser.greeting) 
console.log(JsUser.greetingTwo)






