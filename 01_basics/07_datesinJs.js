// Dates

let myDate = new Date()

// console.log(myDate); 
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString()); // Date in a human-readable format
// console.log(myDate.toLocaleDateString()) // Date in locale format
// console.log(typeof myDate)

//let myCreatedDate = new Date(2025, 4 , 25) 
// let myCreatedDate = new Date(2025, 4 , 25, 5 ,3) 
// console.log(myCreatedDate.toDateString()); // January is 0, so this is 25th January 2025
// console.log(myCreatedDate.toLocaleString()); // Locale format

let myCreatedDate = new Date("05-25-2025")
// console.log(myCreatedDate.toLocaleString()); // 25th May 2025

let myTimeStamp = Date.now() // returns the number of milliseconds since January 1, 1970

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime()) // returns the timestamp of the date object
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
// console.log(newDate.getMonth() + 1) // Months are 0-indexed, so January is 0
// console.log(newDate.getDate()) // Day of the month

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "Asia/Kolkata",
    month: "long",
    year: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit" 
})
)


