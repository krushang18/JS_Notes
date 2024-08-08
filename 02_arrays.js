"use Strict";

// const myarr = [1,2,3,4,"Hii",true];
// const myarr2 = new Array(1,2,3,4,);
// console.log(myarr);
// console.log(myarr2[2]);

//Array Methods
const arr = [1,2,3,4,5,6,7];
// arr.push(8); //add element at end
// console.log(arr);
// arr.pop(); // remove element from ending
// console.log(arr);

// arr.unshift(0); //add element at beginning
// console.log(arr);
// arr.shift(); // remove element from beginning
// console.log(arr);

// console.log(arr.includes(6));
// console.log(arr.indexOf(6));

// const newarr = arr.join(); // converts arr to string 
// console.log(newarr); 
// const newarr2 = arr.join(" "); // converts arr to string with space
// console.log(newarr2); 

/*************************Slice and splice**********************/

// const a = arr.slice(1,3); //Slice: Dosen't include 3rd element and dosen't change og arr
// console.log(arr);
// console.log(a);
// console.log('-----------------------------------')
// const b = arr.splice(1,3); //Splice: includes 3rd element and also makes change in og arr
// console.log(arr);
// console.log(b);

const Indian_cricketers = ["Dhoni","Kohli","Rohit"];
const Australian_cricketers = ["Warner","Smith","Pat"];
// Indian_cricketers.push(Australian_cricketers); //array takes any thing as input data even arrays 
// console.log(Indian_cricketers);
// console.log(Indian_cricketers[3][0]);

// const new_cricketers = Indian_cricketers.concat(Australian_cricketers); 
// //add element to array and not whole array as element also returns new array
// console.log(new_cricketers);

/*********************************Spread Operator*******************************/
// const new_cricketers = [...Indian_cricketers,...Australian_cricketers];
// //we use this over concat as we can merge as many arrays as we want
// console.log(new_cricketers);

/************************************Array ke andar array******************************/
// const nested_arr = [1,2,3,[3,6,8,5],[4,3,7,[99,69]]];
// console.log(nested_arr.flat(Infinity)); //from all nested array creates one single flat array


const check = "Hello bhai"
console.log(Array.isArray("Hii")); //returns boolean weather is array or not
console.log(Array.from(check)); //converts to array //each character is one element 
//creates an array of iterable object
console.log(Array.from({name:"KS"})); //this cant be converted to array

let var1 = 10;
let var2 = 20;
let var3 = 30;
let var4 = 40;

console.log(Array.of(var1,var2,var3,var4)); //creates array of the elements passed
