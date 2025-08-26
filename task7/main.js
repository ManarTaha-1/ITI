
// 1) try and write the answer

// var a;
// console.log(a); // undefined

// // console.log(b); //error

// var c = 10 ; 
// var d = 20 ;
// console.log(c*d-2);//198

// var e;
// console.log(typeof(e));//undefined

// var f = "1" ;
// var g = 2 ; 
// console.log(f+g);//12

// var h = 1 ;
// var i = true ; 
// console.log(h+i);//2




//2) ask user to enter msg

// var prom = prompt("Please Enter Your Name");
// for(var i=1 ; i<7 ; i++){
//     document.writeln("<h" +i + ">Hello "+ prom+ "</h" + i +">");
// }




// 3) write script that takes from user
// do while 
var sum = 0;
var check = true;
do {
    var values = prompt("Enter a number");
    var num = Number(values);
        if (isNaN(num)) {
        alert("Please enter a valid number");
        continue;
    }

    if (num === 0) {
        alert("Number is 0");
        check = false;
    }

    sum += num;

    if (sum >= 100) {
        alert("Sum reached 100");
        check = false;
    }
} while (check);





// 4) contact prompt

// do while

var test = true;
do {
    var na = prompt("Enter your name");
    var check1 = Number(na);

    if (isNaN(check1)) {
        var year = prompt("Enter Your Birth Year ");
        var check2 = Number(year);

        if (!isNaN(check2)) { 
            document.writeln(
                "<u><b>Name : </b></u>" + na + "<br>" +
                "<u><b>Birth Year : </b></u>" + year + "<br>" +
                "<u><b>Age : </b></u>" + (2025 - year)
            );
            test = false;
        } else {
            alert("Please Enter a Valid number");
        }
    } else {
        alert("Please Enter your Name");
    }
} while (test);


//split and join and shalow copy and deep copy on lap
