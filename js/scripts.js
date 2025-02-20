const options = {
    strings: [
        "A Software Engineer",
        "A Problem Solver",
        "A Tech Enthusiast",
        "A Creator of Solutions"
    ], // Describes you without repeating the "Hi, I'm Charlene"
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true, // Loops the animation
};

function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();

    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const formattedTime = now.toLocaleString('en-US', options);
    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 60000);
updateTime();


document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const desktop = document.querySelector('.desktop-container');
    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            // Remove 'highlighted' class from all icons
            icons.forEach(i => i.classList.remove('highlighted'));
            // Add 'highlighted' class to the clicked icon
            icon.classList.add('highlighted');
            event.stopPropagation();
        });

        icon.addEventListener('dblclick', (event) => {
            const app = icon.querySelector('p').textContent.toLowerCase().replace(/\s+/g, '');; // Get the app name from the icon text
            openWindow(app);
           
        });

    });

    desktop.addEventListener('click',  () => {
        // Remove 'highlighted' class from all icons
        icons.forEach(i => i.classList.remove('highlighted'));
    });

    const typed = new Typed('.multiple-text', options);


});


// This function is triggered to open the window when double-clicked
function openWindow(app) {
    const windowElement = document.getElementById(`${app}-window`);
    const openAppsBar = document.getElementById("open-apps");

    // Find the clicked folder icon
    const clickedFolder = document.querySelector(`.icon[ondblclick="openWindow('${app}')"] img`);

    if (windowElement) {
        // Show the window using the new visible class
        windowElement.classList.add("visible");
        windowElement.style.display = 'flex';

        // Create app indicator only if it doesn't exist
        if (!document.getElementById(`${app}-indicator`)) {
            const appIndicator = document.createElement("div");
            appIndicator.id = `${app}-indicator`;
            appIndicator.classList.add("app-indicator");
            
            // Create and set the text directly
            appIndicator.textContent = app.charAt(0).toUpperCase() + app.slice(1);
            appIndicator.onclick = () => restoreWindow(app);

            openAppsBar.appendChild(appIndicator);
        }
    }
}

function closeWindow(app) {
    const windowElement = document.getElementById(`${app}-window`);
    const appIndicator = document.getElementById(`${app}-indicator`);

    if (windowElement) {
        windowElement.classList.remove("visible");
        windowElement.style.display = 'none';
    }
    
    if (appIndicator) {
        appIndicator.classList.add("slide-out");
        setTimeout(() => {
            appIndicator.remove();
        }, 500);
    }
}

// Add the restore window function if it's not already defined
function restoreWindow(app) {
    const windowElement = document.getElementById(`${app}-window`);
    if (windowElement) {
        windowElement.classList.add("visible");
        windowElement.style.display = 'flex';
    }
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function restart() {
    alert("Restarting... (You can customize this action)");
}

function shutdown() {
    alert("Shutting down... (You can customize this action)");
}

function sleep() {
    alert("Sleeping... (You can customize this action)");
}


