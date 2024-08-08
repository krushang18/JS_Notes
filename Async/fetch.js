//fetch returns promise

/**
 * he fetch() method takes one mandatory argument, the path to the resource you want to fetch. 
 * It returns a Promise that resolves to the Response to that request 
 * — as soon as the server responds with headers 
 * — even if the server response is an HTTP error status. it is considered as resolved Eg:404
 * 
 *  fetch() promise is only rejectsed in case when network error is encountered 
 */

//fetch callback is stored in microtask queue / priority queue (so fetch is executed before tasks from regular queue)

//See the image

/**here both yellow and green are fired together
 * yellows task is to creat memory
 * greens task is to send network request through browser
 * if the request is ticked the its stored in onfulfilled and in cross then stored in onRejection so 
 * onfulfiled is used as resolved and onRejection as rejeced (both have function in them)
 * once any one of then has data it will return it data variable and its data's responsibility to store it in response varible
 */

/*******************************With Async await***********************************************/

// async function gettingdata(){
//     try {
//         const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await resp.json();
//         console.log(data);        
//     } catch (error) {
//         console.log("Locha");
//     }
// }

// gettingdata();

/*******************************With .then .catch**************************************/

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(msg){
    return msg.json();
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log("LOCHA");
})
.finally(()=>console.log("final"))