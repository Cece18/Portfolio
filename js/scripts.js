


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

function openWindow(url) {
    window.location.href = url;
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

function openWindow(app) {
    const windowElement = document.getElementById(`${app}-window`);
    const openAppsBar = document.getElementById("open-apps");

    // Find the clicked folder icon (assumes the folder clicked has the app name in its 'ondblclick')
    const clickedFolder = document.querySelector(`.icon[ondblclick="openWindow('${app}')"] img`);

    if (windowElement) {
        // Show the window
        windowElement.style.display = "block";
        windowElement.style.visibility = "visible"; // Ensure it's fully visible

        if (lastHighlighted) {
            lastHighlighted.classList.remove("highlighted");
            lastHighlighted = null;
        }

        // Add an app indicator to the bottom bar if it doesn't exist
        if (!document.getElementById(`${app}-indicator`)) {
            const appIndicator = document.createElement("div");
            appIndicator.id = `${app}-indicator`;
            appIndicator.classList.add("app-indicator");

            // Dynamically set the app icon from the clicked folder's image
            const appIcon = document.createElement("img");
            appIcon.src = clickedFolder ? clickedFolder.src : `images/default-icon.png`; // Use clicked folder's icon or default
            appIcon.alt = `${app} Icon`;
            appIcon.classList.add("app-indicator-icon");

            const appName = document.createElement("span");
            appName.textContent = app.charAt(0).toUpperCase() + app.slice(1); // Capitalize app name

            // Append icon and name to the indicator
            appIndicator.appendChild(appIcon);
            appIndicator.appendChild(appName);

            // Add a click event to restore the app window
            appIndicator.onclick = () => restoreWindow(app);

            console.log("Creating app indicator with ID:", `${app}-indicator`);

            openAppsBar.appendChild(appIndicator);
        }

        if (app === 'aboutme') {
            startTypeAnimation(); // Start animation when About Me is opened
        }

        setTimeout(() => {
            appIndicator.classList.remove("slide-in");
        }, 500); // Match the animation duration
    }
}




function closeWindow(app) {
    const windowElement = document.getElementById(`${app}-window`); // Adjust to match window ID
    const appIndicator = document.getElementById(`${app}-indicator`); 


    if (windowElement) {
        // Close the window
        windowElement.style.display = "none";
    }
    if (appIndicator) {
        appIndicator.classList.add("slide-out");

        // Remove app indicator after animation
        setTimeout(() => {
            appIndicator.remove();
        }, 500);
    } else {
        console.log("NOT FOUND :", appIndicator);
    }
}


let lastHighlighted = null;

function highlightFolder(folder) {
    // Remove highlight from previously selected folder
    if (lastHighlighted) {
        lastHighlighted.classList.remove("highlighted");
    }

    // Highlight the clicked folder
    folder.classList.add("highlighted");
    lastHighlighted = folder;
}
function clearHighlight() {
    // Remove highlight if a folder is currently highlighted
    if (lastHighlighted) {
        lastHighlighted.classList.remove("highlighted");
        lastHighlighted = null;
    }
}


