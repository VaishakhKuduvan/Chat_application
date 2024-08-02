document.addEventListener('DOMContentLoaded', function() {
    function printError(elemId, hingMsg) {
        const elem = document.getElementById(elemId);
        if (elem) {
            elem.innerHTML = hingMsg;
        } else {
            console.error(`Element with ID ${elemId} not found.`);
        }
    }

    function validateSignUpInputCredentials() {
        let username = document.getElementById("name").value;
        let email = document.getElementById("email_address").value;
        let password = document.getElementById("password").value;
        let confirmpassword = document.getElementById("confirm_password").value;
        var nameErr = emailErr = passwordErr = confirmpasswordErr = true;

        if (username === "") {
            printError("nameErr", "Please enter your Name");
        } else {
            var regex = /^[A-Za-z]+$/;
            if (regex.test(username) === false) {
                printError("nameErr", "Please enter a valid Name");
            } else {
                printError("nameErr", "");
                nameErr = false;
            }
        }

        if (email === "") {
            printError("emailErr", "Please enter your email id");
        } else {
            var regex = /^\S+@\S+\.\S+$/;
            if (regex.test(email) === false) {
                printError("emailErr", "Please enter a valid email address");
            } else {
                printError("emailErr", "");
                emailErr = false;
            }
        }

        if (password === "") {
            printError("passwordErr", "Please enter your password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }

        if (confirmpassword === "") {
            printError("confirmPasswordErr", "Please enter your password");
        } else if (password !== confirmpassword) {
            printError("confirmPasswordErr", "Passwords do not match");
        } else {
            printError("confirmPasswordErr", "");
            confirmpasswordErr = false;
        }

        // If all fields are valid, return true
        return !(nameErr || emailErr || passwordErr || confirmpasswordErr);
    }

    function validateLoginInputCredentials() {
        let email = document.getElementById("login_email_address").value;
        let password = document.getElementById("login_password").value;
        var emailErr = passwordErr = true;

        if (email === "") {
            printError("emailErr", "Please enter your email id");
        } else {
            var regex = /^\S+@\S+\.\S+$/;
            if (regex.test(email) === false) {
                printError("emailErr", "Please enter a valid email address");
            } else {
                printError("emailErr", "");
                emailErr = false;
            }
        }

        if (password === "") {
            printError("passwordErr", "Please enter your password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }

        // If both fields are valid, return true
        return !(emailErr || passwordErr);
    }

    // Expose the functions to the global scope
    window.validateSignUpInputCredentials = validateSignUpInputCredentials;
    window.validateLoginInputCredentials = validateLoginInputCredentials;
});
