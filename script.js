var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphics Designer', 'Web Designer', 'Video Editor'],
    typeSpeed: 50,
});
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;
const navbar = document.querySelector("nav");

// Function to toggle between light and dark mode
toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
});

// Apply stored theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
} else {
    body.classList.add("light-mode");
}





