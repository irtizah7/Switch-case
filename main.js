/*

var num1 = +prompt("1st value")
var num2 = +prompt("2nd value")

var result =  num1 + num2
document.write(result)


*/


//alert("Danger")

/*
var fname = prompt ("Email Adress")
var lname = prompt ("Password")

var result = fname + lname
alert("You are login " + result)

*/

/*
var per = 80

console.log( ! (per < 86));
*/




/*
var num1 = +prompt("1st value")
var num2 = +prompt("2nd value")

var result =  num1 > num2

alert(result)
*/

/*
var num1 = +prompt("1st value")
var num2 = +prompt("2nd value")

var result =  num1 < num2

alert(result)
*/

/*
var num1 = +prompt("1st value")
var num2 = +prompt("2nd value")
var result =  num1 && num2

alert(result)
*/

/*
var num1 = +prompt("1st value")
var num2 = +prompt("2nd value")

var result =  num1 || num2

alert(result)
*/



//Marksheet
/*
var eng = Number(prompt("Enter your English marks"))
var urd = Number(prompt("Enter your Urdu marks"))
var math = Number(prompt("Enter your Maths marks"))
var che = Number(prompt("Enter your Chemistry marks"))
var phy = Number(prompt("Enter your physics marks"))
var isl = Number(prompt("Enter your Islamiyat marks"))

var sum = eng + urd + math + che + phy + isl
console.log("Total Marks = " + sum);

var per = sum * 100 / 600
console.log("Percentage = " + per)

if(per >= 85 && per <= 100){
    alert("A+ Grade")
}
else if(per >= 70 && per < 85){
    alert("A Grade")
}
else if(per >= 60 && per < 70){
    alert("B Grade")
}
else if(per >= 50 && per < 60){
    alert("C Grade")
}
else if(per > 0 && per < 50){
    alert("F Grade")
}
*/



//Calculator
/*
var num1 = Number(prompt("1st Value"))
var sign = prompt("Sign")
var num2 = Number(prompt("2nd Value"))

if(sign == "+"){
    let a = num1 + num2
    alert(a)
}
else if(sign == "-"){
    let a = num1 - num2
    alert(a)
}
else if(sign == "*"){
    let a = num1 * num2
    alert(a)
}
else if(sign == "/"){
    let a = num1 / num2
    alert(a)
}
*/
/*
var eng = Number(prompt("Enter your English Marks"))
var urd = Number(prompt("Enter your Urdu Marks"))
var math = Number(prompt("Enter your Math Marks"))
var phy = Number(prompt("Enter your Physics Marks"))
var che = Number(prompt("Enter your Chemistry Marks"))
var isl = Number(prompt("Enter your Islamiyat Marks"))

var sum = eng + urd + math + phy + che + isl
console.log("Total Marks: " + sum);

var per = sum * 100 / 600
console.log("Percentage: " + per);

if(per >= 85 && per <= 100){
    alert("Congratulation A+ Grade")
}
else if(per >= 70 && per < 85){
    alert("Congratulation A Grade")
}
else if(per >= 60 && per < 70){
    alert("Congratulation B Grade")
}
else if(per >= 45 && per < 60){
    alert("Congratulation C Grade")
}
else if(per >= 0 && per < 45){
    alert("FAIL")
}
*/



/*
var current = 2023
var dob = Number(prompt("Enter your Date of Birth"))

var result = (current - dob)


if(dob > 2023){
    alert("ERROR")
}else {
    alert(result)
}
*/


/*
var week = Number(prompt("Enter Week Number"));
switch (week) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Sunday");
        break;
        
        default:
        console.log("Wrong Number");
}
*/

var num1 = Number(prompt("1st Value"));
var sign = prompt("Enter Sign here");
var num2 = Number(prompt("2nd Value"));

switch (sign){
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
        default:
            console.log("ERROR");
}

