// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `123256${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const tushar = new User("Tushar", "tkp@example.com", "123")

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword() = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername() = function(){
//     return `${this.changeUsername.toUpperCase()}`
// }


const tea = new User("Tea", "tea@example.com", "250502")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());