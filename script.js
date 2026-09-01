// 1. Grab your form by its ID
const myForm = document.getElementById("login-form");

// 2. Listen for when the user clicks submit
myForm.addEventListener("submit", function(event) {
    // Stop the form from doing its default page reload
    event.preventDefault(); 

    // 3. Redirect to your other existing HTML file
    window.location.href = "practice101.html";
});