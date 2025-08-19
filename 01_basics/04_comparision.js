// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0) 
// console.log(null == 0)
// console.log(null >= 0)
/*
    null > 0 => false
    null == 0 => false
    null >= 0 => true

    The reason is that an equality check == and comparision '>', '<', '>=' and '<=' works differently.
    comparision convert null to a number treating it as 0 that's why null >= 0 => true while other two are false
*/

// console.log(undefined > 0) 
// console.log(undefined == 0)
// console.log(undefined >= 0)

/*
console.log(null > 0) 
console.log(null == 0)
console.log(null >= 0)
console.log(undefined > 0) 
console.log(undefined == 0)
console.log(undefined >= 0)

note -: this type of comparision is not recommended as it can lead to unexpected results.

*/


console.log("2" === 2);

/* '===' operator -: it does the strict check i.e not only the value it will also check the data type and 
    that is why it does not 
*/
