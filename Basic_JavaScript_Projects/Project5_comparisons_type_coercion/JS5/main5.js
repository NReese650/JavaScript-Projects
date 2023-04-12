//Working with the typeof operator

function type_of (){
    document.getElementById("string_type").innerHTML = typeof "Word";   //When called, shows that "Word" is a string value type
    document.getElementById("string").innerHTML = typeof 3;             //When called, shows that 3 is a number value type
    document.getElementById("Coercion").innerHTML = "Word" + 3          //When called, "Word" and 3 are forcibly added together since they are different value types
}


//Not a number function
function not_a_number (){
    document.getElementById("NoDef").innerHTML = 0/0;

}


//Not a number checker
function what_are_you(){
    document.getElementById("BeTrue").innerHTML = isNaN('Can this be a number if it is a string?');  //Asks if the string value is not a number. Result should be true
    document.getElementById("BeFalse").innerHTML= isNaN('58');                                       //Asks if the number value is not a number. Result should be false. 
}


//Messing with infinity
function large_numbers() {
    document.getElementById("upperLimit").innerHTML = 2E310;    //Displays positive infinity
    document.getElementById("lowerLimit").innerHTML = -3E310;   //Displays negative infinity
}


//Boolean logic
function only_two_possibilites() {
    document.getElementById("MustBe").innerHTML = 500 > 1;  //Creating a true statement
    document.getElementById("CantBe").innerHTML = 500 < 2;  //Creating a false statement
}


//Trying out the console log
console.log(9 + 87);                //Shows the answer '96' if you press F12 in your browser and click on console
console.log(7 > 9);                 //Shows the answer 'false' in the console

//Double Equal Signs
function is_it_true() {
    document.getElementById("indeed").innerHTML = 10 == 10  //Checks to see if these two values equal each other. They do. Should output 'true'
    document.getElementById("notIndeed").innerHTML = 10 == 100  //Checks to see if these two values equal each other. They do not. Should output 'false'
}


//Triple Equal Signs
function are_words_true() {
    X = "San Francisco";                    
    Y = "Portland";
    Z = "San Francisco";
    A = 50
    B = "Fifty"
    document.getElementById("confirm").innerHTML = X === Z; //Checks to see if the two data values are the same. In this instance they are. Output should be 'true'. Same value and type
    document.getElementById("deny").innerHTML = X === Y;    //Checks to see if the two data values are the same. In this instance they are not. Output should be 'false'. Same value and type
    document.getElementById("denySimilar").innerHTML = A === B; //Checks to see if the two data values are the same. In this instance they are not. One is a number and one is a string, but they are the same value.
    document.getElementById("denyAgain").innerHTML = X === A; //Two different data types and different values.
}

//Logical Operators
function logical_operators() {
    X = 50;
    Y = 100;
    Z = 25;
    document.getElementById("andOperatorFal").innerHTML = X > Y && Z > Y;   //Using the AND operator to display a false
    document.getElementById("andOperatorTru").innerHTML = X < Y && Z < Y;   //Using the AND operator to display a true
    document.getElementById("orOperatorFal").innerHTML = X > Y || Z > Y;    //Using the OR operator to display a false
    document.getElementById("orOperatorTru").innerHTML = X < Y || Z < Y;    //Using the OR operator to display a false
    document.getElementById("notOperatorFal").innerHTML = !(X < Y);   //Using the NOT operator to display a false
    document.getElementById("notOperatorTru").innerHTML = !(Z > Y);   //Using the NOT operator to display a true
}

//Ternary Operators
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}