// 5)  function date string

function getDayOfWeek(dateString) {
    var date = new Date(dateString);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
} 

console.log(getDayOfWeek("2025-08-13")); 

// 4.1) function accepts only 2 parameters

function checkParameters(par1, par2) {
    if (arguments.length <= 2) {
        throw "Insufficient parameters";
    }
    console.log("Parameters are valid");
}
checkParameters("hello", "hi", "there");
// checkParameters("hello", "hi");

//4.2) function add n values 
function addNumbers(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            throw "All parameters must be numbers";
        }
        else {
            sum += arguments[i];
        }
    }
    console.log(sum);
}
addNumbers(1, 2, 3, 4);
addNumbers(1, 2, 3, 4, 70,105);

//4.3) function reverse array
function reverseArray() {
    var arr = [];
        for (let i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
    return arr.reverse();
}
console.log(reverseArray(1, 9, 8, 11, 5));


