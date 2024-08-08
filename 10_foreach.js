"use strict";

const coding = ["js", "ruby", "java", "python", "cpp"]

//1. way
// coding.forEach(function(index){
//     console.log(index);
// })

//2. way
// coding.forEach((index) => {console.log(index);})

//3. way
// function forlooingit(index){
//     console.log(index);
// }

// coding.forEach(forlooingit);

//4. way
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//accessing objects with for each loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((index) => {console.log(index.languageName);})