"Use Strict";
// Object.create
//Singleton


/**************Declaring symbol*******************/
const mysymb = Symbol("key1");
// console.log(mysymb);
//Object literals
const user = {
    name:"KS",
    "full name":"KVS",
    age:18,
    [mysymb]:"my secret key",
    location:"Gandhinagar",
    lastlogin:["Mon","Sun"]

}


// //one way
// console.log(user.name);

// //another way
// console.log(user["age"]); //key is stored as string in backend
// console.log(user["full name"]);

// user.name = "its ks";
// user["full name"] = "newname";

// console.log(user.mysymb);  //Undefined
// console.log(user[mysymb]); //Gets the value

// user.name = "its ks";
// Object.freeze(user);
// user.namr = "Updated"; //will not be updated as the object is freezed
// console.log(user.name);


// user.greetings = function(){
//     console.log("Hi there");
// }

// user.greetingstwo = function(){
//     console.log(`Hi there, im ${this.name}`); //here this is for user object
// }

// console.log(user.greetings); //returns the refrence of the function
// console.log(user.greetings()); //calls the function itself
// console.log(user.greetingstwo());
// console.log(user);

// //SingleTon Object
const cricscore = new Object();
console.log(cricscore);

// //NON singleton object
const cric = {};
console.log(cric);


// const cric = {};
// cric.id = 1; //add attributes to the object
// cric.nm = "ks";
// console.log(cric);

// const nested_obj = {
//     id:1,
//     fullname : {
//         first:"k",
//         middle:"v",
//         last:"s"
//     }
// }

// console.log(nested_obj.fullname.first);

const obj1 = {1:"a",2:"b"}; //keys cant be duplicate and in case it will overwrite it
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e",6:"f"};

// const obj4 = {obj1 , obj2 , obj3}; //WRONG Dont do this it inserts object inside object
// console.log(obj4);
const obj4 = Object.assign({},obj1,obj2,obj3); 
/*if we dont use {} as first element the whatever the first element is also updated as its the target value 
so in this case it will be assigned to obj4 and if {}(empty object) is not provided then it will change obj1 and obj4 
both of them are equal now if we use below statement
const obj4 = Object.assign(obj1,obj2,obj3); 
*/
// console.log(obj4);
// const obj4 = {...obj1,...obj2,...obj3}; //spread operator
// console.log(obj4);

/****************************Array of objects******************/
// const arobj = [{id:1,email:"01@ddu.ac.in"},{id:2,email:"02@ddu.ac.in"},{id:3,email:"03@ddu.ac.in"},{id:4,email:"04@ddu.ac.in"},];
// console.log(arobj[1]["email"]);

// console.log(Object.keys(user)); //provides array of keys in the object
// console.log(Object.values(user)); //provides array of values in the object
// console.log(Object.entries(user)); //provides array of each key and value as single element in the object

// console.log(user.hasOwnProperty("name")); //true
// console.log(user.hasOwnProperty("gender")); // false


/*********************************Destructuring Object****************************************/
const {name : n} = user;
console.log(n); //ks