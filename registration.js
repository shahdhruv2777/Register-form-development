document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  // Validate Password and Confirm Password match
  if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }

  // Check if password is strong
  if (!isPasswordStrong(password)) {
      alert('Password is not strong enough. It must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.');
      return;
  }

  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthMessage = getPasswordStrengthMessage(password);
    document.getElementById('passwordStrength').innerText = strengthMessage;
});

function isPasswordStrong(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
}


  // Simple validation for demonstration
  if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
  }

  // Success message for demonstration
  alert('Registration successful!');

  // Reset form (optional)
  document.getElementById('registrationForm').reset();
});

function isPasswordStrong(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
}
