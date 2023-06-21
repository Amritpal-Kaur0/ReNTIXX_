const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("hello world")
  // Collect values from the login form
  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/Login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.getElementById('name-signup').value.trim();
  console.log(name)
  const email = document.getElementById('email-signup').value.trim();
  console.log(email)
  const password = document.getElementById('password-signup').value.trim();
  console.log(password)

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .getElementById('login-form')
  .addEventListener('click', loginFormHandler);

document
  .getElementById('signup-form')
  .addEventListener('click', signupFormHandler);
