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

    const userId = Math.random().toString(36).substring(2, 10);

    localStorage.setItem('userId', userId);
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('firstLaunch', 'true');

    container.innerHTML = `
      <h2>Thank you for creating an account!</h2>
      <p>The next step is to add DOS OS 26 to your Home Screen.</p>
      <p>After adding, open it from your Home Screen to start your OS.</p>
      <button id="goToApp">Go to App</button>
    `;

    document.getElementById('goToApp').addEventListener('click', () => {
      window.location.href = `/user.html?uid=${userId}`;
    });
  });
});
