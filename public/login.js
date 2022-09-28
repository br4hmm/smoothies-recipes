const form = document.querySelector('form');
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  emailError.textContent = '';
  passwordError.textContent = '';

  try {
    const result = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await result.json();

    emailError.textContent = data.email;
    passwordError.textContent = data.password;

    if (data.user) {
      location.assign('/');
    }
  } catch (err) {
    console.log(err.message);
  }
});
