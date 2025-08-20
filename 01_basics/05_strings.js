const name = "Tushar"
const repoCount = 5

//console.log(name +  repoCount) //outdated way

// console.log(`${name} has ${repoCount} repositories`) //template literals
// `` using backtick and ${} is recommended way this called string interpolation 

const gameName = new String('tushar.hc.com')

// console.log(typeof gameName) //object;
// console.log(gameName[0])

// console.log(gameName.length) //length of string
// console.log(gameName.toUpperCase()) //convert to uppercase;
// console.log(gameName.charAt(4)) 
// console.log(gameName.indexOf('h')) //find index of character

const newString = gameName.substring(0, 3) //substring from index 0 to 3
// console.log(newString) 
/*  
    the upper limit in .substring method is exclusive,
    thus it will not include the character at index 3
*/

const anotherString = gameName.slice(-8, 3) //slice from index 0 to 3
// console.log(anotherString)
/*
    the upper limit in .slice method is also exclusive,
    thus it will not include the character at index 3
*/

const newstring = "  Tushar  "
// console.log(newstring) 
// console.log(newstring.trim()) //remove whitespace from both ends
// //remove whitespace from both ends;;

const url = "https://tusharhc.com?name=Tushar&course=js"
// console.log(url.replace("js", "python")) //replace js with python;

// console.log(url.includes("tushar")) //check if string contains "tushar"

console.log(gameName.split(".")) //split string by "." and return an array



