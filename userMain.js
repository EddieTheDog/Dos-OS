// Force Home Screen / PWA only
if(window.matchMedia('(display-mode: browser)').matches){
    document.body.innerHTML = `
      <h2>DOS OS 26 can only be opened from the Home Screen.</h2>
      <p>Please add it to your Home Screen to continue.</p>
    `;
    throw new Error("Browser mode blocked");
}

// Load user data
const name = localStorage.getItem('name');
const firstLaunch = localStorage.getItem('firstLaunch');

if(!name){
    alert("No account found. Please create an account.");
    window.location.href = '/index.html';
}

const desktop = document.getElementById('desktop');

// First launch: welcome message
if(firstLaunch === 'true'){
    desktop.innerHTML = `
        <h2>Welcome to your brand new OS, ${name}!</h2>
        <p>Enjoy DOS OS 26!</p>
        <button id="continue">Continue to your OS</button>
    `;
    document.getElementById('continue').addEventListener('click', () => {
        localStorage.setItem('firstLaunch', 'false');
        loadDesktop();
    });
} else {
    loadDesktop();
}

// Load main desktop
function loadDesktop(){
    desktop.innerHTML = `
        <h2>Hello, ${name}</h2>
        <div class="apps">
            <div class="app-icon" onclick="openApp('notes')">📝 Notes</div>
            <div class="app-icon" onclick="openApp('calendar')">📅 Calendar</div>
            <div class="app-icon" onclick="openApp('settings')">⚙️ Settings</div>
        </div>
        <button id="deleteAccount">Delete Account</button>
    `;

    document.getElementById('deleteAccount').addEventListener('click', () => {
        if(confirm("Delete your account and reset OS?")) {
            localStorage.clear();
            window.location.href = '/index.html';
        }
    });
}

function openApp(app){
    if(app === 'notes'){
        const notes = localStorage.getItem('notes') || '';
        const newNotes = prompt('Your Notes:', notes);
        if(newNotes !== null) localStorage.setItem('notes', newNotes);
    } else if(app === 'calendar'){
        alert('Calendar coming soon!');
    } else if(app === 'settings'){
        alert('Settings coming soon!');
    }
}

// Register Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.log('SW Registration Failed:', err));
}
