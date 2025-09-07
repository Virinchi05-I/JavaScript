// 2. using the Object constructor or singleton object

const tinderUser = new Object()

tinderUser.name = "Tushar"
tinderUser.age = 23
tinderUser.location = "Kolkata"
tinderUser.email = "tkpathak2505@gmail.com"
tinderUser.isLoggedIn = true

// console.log(tinderUser) // empty object

const regularUser = {
    email : "lpns@gmail.com",
    fullname: {
        userfullname:{
           firstnme: "Tushar",
           lastname: "Pathak" 
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname) // object with nested objects
// console.log(regularUser.fullname?.userfullname?.lastname) // object with optional chaining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // nested objects 
// const obj3 = Object.assign({}, obj1, obj2) // merging objects

const obj3 = {...obj1, ...obj2} // using spread operator to merge objects recommended way
// console.log(obj3) // nested objects

const users =[
    {
        userId: 1,
        name: "Tushar", 
        age: 23
    },
    {
        userId: 2,
        name: "Rohit", 
        age: 25
    },
    {
        userId: 3, 
        name: "Anjali", 
        age: 22
    }

]

// console.log(users[1].age)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // returns an array of keys in the object 
// console.log(Object.values(tinderUser)) // returns an array of values in the object
// console.log(Object.entries(tinderUser)) // returns an array of key-value pairs in the object

/* 
    this is useful when you want to iterate over the keys or values of an object
    for example, you can use Object.keys() to get an array of keys and then use
    forEach to iterate over the keys and access the values
*/

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // checks if the object has a property with the given key


const course = {
    coursename: "JavaScript Basics",
    price: 999,
    courseInstructor: "Tushar",
}

const {coursename: name, price, courseInstructor: instructor} = course // destructuring the object
console.log(coursename, price, instructor) // accessing the properties using destructuring

//JSON || API

// when JSON or API is returned as a object, it is usually in the form of a string 
// {                        
//     "name": "Tushar",
//     "coursename": "JavaScript Basics",
//     "price": "free",
// }

// when JSON or API is returned as an array of objects, it is usually in the form of a string
// [
//     {},
//     {},
//     {}
// ]