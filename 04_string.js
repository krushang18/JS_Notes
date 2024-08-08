"USE STRICT";
let s1 = "abcd";
let s2 = " xyz";
let str = new String("Krushang");

// console.log("This is s1 ${s2} and s2 ${s2}"); // WRONG
// console.log("This is s1" + s1 + "and s2" +s2); //WRONG
// console.log(`This is s1 ${s1} and s2 ${s2}`); //CORRECT

// console.log(str[3]);
// console.log(str.charAt(3));
// console.log(str.length);
// console.log(str.indexOf('s'));

// /*1. substring 2.slice 3.trim 4.replace */

// console.log(str.substring(0, 3)); //not including 3rd element 
// let silcedstr = str.slice(-8,5); // -8 => K , -7=> r ..... -1 =>g
// console.log(silcedstr);

// let str_trim = "          KS       ";
// console.log(str_trim)
// console.log(str_trim.trim()); //removes all the spaces from the start and end of the string

// let str_replace = "kv_shah";
// console.log(str_replace);
// console.log(str_replace.replace('_',' '));
// console.log(s2.toUpperCase()); //XYZ
// console.log(s2.includes('y')); //true
// console.log(s2.includes('Y')); //false

// let for_split ="ab-cd-efg-hi-jk";

// let splited = for_split.split('-');
// console.log(splited)

let all = "the quick brown fox jumps over lazy dog."
// let words = all.match("z");
// console.log(words);