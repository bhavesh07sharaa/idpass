function login(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Hardcoded username and password
    var validUsername = "admin";   // Username
    var validPassword = "admin123"; // Password

    // Basic validation for username and password
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill out all fields!";
    } else if (username === validUsername && password === validPassword) {
        errorMessage.textContent = ""; // Clear error message
        // Redirect to the desired website
        window.location.href = "https://bhavesh.framer.wiki"; // Redirect URL
    } else {
        errorMessage.textContent = "Invalid username or password."; // Invalid login
    }
}
