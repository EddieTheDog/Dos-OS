function openApp(app) {
  if(app === 'notes') {
    let notes = localStorage.getItem('notes') || '';
    let newNotes = prompt('Your Notes:', notes);
    if(newNotes !== null) {
      localStorage.setItem('notes', newNotes);
      alert('Notes Saved!');
    }
  }
  if(app === 'calendar') {
    alert('Calendar coming soon!');
  }
  if(app === 'settings') {
    alert('Settings coming soon!');
  }
}

// Register Service Worker for PWA
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('SW Registered'))
    .catch(err => console.log('SW Registration Failed:', err));
}
