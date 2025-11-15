document.getElementById('startButton').addEventListener('click', () => {
  // Generate a random unique ID for this user/device
  const userId = Math.random().toString(36).substring(2, 10);

  // Save some info in localStorage for personalization
  localStorage.setItem('userId', userId);
  localStorage.setItem('screenWidth', window.innerWidth);
  localStorage.setItem('screenHeight', window.innerHeight);
  localStorage.setItem('userAgent', navigator.userAgent);

  // Redirect to a personalized page
  window.location.href = `/user.html?uid=${userId}`;
});
