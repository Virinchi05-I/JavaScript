function User(email, password){
    this._email = email;
    this._password = password
    
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const tushar = new User("tkp@xample.com", "tkp")

console.log(tushar.email);
console.log(tushar.password);
