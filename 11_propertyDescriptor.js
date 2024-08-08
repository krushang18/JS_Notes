"use strict"

const pen = {
    name:"saino softec",
    price:4,
    inStock:true 
}

console.log(Object.getOwnPropertyDescriptor(pen,"inStock"));

Object.defineProperty(pen,"price",{
    writable:false 
})

Object.defineProperty(pen,"inStock",{
        enumerable:false
    })

for(let i in pen) 
    {console.log(i)};

// pen.price = 20
console.log(Object.keys(pen));

console.log(Object.getOwnPropertyDescriptor(pen,"inStock"));