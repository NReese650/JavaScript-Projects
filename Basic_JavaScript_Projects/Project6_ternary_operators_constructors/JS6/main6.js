
//Ternary Operators
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}


//Ternary voting function
function legal_Voter() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are under the legal voting age.":"You are old enough to legally vote.";
    document.getElementById("Vote").innerHTML = can_Vote + " It is the law.";
}

//Creating a class constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Creating objects with the Vehicle class constructor
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");       //Establishing a variable. Each value in the array correlates to the vehicle class constructor
    var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", 2019, "White and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    
//Creating a function to combine the class constructor with the created objects
    function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
    } 

//Creating a function using a new keyword
    function myFunction() {
        document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
    }

// Creating a class constructor for dogs
function Dog(breed, age, size, temperament) {
    this.dog_breed = breed;
    this.dog_age = age;
    this.dog_size = size;
    this.dog_temperament = temperament;
}

// Creating objects with the Dog class constructor
var rocky = new Dog("Labrador Retriever", 3, "Large", "Friendly");
var luna = new Dog("German Shepherd", 1, "Medium", "Protective");
var bella = new Dog("Poodle", 7, "Small", "Calm");

// Creating a function to combine the class constructor with the created objects
function myFunction() {
    document.getElementById("dog_info").innerHTML =
    "Rocky is a " + rocky.dog_breed + " and is " + rocky.dog_age + " years old. He is " + rocky.dog_size + " and has a " + rocky.dog_temperament + " personality.<br><br>" +
    "Luna is a " + luna.dog_breed + " and is " + luna.dog_age + " years old. She is " + luna.dog_size + " and has a " + luna.dog_temperament + " personality.<br><br>" +
    "Bella is a " + bella.dog_breed + " and is " + bella.dog_age + " years old. She is " + bella.dog_size + " and has a " + bella.dog_temperament + " personality.";
}


//Creating a nested function
function count_Function() {
    document.getElementById("Counting").innerHTML =  Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}