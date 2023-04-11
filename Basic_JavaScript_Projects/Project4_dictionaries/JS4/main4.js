
//Creating a dictionary
function my_dictionary() {
    var Animal = {            //Defining the variables
        Species:"Dog",
        Color:"Sable",
        Breed:"Dachshund",
        Age:14,
        Sound:"Woof!",

    };
    delete Breed;           //Deleting a variable
    document.getElementById("Dictionary").innerHTML = Animal.Sound;     //Establishing a method to call a variable
    document.getElementById("Dictionary2").innerHTML = Breed;           //Establishing a method to call a deleted variable
}