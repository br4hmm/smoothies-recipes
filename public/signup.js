const form = document.querySelector('form');
form.addEventListener('submit', async event => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  const result = await fetch('/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
});
