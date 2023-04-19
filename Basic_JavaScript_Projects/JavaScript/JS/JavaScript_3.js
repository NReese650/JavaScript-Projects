//Creating a function that uses the html data and gives an output
function displaySpecs(motorcycle) {
    var specs = motorcycle.getAttribute("data-specs");
    alert(motorcycle.innerHTML + " - " + specs);
 }