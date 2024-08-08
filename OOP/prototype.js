//Prototype

let cricketers = ["Dhoni","Virat","Rohit","Jasprit"];

let crickAbility = {
    dhoni:"WK",
    virat:"Cover Drive",
    rohit:"Pull Shot",
    jasprit:"Bowler",

    getjaspritSkill: function(){
        console.log("Every one can't have it");
    }
}

Object.prototype.KS = function(){
    console.log("I AM EVERYWHERE");
}

// console.log(crickAbility.KS());
// console.log(cricketers.KS());

Array.prototype.kvs = function () {
    console.log("I AM IN EVERY ARRAY");
}

// // console.log(crickAbility.kvs()); ERROR as kvs method is only in array
// console.log(cricketers.kvs());


const user = {
    name:"Default",
    skill:"Alive"
}

const department = {
    dept_name : "Computer"
}

const student ={
    branch:"CS",
    exams:true
}

const faculty ={
    paperprepared : false,
    __proto__: department //inherits dept_name
}

// console.log(faculty.paperprepared);
// console.log(faculty.dept_name);


// student.__proto__ = department;//inherits dept_name

// console.log(student.branch);
// console.log(student.dept_name);


//////////////Modern Synatx
Object.setPrototypeOf(student,department);
// console.log(student.dept_name);




String.prototype.trueLength = function(){
    console.log(`${this}`); //this has value of who is calling 
    console.log(`True length is: ${this.trim().length}`);
}

let nm = "KS           ";

console.log(nm.trueLength());