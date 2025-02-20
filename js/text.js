document.addEventListener("DOMContentLoaded", () => {
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

    // Initialize Typed.js on the span with the class `multiple-text`
    new Typed(".multiple-text", options);
});
