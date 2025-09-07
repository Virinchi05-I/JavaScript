/* let str = "JavaScript is a dynamically typed language";
let num = 13
let bool = true
let N = null
let un;


let myObj = {
    
    name: "Tushar",
    age: 24,
    height: 5.8
}

let str1 = num.toString()
let str2 = String(bool)
let str3 = String(N)
let str4 = String(un)

// console.table([[str1, str2, str3, str4], [typeof str1, typeof str2, typeof str3, typeof str4]]);

// console.log(str4)
// console.log(typeof str4)

// let strObj = JSON.stringify(myObj)
console.log(typeof strObj);
console.log(typeof myObj); */

// palindrome

/* let num = 1234321;

function isPalindrome(num){ 
    let result
    let str = num.toString()
    for (let i = 0; i < str.length; i++) {
        if(i != str.length-i-1){
            if(str.charAt(i) == str.charAt(str.length-1-i)){
            result = true
            }else{
            result = false
            }
        }else {
            return result
        }
    }
    return result
}

console.log(isPalindrome(num)) */

let str = "My name is Ayush"

let str1 = "My name  is Hitesh"
// console.log(str.indexOf("sh"))
// console.log(str.split(" ", 3))
// console.log(str.includes("tushar"));
// console.log(str.localeCompare(str));
// console.log(str.replace("y", "Y"))
// console.log(str.replaceAll("y", "Y"))
// console.log(str.startsWith("Ayush", 11))
// console.log(str.endsWith("Ayush" , 16))

console.log(str1.valueOf())

console.log(Math.PI)