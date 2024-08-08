"use strict"

//js has prototypal behaviour
//array -----> object -----> null
//everything is object is js
//string -----> object -----> null


/*

Here's what happens behind the scenes when the new keyword is used:

**A new object is created: The new keyword initiates the creation of a new 
JavaScript object.

**A prototype is linked: The newly created object gets linked to the 
prototype property of the constructor function. This means that it has 
access to properties and methods defined on the constructor's prototype.

**The constructor is called: The constructor function is called with the 
specified arguments and this is bound to the newly created object. If no 
explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

**The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/

function createItem(name,price){
    this.name = name;
    this.price = price;
}
//adding custom fuction to prototype
createItem.prototype.update = function(){
    this.price += 25;
    console.log(`name: ${this.name} and updated price is: ${this.price}`);
}

//new keyword helps you add your custom function to the object
let chai = new createItem("Masala Chai",20);
let coffee = new createItem("Coffee",50);

chai.update();