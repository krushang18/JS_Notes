// console.log(this); //{}
// console.log(this); //in browser gives "window object"

/*****************************************Arrow Function*********************************************/
// function dekho(){
//     const username = "ks";
//     console.log(this); //refers to Object
//     console.log(this.username); //undefined
// }

// const dekho = function(){
//     const username = "ks";
//     console.log(this); //refers to Object
//     console.log(this.username); //undefined
// }

// const dekho = () => {
//     const username = "ks";
//     console.log(this); //refers to empty object {}
//     console.log(this.username); //undefined
// }
// dekho();


// const add2 = (num1 , num2) => {
//     return num1 + num2;
// }


// const add2 = (num1 , num2) =>  num1 + num2;

// const add2 = (num1 , num2) =>  (num1 + num2); // if we use {} instead of () then we need to use "return" keyword 

// console.log(add2(10,20));

// const retobj = () => ({name:"KS"});

// console.log(retobj());


/***************************************IIFE - Immedietly invoked function Expression********************************************************/
//This is used to execute the function immedietly after execution begins and 
//also helps our function to not get polluted by the global object

// ()() => 1st () :to write the function    and    2nd () : to invoke it

(function iife() { //this is "NAMED IIFE"
    console.log("DB Connected");    
})(); //write the function as you write it normally and the just wrap it with ().
// ; is important as it dosent know where to stop its execution so using ";" is IMP otherwise wont able to execute next function

( (name) => {
    console.log(`"DB Connected in iife" ${name}`);
})("KS");