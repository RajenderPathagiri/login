document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('loginMessage');

  // Simple validation (replace with real authentication logic)
  if (username === 'admin' && password === 'password') {
    message.textContent = 'Login successful!';
    message.style.color = 'green';
  } else {
    message.textContent = 'Invalid username or password.';
    message.style.color = 'red';
  }
});
