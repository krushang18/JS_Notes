"use strict";
//////loops for , while & do while not notes needed

const numarr = [1,2,3,4,5,6,7];
const strarr = ["a" , "b" , "c" , "d" , "e"];
const greetings = "Hello World!"
/****************************forof loop**********************/
// provides value of the element

// for (const i of numarr) {
//     console.log(i);
// }

// for (const greet of greetings){
//     console.log(greet);
// }

///////////////////////////////////////////////MAPS (not iterable)
const mymap = new Map();

mymap.set(1,"a");
mymap.set(2,"b");
mymap.set(3,"c");
mymap.set(4,"d");

// for (const i of mymap){
//     console.log(i);
// }
// for (const [keys,value] of mymap){
//     console.log(`${keys} = ${value}`);
// }

//Object with for of loop

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
/*********************************Objects cant be iterated through forof loop***********************/
// for (const i of myObject) {
//     console.log(i);
// }

/****************************************for in loop******************************/
// // for in loop always provides index 
// we cant use forof for looping object but can use forin
//for object
// for (const key in myObject) {
//     console.log(`${key} is for ${myObject[key]}`);
// }

// for (const i in strarr){ //provides index
//     console.log(i);
// }

// //forin for maps
// for (const key in mymap) { //as map is not iterable so cant be used in forin
//     console.log(key);
// }

