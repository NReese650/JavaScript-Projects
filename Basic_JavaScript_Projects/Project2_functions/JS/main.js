//Creating a function to show the family names
function familyName() {
    var Lan = "Lannisters"
    var Star = "The Starks"
    document.getElementById("Button_Text").innerHTML = Lan;
    document.getElementById("Button_Text2").innerHTML = Star;
}


//Creating a function that uses the shorthand += to concatenate two sentences
function myFunction() {
    var sentence = "I am learning"
    sentence += " a lot from this course";
    document.getElementById("concatenate").innerHTML = sentence;
}