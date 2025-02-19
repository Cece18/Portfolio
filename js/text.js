
// Initialize the type animation for the About Me widget
document.addEventListener("DOMContentLoaded", () => {
    const options = {
        strings: ["A Software Engineer", "A Problem Solver", "An Innovator"], // Add any phrases you'd like
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true, // Loops the animation
    };

    // Initialize Typed.js on the span with the class `multiple-text`
    new Typed(".multiple-text", options);
});

