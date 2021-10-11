let val;

const today = new Date();
// const today = new Date(01/09/2020);
let birthday  = new Date('04-20-2000 11:25:00'); birthday  = new Date('April 20 2000 11:25:00'); birthday  = new Date('04/20/2000');


val = birthday;
console.log(val);

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();


console.log(val);

birthday.setMonth(1);
birthday.setDate(20);
birthday.setFullYear(2003);
birthday.setHours(3);
birthday.setMinutes(24);
birthday.setSeconds(40);



console.log(birthday);