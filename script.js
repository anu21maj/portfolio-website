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

// Dark Mode Toggle
const darkModeButton = document.getElementById("darkModeToggle");
const body = document.body;

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Store dark mode preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});



