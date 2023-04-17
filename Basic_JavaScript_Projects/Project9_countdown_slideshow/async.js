alert(document.getElementById("p1").innerHTML);

//Creating a function to use in class
function changeColor() {
    var element = document.getElementById("myElement");
    element.style.color = "red";
  }


  //Count to ten using a loop
  function count_to_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
  }
  