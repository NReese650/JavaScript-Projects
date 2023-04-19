function getReceipt() {
    // Initialize the receipt string and running total
    var text1 = "<h3>You Ordered</h3>";
    var runningTotal = 0;
    // Get the size radio button array and loop through to find the selected size
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    // Set the price for the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    // Add the size total to the running total
    runningTotal = sizeTotal;
    // Output the selected size and its price to the console
    console.log(selectedSize+" + $"+sizeTotal+".00");
    // Output text1 and runningTotal to the console
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    // Call the next function with the running total and text1 values
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    // Get the topping checkbox array and loop through to find the selected toppings
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            // Output each selected topping to the console
            console.log("selected topping item: ("+toppingArray[j].value+")");
            // Add the selected topping to the receipt string
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    // Get the number of selected toppings and calculate the topping total
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    // Add the topping total to the running total
    runningTotal = (runningTotal + toppingTotal);
    // Output the total number of selected toppings and their price to the console
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    // Output text1 and runningTotal to the console
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    // Update the receipt display with the receipt string and total price
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+  runningTotal+".00"+"</strong></h3>";
}