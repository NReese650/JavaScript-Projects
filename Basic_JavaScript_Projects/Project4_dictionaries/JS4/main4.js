
//Creating a dictionary
function my_dictionary() {
    var Animal = {            //Defining the variables
        Species:"Dog",
        Color:"Sable",
        Breed:"Dachshund",
        Age:14,
        Sound:"Woof!",

    };
    delete Animal.Breed;           //Deleting a variable
    document.getElementById("Dictionary").innerHTML = Animal.Sound;     //Establishing a method to call a variable
    document.getElementById("Dictionary2").innerHTML = Animal.Breed;           //Establishing a method to call a deleted variable
}