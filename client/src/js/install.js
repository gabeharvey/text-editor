const butInstall = document.getElementById('buttonInstall');

// This Handles the beforeinstallprompt Event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// This Adds Click Event Handler on butInstall Element
butInstall.addEventListener('click', async () => {
    const promptEv = window.deferredPrompt;
    if (!promptEv) {
        return;
    }
    promptEv.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// This Will Reset deferredPrompt to Null When App is Installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
