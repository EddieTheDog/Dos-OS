// Get user data from localStorage
const userId = localStorage.getItem('userId');
const username = localStorage.getItem('username');
const screenWidth = localStorage.getItem('screenWidth');
const screenHeight = localStorage.getItem('screenHeight');
const userAgent = localStorage.getItem('userAgent');

// If no user data, redirect back to signup
if(!userId || !username) {
  alert("No account found. Please create an account.");
  window.location.href = '/index.html';
}

// Render the desktop
const desktop = document.getElementById('desktop');
desktop.innerHTML = `
  <h2>Welcome, ${username}!</h2>
  <p>Screen: ${screenWidth} x ${screenHeight}</p>
  <p>Browser: ${userAgent}</p>
  <div class="apps">
    <div class="app-icon" onclick="openApp('notes')">📝 Notes</div>
    <div class="app-icon" onclick="openApp('calendar')">📅 Calendar</div>
    <div class="app-icon" onclick="openApp('settings')">⚙️ Settings</div>
  </div>
  <button id="deleteAccount">Delete Account</button>
`;

function openApp(app) {
  if(app === 'notes') {
    let notes = localStorage.getItem('notes') || '';
    let newNotes = prompt('Your Notes:', notes);
    if(newNotes !== null) localStorage.setItem('notes', newNotes);
  } else if(app === 'calendar') {
    alert('Calendar coming soon!');
  } else if(app === 'settings') {
    alert('Settings coming soon!');
  }
}

// Delete account (clears localStorage)
document.getElementById('deleteAccount').addEventListener('click', () => {
  if(confirm("Are you sure you want to delete your account? This will remove all your data.")) {
    localStorage.clear();
    window.location.href = '/index.html';
  }
});

// Register service worker for offline PWA
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('SW Registration Failed:', err));
}
