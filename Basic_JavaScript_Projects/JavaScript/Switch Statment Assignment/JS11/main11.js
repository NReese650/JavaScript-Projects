function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list" ;
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Creating a function that uses the getElementsByClassName method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function drawRectangle() {
    // Get the canvas element by ID
    var canvas = document.getElementById("ID_Name");
    // Get the 2D context of the canvas
    var ctx = canvas.getContext("2d");
    // Set the fill color to blue
    ctx.fillStyle = "blue";
    // Draw a rectangle at position (10, 10) with width 100 and height 50
    ctx.fillRect(10, 10, 100, 50);
  }

  function createGradient() {
    // Get the canvas element by ID
    var canvas = document.getElementById("myCanvas");
    // Get the 2D context of the canvas
    var ctx = canvas.getContext("2d");
    // Create a gradient object
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // Set the gradient color stops
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "green");
    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }