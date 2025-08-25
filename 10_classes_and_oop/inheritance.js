class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.Password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const tushar = new Teacher("tushar", "tkp@example.com", "250502")

// tushar.addCourse()
// tushar.logMe()

const sandeep = new User("Sandeep")

// sandeep.addCourse() // will not work 
// sandeep.logMe()

// console.log(tushar === sandeep); // --> false
// console.log(tushar === Teacher); // --> false

console.log(tushar instanceof Teacher); // --> true
console.log(tushar instanceof User); // --> true
