"use strict";

// function printnm(){
//     console.log("Krushang");
// }
// printnm; //reffrence
// printnm(); //calling

// function addnos (num1 , num2){
//     return num1+num2;
// }
// const res= addnos(10,20);
// console.log(res);
// console.log(addnos(10,20));

// function loggin(username = "AS"){ //we set the default value
//     if(!username){ //if no arguments passed than its undefined
//         console.log("Provide username");
//     }
//     else{
//         console.log(`Welcome ${username}`);
//     }
// }

// loggin(); //if paased argument then is uses that value else uses default value

/*********************************************************************************************************/
// function cal_cart(...values){ //Rest parameter
//     return values; //all elements recieved in parameter are included in an array and that array is returned
// }
// function cal_cart(val1,val2,...values){ //Rest parameter
//     return values; //in this case val1 and val2 are not included in the array as they are different parameters
// }

// console.log(cal_cart(10,232,23322,6545,656,3,4343));
/*********************************************************************************************************/

/**************************************************Handling Object*******************************************************/

// const user = {
//     name: "Krushang",
//     age: 20,
//     email: "krushang@gmail.com"
// }

// function handlingOBJ(obj){
//     console.log(obj.name);
// }

// handlingOBJ(user);


/**************************************************Handling array*******************************************************/

// const arr = [1,2,3,4,5,6,7,8]

// function retsecond(somearr){
//     return somearr[1];
// }

// console.log(retsecond(arr));

/*******************************different ways************************************/
// func1(); //this function is hoisted so we can call it is written

function func1(){
console.log("hello from func1");
}
// func1();


// func2(); //gives error as function is provided to the variable and its mem is hoisted but value is not
const func2 = function(){
    console.log("hello in func2");
}
// func2();





var counter = 0;
function add() {
    var counter=0
counter += 1;
}
add();
add();
add();

console.log(counter);