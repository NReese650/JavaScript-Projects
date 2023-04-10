var Family = "The Lannisters", Dad = "Tywin", Daughter = "Cersei", Son = "Jamie", Embarrassment = "Tyrion"; //Creating multiple variables 
document.write(Dad);


function familyName() {                              //Defining a function and naming it
    var str = "The Lannisters";                 //Defining a variable and giving it a string value
    var nor = "The Starks";                     //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; 
    document.getElementById("Button_Text2").innerHTML = nor;
}

//Creating a function that uses the concatenate method
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";   //This function uses the += concatenate operator
    document.getElementById("Concatenate").innerHTML = sentence;
}


function clickText() {                              //Defining a function and naming it
    var nor = "The Starks";                     //Defining a variable and giving it a string value
    document.getElementById("Button_Text3").innerHTML = nor;
}