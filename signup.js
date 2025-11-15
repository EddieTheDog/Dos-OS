document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  if(!username) return alert('Please enter a valid name');

  // Generate unique user ID
  const userId = Math.random().toString(36).substring(2, 10);

  // Store user data in localStorage
  localStorage.setItem('userId', userId);
  localStorage.setItem('username', username);
  localStorage.setItem('screenWidth', window.innerWidth);
  localStorage.setItem('screenHeight', window.innerHeight);
  localStorage.setItem('userAgent', navigator.userAgent);

  // Redirect to personalized user page
  window.location.href = `/user.html?uid=${userId}`;
});
