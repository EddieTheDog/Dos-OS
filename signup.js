document.getElementById('startButton').addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h2>Create Your Account</h2>
    <form id="signupForm">
      <input type="text" id="name" placeholder="Your Name" required><br>
      <input type="text" id="username" placeholder="Username" required><br>
      <input type="password" id="password" placeholder="Password" required><br>
      <button type="submit">Create Account</button>
    </form>
  `;

  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if(!name || !username || !password) return alert('Please fill in all fields.');

    // Store account in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('firstLaunch', 'true');

    // Show instructions to add to Home Screen
    container.innerHTML = `
      <h2>Thank you for creating your account!</h2>
      <p>The next step is to <strong>Add DOS OS 26 to your Home Screen.</strong></p>
      <p>Do not continue in Safari. Open DOS OS 26 from your Home Screen after adding it.</p>
    `;
  });
});
