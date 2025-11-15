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

    if (!name || !username || !password) return alert('Please fill in all fields.');

    // Generate unique userId
    const userId = Math.random().toString(36).substring(2, 10);

    // Save to localStorage
    localStorage.setItem('userId', userId);
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('firstLaunch', 'true');

    // Redirect instructions
    container.innerHTML = `
      <h2>Thank you for creating your account!</h2>
      <p>The next step is to <strong>Add DOS OS 26 to your Home Screen.</strong></p>
      <p>Once added, open it from your Home Screen. You cannot continue in this browser.</p>
      <button id="goToApp">Go to your OS</button>
    `;

    document.getElementById('goToApp').addEventListener('click', () => {
      // Redirect to a custom URL for this user
      window.location.href = `/user.html?uid=${userId}`;
    });
  });
});
