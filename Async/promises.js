// /**
//  * Synchronous : execution of code line by line
//  * asynchronous : it allows next instruction to execute if the current instn is going to take time in execution 
//  *   JS IS SYNCHRONOUS AND SINGLE THREADED LANGUAGE
//  */

// // Asynchronous program needed coz these features may take time to perform 
// //DB data
// //file access
// //API data request
// //cryptography

// /**
//  * promises has 3 states
//  * pending - initial state
//  * fulfilled - completed successfully
//  * Rejected - operation failed
//  */


// Promise can be consumed using 1. ".then().wait().finally()"  2. "async await"



// //Promise is a object which result eventual completion or failure
// const promiseOne = new Promise(function(resolve,reject){
//     //perform async tasks here
//     setTimeout(() => {
//         console.log("Asyn task performed");
//         resolve(); //when resolved is called only then .then will be executed.
//     }, 1000);
// })

// //  .then is executed when the Promise is resolved
// promiseOne.then(() => console.log("Promise resolved"));


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Asyn2 task performed");
//         resolve();
//     },1000)
// }).then(function(){console.log("Async 2 completed");})

// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let userobj = {
//             name: "Ks",
//             age: 20
//         };
//         resolve(userobj);
//     },1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// });



// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             let userobj = {
//                 name: "Ks",
//                 age: 20
//             };
//             resolve(userobj);
//         }else{
//             reject("ERROR");
//         }

//     },1000);
// });

// promisefour
// .then(function(user){
//     console.log(user);
//     return user.name;
// })
// .then((usernm)=>{
//     console.log(usernm);
// })
// .catch((msg) =>{
//     console.log(msg);
// })
// .finally(() => console.log("Finally this is over"));


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        const error = false;
        if(!error){
            let userobj = {
                name: "Krushang",
                marks: 32
            };
            resolve(userobj);
        }else{
            reject("locha che");
        }
    },1000);
})

async function consuming(){
    try{
        let response = await promiseFive; //Promise is a object so we use await to wait for response to get generated
        console.log(response); //we can use await at multiple places where ever the response might be taking time
    }catch(msg){
        console.log(`ERROR: ${msg}`);
    }

};

consuming();


// async function gettingData(){
//     try {
//         const message = await fetch('https://jsonplaceholder.typicode.com/users')

//         const receivedData = await message.json();
//         console.log(receivedData);
//     } catch (error) {
//         console.log("LOCHA");
//     }
// }

// gettingData();


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(msg){
//     return msg.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch(()=>{
//     console.log("LOCHA");
// })
// .finally(()=>console.log("final"))

