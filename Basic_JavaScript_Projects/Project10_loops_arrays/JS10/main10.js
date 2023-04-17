//Count to ten using a loop
function Call_Loop() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
      Digit += "<br>" + X;
      X++;
  }
  document.getElementById("Loop").innerHTML = Digit;
}

//Using the string length property
let myString = "Hello, world!";
let stringLength = myString.length;
console.log(stringLength); // Output: 13


//Creating a For loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y <Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Creating a function with an array
function whatDoing() {
    var dogStuff = [];
    dogStuff[0] = "sleeping";
    dogStuff[1] = "playing";
    dogStuff[2] = "eating";
    dogStuff[3] = "barking";
    document.getElementById("Dog").innerHTML = "Every day my dog likes to spend time " + dogStuff[2];
}

//Creating a function with a constant function
function constant_function() {
    const motorCycle = {type:"motorcycle", brand:"Kawasaki", color:"green"};
    motorCycle.color = "red";
    motorCycle.price = "$4,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + motorCycle.type + " was " + motorCycle.price;
}

//Using the let keyword

function letValue() {
    var x = 7000;
    document.write("The initial value of x is: " + x + "<br>");
    {
        let x = 5;
        document.write("The new value of x is: " + x + "<br>");
    }
    document.write("The value of x outside the block is: " + x);
}

//Basic Javascript return statement
function addNumbers(a, b) {
    return a + b;
  }
  //Creating a function to show the output of the other function
function showOutput() { 
document.getElementById("returnStatement").innerHTML = addNumbers(5,10);    //Giving values for the function
}


//Creating an object using the let method
let motorcycle = {
    make: "Honda",
    model: "CBR",
    year: 2021,
    color: "Red",
    getDetails: function() {                //Creating function to create ouput using object info
      return "Make: " + this.make + ", Model: " + this.model + ", Year: " + this.year + ", Color: " + this.color;
    }
  }
  function displayMotorcycle() {
  let details = motorcycle.getDetails();    //Creating function to display output when called upon
  document.getElementById("motorcycle_details").innerHTML = details;
  }


  //Creating a function that uses the break and continue statements
  function loopWithBreakAndContinue() {
    let output = "";                    //Defining an empty string
    for (let i = 0; i < 10; i++) {      //Loops from 0 to 9
      if (i === 3) {                    //If i = 3, skip and move on to the next one
        continue;
      }
      if (i === 7) {                    //If i = 7, break the loop
        break;
      }
      output += i + " ";                //If i is not equal to 3 or 7, add it to the output
    }
    document.getElementById("output").innerHTML = output;
  }