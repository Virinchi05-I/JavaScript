// Immeditely Invoked Function Expression (IIFE)

// (function chai(){ //named iife
//     console.log(`DB CONNECTED`)
// })();

/*
IIFE is a function that runs as soon as it is defined.
It is a design pattern that helps to avoid polluting the global scope.
It is useful for creating private variables and functions.
It is also used to create a module pattern. 
It is a way to execute code immediately without having to call the function explicitly.
It can be used to encapsulate code and avoid conflicts with other scripts.
IIFE can be used to create a private scope for variables and functions.
*/

( (name) => { // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})('Tushar')