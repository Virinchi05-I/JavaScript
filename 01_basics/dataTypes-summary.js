/*
    Primitive:
    String, Number, boolean, undefined, null, Symbol, BigInt
    
    Refernce(Non-Primitive):
    Object, Array, Function, Date, RegExp, Map, Set, WeakMap,
    WeakSet, Error, Promise, etc.

*/

const score = 100;
const scoreValue = 100.3

const isPassed = false
const outsideTemp = null
/*
Note :- if you want to find the data type of a null type variable, it will return 'object' as its 
        data type. 
        This is a bug in JavaScript and has been there since the beginning.
        So, always check for null explicitly.
*/ 

let userName;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid); // false, symbols are unique

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt


// Arrays, Objects, Functions

const heros = ["shaktimaan", "nagraj", "doga"]

let Myobj = {
    name: " Tushar",
    age: 23,
    isActive: true,
} 

const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof id); 
// console.log(typeof heros); 

/*
    1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
    (Stack => Primitive data types are stored in the stack memory)
    (Heap => Non-primitive data types are stored in the heap memory)

*/

let Name = "Tushar";

let anotherName = Name; 
console.log(anotherName);

anotherName = "Tushar Kumar"

/*  here 'anotherName' is a copy of 'Name'
    If we change 'anotherName', it will not change 'Name'
*/

console.log(Name);
console.log(anotherName);

let user1 = {
    name: "Tushar",
    email: "tkpathak2505@gmail.com",
    upi: "tkpathak2505@okyblue",
    }

let user2 = user1;

console.log(user1.email)
console.log(user2.email) 
/* here user2 is a reference to user1
   if we change user2, it will change user1 also
*/


user2.email = "tushar@google.com"

console.log(user1.email)
console.log(user2.email)




