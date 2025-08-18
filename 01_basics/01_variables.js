const accId = 14135 // const means that this value can't be changed which is assigned to accId,
// accId = 12342 
// so this will not be allowed as node js will not execute the file if a const have been assigned two values

//These can be changed 
let accEmail = "tkpathak2505@gmail.com" 
var accPasword = "12345"
accountCity = "Kolkata" // this is also a way for declaring a variable but this way is not preferable 

let accountState // if no value is assigned at intialization of a variable then the defacto value JS will provide is 
// undefined

// prefer not to use var 
// because of issue in block scope and functional scope

console.log(accId) // this is to print one variable 

console.table([accId, accEmail, accPasword, accountCity, accountState]) // use this if there are more than one variable to print 
