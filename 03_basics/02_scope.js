
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

// Nested scope

// function One(){
//     const username = "tushar"

//     function Two(){
//         const website = "youtube" // scope of website is only inside this function
//         console.log(username) // this will work because username is defined in the outer scope and accessible here
//     }
//     // console.log(website) this will throw an error because website is not defined in this scope
    
//     Two()
// }

// One() 


// ++++++++++++++++++ interesting ++++++++++++++++++

// both are function declaration 


console.log(addone(5))

function addone(num){
    return num + 1
}


console.log(addTwo(5))

const addTwo = function(num){
    return num + 2
}

/*
    The difference between the two is that the first function declaration is hoisted, 
    meaning it can be called before its definition in the code.
    The second function expression is not hoisted, so it must be defined before it can be called.
    This is why the first call to addone works, while the second call to addTwo throws an error.
*/