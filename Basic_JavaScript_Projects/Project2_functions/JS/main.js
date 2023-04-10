var Family = "The Lannisters", Dad = "Tywin", Daughter = "Cersei", Son = "Jamie", Embarrassment = "Tyrion"; //Creating multiple variables 
document.write(Dad);


function familyName() {                              //Defining a function and naming it
    var str = "The Lannisters";
    var nor = "The Starks";                    //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str;
    document.getElementById("Button_Text2").innerHTML = nor;
}


function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}