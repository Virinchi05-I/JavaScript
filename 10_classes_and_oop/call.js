function SetUsername(username){
    // complex DB calls 
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // this is not being called have to use call method to implicitly call the method even though there is ()
    SetUsername.call(this, username) // 'this' is used to give the current context of this function,
    // so when the SetUsername func is called after executing the reference of the func is stored in even after the function is executed

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 123)
console.log(chai);
