document.addEventListener("DOMContentLoaded", function () {
    // Notification Alert Simulation
    const notificationIcon = document.querySelector(".notification a i");
    if (notificationIcon) {
        notificationIcon.addEventListener("click", function (event) {
            event.preventDefault();
            alert("You have no new notifications.");
        });
    }

    // Profile Picture Click Interaction
    const profileImage = document.querySelector(".profile img");
    if (profileImage) {
        profileImage.addEventListener("click", function () {
            alert("Redirecting to your profile...");
            window.location.href = "profile_page.html";
        });
    }
});
