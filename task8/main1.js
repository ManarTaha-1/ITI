// 1.1) palindrome

// var check = true ; 
// do {
//     var prom = prompt("Enter a word to check palindrome");
//     if(!prom){
//         alert("Please Enter Valid Word");
//         var prom = prompt("Enter a word to check palindrome");
//     }
//     var reversedWord = prom.split("").reverse().join("");
//     if(reversedWord === prom)
//         {
//             alert("click OK for case sensitive");
//             var caseSensitive = confirm("Click OK for Yes, Cancel for No");
//             if(caseSensitive){
//                 alert("Yes, It's a palindrome 👍");
//             } else {
//                 alert("No, Not a palindrome 😢");
//             }
//         check = false;
//     }
//     else {
//         alert("No, Not a palindrome 😢");
//         check = false;
//     }
// } while (check); 



//1.2) e characters

// var check = true ; 
// do {
//     var prom = prompt("Enter a word to count letter 'e' in it");
//     if(!prom){
//         alert("Please Enter Valid Word");
//         prom = prompt("Enter a word to count letter 'e' in it");
//     }
//     var counter = 0 ;
//     // var splittedWord = prom.split("");
//     for(var i=0 ; i<prom.length ; i++){
//         if(prom[i]=== 'e'){
//             counter++;
//         }
//     }
//     alert("Number of 'e' is " + counter);
//     check =false;
// } while (check); 



//1.3) validation 

// do while repeat

var check = true;

do {
    var prom = prompt("Welcome! Enter Your name");
    var regName = /^[a-z ,.'-]+$/i;

    if (regName.test(prom)) {
        prom = prompt("Enter Your Phone Number");
        var regPhone = /^0\d{7}$/; 

        if (regPhone.test(prom)) {
            prom = prompt("Enter Your Mobile Number");
            var regMobile = /^01[0-2,5]\d{8}$/;

            if (regMobile.test(prom)) {
                prom = prompt("Enter Your E-mail");
                var regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (regEmail.test(prom)) {
                    alert("Thank You 🤩");
                    check = false;
                } else {
                    alert("Please Enter a valid E-mail");
                }
            } else {
                alert("Please Enter a valid Mobile Number");
            }
        } else {
            alert("Please Enter a valid Phone Number");
        }
    } else {
        alert("Please Enter a valid Name");
    }
} while (check);


