// let myName = "tushar"


// console.log(myName);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.tushar = function(){
    console.log(`tushar is present in all Object`);
    
}

Array.prototype.heyTushar = function () {
    console.log("Tushar says hello");
}

// heroPower.tushar()
// myHeros.tushar()
// myHeros.heyTushar()
// heroPower.heyTushar()

// inheritance

const User = {
    name:"tusshar",
    email:"tkp@example.com"
} 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Sandeep   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tushar    ".trueLength()
"dhiraj".trueLength()