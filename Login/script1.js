function validateForm(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace the following line with your actual authentication logic
    var isAuthenticated = (username === "Shreyas" && password === "Shre");

    var errorMessage = document.getElementById("error-message");

    if (isAuthenticated) {
        errorMessage.innerText = "";
        alert("Login successful! Redirecting to the next page...");
        // Redirect to the next page or perform any other actions
    } else {
        errorMessage.innerText = "Incorrect username or password. Please try again.";
    }
}
