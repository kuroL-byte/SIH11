const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'password') {
      
        window.location.href = '/'; 
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});