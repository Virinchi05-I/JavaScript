const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val) { // callback function
//         console.log(val);        
// } )

// coding.forEach( (item) => { // arrow function 
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) // here we only have to give reference of the function not execution[printMe()]

coding.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
} )

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})