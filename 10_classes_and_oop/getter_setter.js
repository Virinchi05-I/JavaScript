class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    } 

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}tushar`
    }

    set password(value){
        this._password = value
    }
}

const tushar = new User("tkp@xample.co", "abc")
console.log(tushar.email);
console.log(tushar.password);
