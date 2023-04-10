
//Establishing an addition function
function addition_Function() {
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;
}

//Establishing a subtraction function
function subtraction_Function() {
    var Subtraction =  5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = "  + Subtraction ;
}

//Establishing a multiplication function
function multiplication() {
    var multiplication = 6 * 8;
    document.getElementById("Math2").innerHTML = "6 x 8 = " + multiplication;
}

//Establishing a division function
function division() {
    var division = 987/5;
    document.getElementById("Math3").innerHTML = "987 / 5 = " + division;
}

//Establishing a function that contains multiple operators
function mix() {
    var mixture = (5 + 5) * 9 / (5 - 2) * 13;
    document.getElementById("Math4").innerHTML = "\ (5 + 5) * 9 / (5 - 2) * 13 = " + mixture;
}

//Establishing a function that shows the remainder of an operation
function modulus() {
    var remainder = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6, you have a remainder of:  " + remainder;
}

//Establishing a function to provide a negative value
function negative_Operator() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

//Increment and Decrement Operators
function positive_incremental() {
var X = 5;
X++;
document.getElementById("Math7").innerHTML = "Positive increment from 5 = " + X;
}

function negative_incremental() {
var Y = 5.25;
Y--;
document.getElementById("Math8").innerHTML = "Negative increment from 5.25 = " + Y;
}


//Creating a window alert to display a random number
function random_window() {
    var rando_numo = (Math.random() * 100);                 //This makes the number random between 0 and 100
    window.alert("The random number is: " + rando_numo);
}

//Creating a Javascript math object function
function generateRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("Math9").innerHTML = "The random number is: " + randomNumber;
  }
  