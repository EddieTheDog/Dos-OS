// Load stored user info from localStorage
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('uid') || localStorage.getItem('userId');
const screenWidth = localStorage.getItem('screenWidth');
const screenHeight = localStorage.getItem('screenHeight');
const userAgent = localStorage.getItem('userAgent');

// Save permanent data
localStorage.setItem('userId', userId);
localStorage.setItem('screenWidth', screenWidth);
localStorage.setItem('screenHeight', screenHeight);
localStorage.setItem('userAgent', userAgent);

// Render the desktop with apps
const desktop = document.getElementById('desktop');
desktop.innerHTML = `
  <h2>Hello user ${userId}!</h2>
  <p>Screen: ${screenWidth} x ${screenHeight}</p>
  <p>Browser: ${userAgent}</p>
  <div class="apps">
    <div class="app-icon" onclick="openApp('notes')">📝 Notes</div>
    <div class="app-icon" onclick="openApp('calendar')">📅 Calendar</div>
    <div class="app-icon" onclick="openApp('settings')">⚙️ Settings</div>
  </div>
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

// Register Service Worker for offline support
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('SW Registration Failed:', err));
}
