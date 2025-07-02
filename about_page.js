document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle (If you plan to add a mobile menu)
    const navList = document.querySelector(".nav-list");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.style.fontSize = "24px";
    menuToggle.style.background = "none";
    menuToggle.style.border = "none";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.display = "none"; // Initially hidden

    document.querySelector(".navbar").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        navList.style.display = navList.style.display === "flex" ? "none" : "flex";
    });

    // Responsive behavior for small screens
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            navList.style.display = "none";
            menuToggle.style.display = "block";
        } else {
            navList.style.display = "flex";
            menuToggle.style.display = "none";
        }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Join Button Hover Animation
    const joinBtn = document.querySelector(".join_btn a");
    joinBtn.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s ease-in-out";
    });

    joinBtn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
