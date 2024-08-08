"use strict"; //treats all code as new vesion


/***************************************Variable Types***************************************/

// var b; // var should be avoided to be used as it has no block scope which is an issue
// let a; // best way to declare a variable it has block scope
// const c = 0; //const value once assigned cant be changed and for non premitive data types value cant be assigned again but data in array/obj can be changed

// let id = 101;
// let name = "ks";
// let marks = 9.44;
// let sem = "5th";
// console.table([id,name,marks,sem]) //to display data in tabular form 


/***************************************Data types***************************************/
/*
number => range: 2^53 Eg:5,242,653.325 etc...
bigInt => Eg:208430984928.........
string => ""
boolean => true or false
null
undefined => when var is used without assigning value
object => {}
symbol => its instances are unique and immutable
*/

/*

there are mainly 2 partitions 
1.Primitive (call by vale (copy of the value is shared and also updation made in copy)) (stored in stack memory)
    - 7 types: String , Boolean , Null , undefined , Number , Bigint , symbol

2. Non-Primitive(Refrence type (refrence to original value is share so the original value is changed)) (stored in heap mem)
    - Array, objects, Functions

*/

// let cricketers = ['Rohit' , 'Kohli' , 'KL Rahul']; //array

// let myObj = { //object
//     name : "ks",
//     age : 20
// }

// let myfunction = function(){ //function
//     console.log("hello from my function");
// }

// myfunction()

// console.log("Type of var name: ",typeof name);
// console.log("Type of var marks: ",typeof(marks));


/***************************************conversion***************************************/
// // let score = "33";
// let score = "33abc"
// console.log(typeof(score));
// console.log(score);

// let scoreinnumber = Number(score); // this will convert string to number 

// // "33" => 33
// // "33abc" => NAN (Not a number)
// // null => 0
// // undefined => NAN

// console.log(typeof(scoreinnumber));
// console.log(scoreinnumber);

//we can perform same conversion operation with Boolean String....

// let tobebool = 1;
// console.log(typeof(tobebool));
// console.log(tobebool);
// let bool = Boolean(tobebool);
// console.log(typeof(bool));
// console.log(bool)

// // 1 => true ; 0=> false
// // "" => false ; "any thing" => true

// console.log(`this is tobebool ${tobebool}`);
/***************************************operations***************************************/
// let val = 3;
// let negval = -val;
// console.log(negval);

// console.log(2+6); //add
// console.log(2-6); //sub
// console.log(2*6); //mul
// console.log(2/6); //div
// console.log(2**6); //power
// console.log(2%6); //mod (remainder)

// let str1 = "Hello"
// let str2 = " world"
// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log(1 + "2" + 2 ); //122


/***************************************Comparisions***************************************/
/*comparision and equality check work differently in js 
comarision (<, >, <=, >=...) treat null as 0
equality (==, ===) treat null as undefined  */

//Try to use same datatype while comparing 

// == => just checks value also converts one value type to anothers data type if required
// console.log("2" == 2) //true
// === => checks both data type and value .......it dosent converts one value type to anothers data type 
// console.log("2" === 2) //false

/***************************************Strings***************************************/

//New File

/***************************************Nums and Math***************************************/
/*
let num1 = 400;
let num2 = new Number(5100);
console.log(num1);
console.log(num2);

let bal = 1234.491;

console.log(bal.toString().length); //8
console.log(bal.toFixed(2)); //1234.49

console.log(bal.toPrecision(5)); //1234.5

let inr = 10000000;
console.log(inr.toLocaleString('En-IN')); //1,00,00,000
*/

//MATH

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// let rand = Math.random(); //value between 0 and 1
// console.log(rand);
// // console.log(rand *10);

// // console.log(Math.floor(rand*10)+1);

// let min = 5;
// let max = 20;
// console.log(Math.floor(rand*(max-min+1)+min)) // to get random value in range


