function countdown() {                                //This line starts the countdown function
    var seconds = document.getElementById("seconds").value;    //This line sets a variable called "seconds" to the value of an input field with an ID of "seconds"

    function tick() {                                  //This line starts a new function called "tick"
        seconds = seconds - 1;                         //This line subtracts 1 from the "seconds" variable each time the function is called
        timer.innerHTML = seconds;                     //This line updates the HTML content of an element called "timer" to display the current value of the "seconds" variable
        var time = setTimeout(tick, 1000);             //This line sets a timer for 1000 milliseconds (1 second) and calls the "tick" function again after the timer expires
        if (seconds == -1) {                           //This line checks if the "seconds" variable has reached -1
            alert("Time's up!");                       //If the "seconds" variable has reached -1, this line displays an alert message that says "Time's up!"
            clearTimeout(time);                       //This line stops the timer from calling the "tick" function again
            timer.innerHTML = "";                      //This line clears the HTML content of the "timer" element
        }
    }
    tick();                                             //This line calls the "tick" function for the first time to start the countdown
}








// Initialize slideIndex to 1
let slideIndex = 1;

// Call the showSlides function with slideIndex as an argument
showSlides(slideIndex);

// This function increments or decrements the slideIndex by the given n value and calls the showSlides function
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This function sets the slideIndex to the given n value and calls the showSlides function
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// This function displays the appropriate slide based on the current value of slideIndex
function showSlides(n) {
  let i;
  // Get all of the elements with the class "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  // Get all of the elements with the class "dot"
  let dots = document.getElementsByClassName("dot");

  // If the slideIndex is greater than the number of slides, reset slideIndex to 1
  if (n > slides.length) {
    slideIndex = 1;    
  }

  // If the slideIndex is less than 1, set it to the number of slides
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all of the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the "active" class from all of the dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add the "active" class to the corresponding dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
