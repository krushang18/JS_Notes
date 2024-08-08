function setuNM(name){
    this.name = name;
}

function user(name,mail,pass){
    setuNM.call(this,name); //call is used to call another function and used to hold refrence of the called function
    this.mail = mail;
    this.pass = pass;
}

let ks = new user("ks","ks@gmail.com","hehe");
console.log(ks);