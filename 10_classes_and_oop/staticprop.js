class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return '250502'
    }
}

const tushar = new User("tushar")
// console.log(tushar.createId()) this createId method has been declared as static

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const katya = new Teacher("katya", "katya@ghayal.com")
katya.logMe()


console.log(katya.createId());
