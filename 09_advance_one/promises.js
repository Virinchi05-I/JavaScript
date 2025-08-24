const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography
    setTimeout(function(){
        console.log('Async task complete');
        resolve()   
    }, 2000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// another format or way for using promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 2000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename:"Chai", email:"chai@example.co.in"})
    }, 2000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Tushar", password:"156"})
        }else{
            reject('ERRO: Something went wrong')
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);  
}).finally(() => console.log("The Promise is either resolved or rejected")
)

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript", password:"156"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 2000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// 2 ways for fetching data

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // here we also need to use await as it will take time to convert to JSON 
//                                             //  without await it will not print the data
//         console.log(data);                  
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))