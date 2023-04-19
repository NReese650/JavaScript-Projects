function formValidation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === '' || email === '') {
        alert('Please enter your name and email');
        return false;
    } else {
        alert('Form submitted successfully');
        return true;
    }

}