const form = document.getElementById('signup_form');
const message = document.getElementById('message_box');

function signupMessage(msg) {
    message.textContent = msg;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const email = document.getElementById('email').value;

    if(!validateUsername(username)) {
        signupMessage('Username must be between 3 and 20 characters, Allowed characters: alphanumeric characters \
            (letters A-Z, numbers 0-9), hyphens(-), and underscores (_)\
            must start with a letter, cannot contain spaces or special characters other than hyphens and underscores.')
    } else if (!validatePassword(password)) {
        signupMessage('Invalid password (Min 8 characters, uppercase, lowercase, number\
            special character, no spaces)')
    } else if (password != confirmPassword) {
        signupMessage('Passwords do not match.')

    } else if (!validateEmail(email)) {
        signupMessage('Invalid email (Must contain @ and end with .com, .net, or .io)')
    } else {
        signupMessage('Account created successfully')
        // Added a timeout for the client to see the message
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);
    }
})

function validateUsername(username) {
    const regex = /^[A-Za-z][A-Za-z0-9 -]{2,19}$/;
    return regex.test(username);
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/`~])[^\s]{8,}$/;
    return regex.test(password);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|net|io)$/;
    return regex.test(email);
}