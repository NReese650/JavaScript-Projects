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