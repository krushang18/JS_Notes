let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let custom_date =  new Date(2024,5,18,18,19,0);
// console.log(custom_date.toLocaleDateString());
// let custom_date1 =  new Date(2024,5,18,18,19,0);
// console.log(custom_date1.toLocaleString());

// let my_cust_date = new Date('01/14/2024') //'06-18-2004'
// console.log(my_cust_date.toLocaleDateString());

// let time = Date.now();
// console.log(time);
// console.log(Math.floor(time/1000));

// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());

console.log(myDate.toLocaleString('default',{
    weekday:'long',
    year:'numeric'
}));