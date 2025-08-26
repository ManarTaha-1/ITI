//part one
let a = "15.7";
let b = "hello";
let c = false;
let d = "100px";

console.log(a);//"15.7"
console.log(typeof a);//string
console.log(Number(a));//15.7
console.log(Boolean(a));//true
console.log(parseInt(a));//15
console.log(parseFloat(a));//15.7

console.log(b);//"hello"
console.log(typeof b);//string
console.log(Number(b));//NaN
console.log(typeof(Number(b)));//number
console.log(Boolean(b));//true
console.log(typeof(Boolean(b)));//boolean
console.log(parseInt(b));//NaN
console.log(typeof(parseInt(b)));//number
console.log(parseFloat(b));//NaN
console.log(typeof(parseFloat(b)));//number

console.log(c);//false
console.log(typeof c);//boolean
console.log(Number(c));//0
console.log(typeof(Number(c)));//number
console.log(String(c));//"false"
console.log(typeof(String(c)));//string
console.log(parseInt(c));//NaN
console.log(typeof(parseInt(c)));//number
console.log(parseFloat(c));//NaN
console.log(typeof(parseFloat(c)));//number

console.log(d);//"100px"
console.log(typeof d);//string
console.log(Number(d));//NaN
console.log(typeof(Number(d)));//number
console.log(Boolean(d));//true
console.log(typeof(Boolean(d)));//boolean
console.log(parseInt(d));//100
console.log(typeof(parseInt(d)));//number
console.log(parseFloat(d));//100
console.log(typeof(parseFloat(d)));//number

// falsy values
/*
false => boolean
NaN => 1-string
0 => Number
undefined => undefined
"" => string
null =>object 
console.log("string"-1);//NaN
*/

//part two
let isLoggedIn = true;
let isAdmin = false;
let hasPaid = true;

if(isLoggedIn === true && hasPaid === true){
    console.log("Access granted to the course.")
}
else if (isLoggedIn === true && isAdmin === true){
    console.log("Welcome, Admin.");
}
else if( isLoggedIn !== true){
    console.log("Please log in to continue.");
}
else if(isLoggedIn === true && hasPaid === false){
    console.log("Payment required to access the course.");
}
var con = confirm ( "Are you married");
console.log(con);
console.log(typeof(con));
