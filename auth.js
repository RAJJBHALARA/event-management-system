// Function to display an error message below the input
const displayError = (inputElement, message) => {
    // Find or create the error div using a consistent ID pattern
    let errorElement = document.getElementById(inputElement.name + 'Error');
    if (!errorElement) {
        errorElement = document.createElement('p');
        errorElement.id = inputElement.name + 'Error';
        errorElement.className = 'text-red-500 text-sm mt-1';
        inputElement.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
    inputElement.classList.add('border-red-500');
    inputElement.classList.remove('focus:ring-purple-500');
};

// Function to clear an error message
const clearError = (inputElement) => {
    const errorElement = document.getElementById(inputElement.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('border-red-500');
        inputElement.classList.add('focus:ring-purple-500');
    }
};

// Core email validation check
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Core validation logic for the LOGIN form
window.validateLoginForm = function(event) {
    event.preventDefault();
    let isValid = true;

    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    clearError(emailInput);
    clearError(passwordInput);

    // Validate Email
    if (emailInput.value.trim() === '') {
        displayError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Password
    if (passwordInput.value.trim() === '') {
        displayError(passwordInput, 'Password is required.');
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        displayError(passwordInput, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    if (isValid) {
        // Mock successful login action
        console.log('Login successful for:', emailInput.value);
        alert('Login Successful! Redirecting to dashboard...');
        window.location.href = 'admin_panel_all_in_one.html'; // Example redirect
    }

    return isValid;
};

// Core validation logic for the SIGN UP form
window.validateSignupForm = function(event) {
    event.preventDefault();
    let isValid = true;

    const fullNameInput = document.getElementById('signup-fullname');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');

    [fullNameInput, emailInput, passwordInput].forEach(clearError);

    // Validate Full Name
    if (fullNameInput.value.trim() === '') {
        displayError(fullNameInput, 'Full Name is required.');
        isValid = false;
    } else if (fullNameInput.value.length < 3) {
        displayError(fullNameInput, 'Name must be at least 3 characters.');
        isValid = false;
    }

    // Validate Email (reusing logic)
    if (emailInput.value.trim() === '') {
        displayError(emailInput, 'Email is required.');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        displayError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Password (reusing logic)
    if (passwordInput.value.trim() === '') {
        displayError(passwordInput, 'Password is required.');
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        displayError(passwordInput, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    if (isValid) {
        // Mock successful sign up action
        console.log('Sign Up successful for:', emailInput.value);
        alert('Account Created Successfully! Redirecting to login...');
        window.location.href = 'login.html'; // Example redirect
    }

    return isValid;
};