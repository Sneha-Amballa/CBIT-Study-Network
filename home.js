document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav_list a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Dynamic Welcome Message
    function updateWelcomeMessage() {
        const hour = new Date().getHours();
        let greeting = "Hello";

        if (hour < 12) {
            greeting = "Good Morning ☀️";
        } else if (hour < 18) {
            greeting = "Good Afternoon 🌤️";
        } else {
            greeting = "Good Evening 🌙";
        }

        document.querySelector(".welcome_statement h2").textContent = 
            `${greeting}, Welcome to CBIT Study Network!`;
    }

    updateWelcomeMessage();

    // Hover effect on boxes
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        box.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Sign-up button animation
    const signUpButton = document.querySelector(".button_signup button");
    
    if (signUpButton) {
        setInterval(() => {
            signUpButton.style.transform = "scale(1.1)";
            
            setTimeout(() => {
                signUpButton.style.transform = "scale(1)";
            }, 500);
        }, 1500);
    }
});
