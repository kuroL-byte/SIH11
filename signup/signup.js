const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');
const signupButton = document.getElementById('signup-button');

signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else if (username === '' || email === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
    } else {
        // TO DO: implement signup logic here
        // For now, just simulate a successful signup
        window.location.href = '/'; // redirect to main app page
    }
});