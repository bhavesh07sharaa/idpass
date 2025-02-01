function login(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Array of valid usernames and passwords
    var validUsernamePassword = [
        {username: 'admin', password: 'admin123'},
        {username: 'user1', password: 'password456'},
        {username: 'johndoe', password: 'johndoe789'},
        {username: 'alice', password: 'alice@2025'},
        {username: 'guest', password: 'guest1234'}	
    ];

    // Check if the entered username and password match any in the array
    var isValid = false;
    for (var i = 0; i < validUsernamePassword.length; i++) {
        if (username === validUsernamePassword[i].username && password === validUsernamePassword[i].password) {
            isValid = true;
            break;
        }
    }

    // Validation for empty fields
    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill out all fields!";
    } else if (isValid) {
        errorMessage.textContent = ""; // Clear error message
        // Redirect to the desired website
        window.location.href = "https://bhavesh.framer.wiki"; // Redirect URL
    } else {
        errorMessage.textContent = "Invalid username or password."; // Invalid login
    }
}
