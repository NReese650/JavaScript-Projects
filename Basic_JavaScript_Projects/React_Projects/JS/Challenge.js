function validateForm() {
    let name = document.forms["myForm"]["uName"].value;
    let phone = document.forms["myForm"]["uNumber"].value;
    if (name === "" || phone === "") {
        alert("Please fill out all info");
        return false;
    }
}

//Pop over menu
// Get the modal
var modal = document.getElementById("contact-form-container");

// Get the button that opens the modal
var btn = document.getElementById("open-form-btn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("close-form-btn");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};
//End Pop over menu


//Creating automatic slideshow
// Set the index of the current slide to 0
let slideIndex = 0;

// Get all the slide elements
const slides = document.querySelectorAll(".slideshow-slide");

// Set the first slide to active
slides[slideIndex].classList.add("active");

// Set the time interval for the slideshow (in milliseconds)
const intervalTime = 3000;

// Create a function that will advance the slideshow
function advanceSlide() {
  // Hide the current slide
  slides[slideIndex].classList.remove("active");

  // Increment the slide index
  slideIndex++;

  // If we've reached the end of the slides, start over at the beginning
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Show the next slide
  slides[slideIndex].classList.add("active");
}

// Set the slideshow to advance automatically at the specified interval
setInterval(advanceSlide, intervalTime);


// Confirmation form
const confirmationFormContainer = document.getElementById("confirmation-form-container");
const confirmationForm = document.getElementById("confirmation-form");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");

// When the user clicks the "Contact Us" button, open the confirmation form
document.getElementById("open-contact-form-btn").addEventListener("click", () => {
  confirmationFormContainer.style.display = "block";
});

// When the user clicks the "No" button, close the confirmation form
cancelBtn.addEventListener("click", () => {
  confirmationFormContainer.style.display = "none";
});

// When the user clicks the "Yes" button, perform the self destruct action
confirmBtn.addEventListener("click", () => {
  // Perform self destruct action here...
  alert("Self destruct initiated!");
});

// Close the confirmation form when the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target == confirmationFormContainer) {
    confirmationFormContainer.style.display = "none";
  }
});
