var X = 942;     //Global variable

function Add_numbers_1() {
    document.getElementById("Number1").innerHTML = (58 + X);    //Using the global variable
    var Y = 783;                                                //Local variable
    document.getElementById("Number2").innerHTML = (Y + X);     //Using the global and local variables
}

function Add_numbers_2() {
    console.log(Y + X);     //Using the global and local variables. The local variable is not local to this function though and should not work. Checks error in console log.
}


function get_Date() {      //If statement in a time function
    if (new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function check_age() {      //If statement in an age function
    var age = document.getElementById("age").value; //Establishes variable as given by user input 
    
    if (age < 18) {         //Establishes if statement
      document.getElementById("result").innerHTML = "Sorry, you are not old enough to enter.";  
    } 
    else if (age >= 18 && age < 21) {
        document.getElementById("result").innerHTML = "You are old enough to enter, but you cannot drink."; //Establishes else/if statment
    }
    else {
      document.getElementById("result").innerHTML = "Welcome, enjoy your visit!";   //Establishes else statement
    }
  }
  
//Copying code from course
  function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
    
  }