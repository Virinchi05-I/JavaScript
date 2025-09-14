# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
- Object literal
- Constructor
- Prototype

```text

```

- Classes
- Instances(new, this)
    

## 4 pillars
- Abstraction
``` txt

```
- Encapsulation
``` txt

```
- Inheritance
``` txt

```
- Polymorphism
``` txt

```

## Keywords


    new
    ```txt
    object creation via 'new' keyword 
    
    phase 1: A new empty object is created 

    phase 2: A constructor function is called because of the 'new' keyword which pass all the argument(if there is any) inside the object

    phase 3: These argument will get injected in the object, in the current context(this) and these will be called the current context of that object

    phase 4: Now if the object is called you can access those properties and function via that object variable in which these arguments were passed at the time of creating object.

    Professional explanation

    A new object is created: The new keyword initiates the creation of a new JavaScript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

    ```

    this
    ``` txt

    ``` 

    super()
    ``` txt

    ``` 
    
    call()
    ``` txt
    'this' is used to give the current context of a function, so when the SetUsername func is called after executing the reference of the func is stored in even after the function is executed.

    ``` 
    
    bind()
    ``` txt

    ``` 

### static

