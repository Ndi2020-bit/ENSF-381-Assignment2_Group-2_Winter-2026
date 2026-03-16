const form = document.getElementById('login_form');
const message = document.getElementById('message_box');

function loginMessage(msg) {
    message.textContent = msg;
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {
            const foundUser = users.find(function(user) {
                return user.username.toLowerCase() === username.toLowerCase();
            });

            if (foundUser) {
                if (foundUser.email === password) {
                    loginMessage('Login Successful');
                    window.location.href = 'menu_view.html';
                } else {
                    loginMessage('Wrong Credentials');
                }
            } else {
                loginMessage('Wrong Credentials');
            }
        });
})