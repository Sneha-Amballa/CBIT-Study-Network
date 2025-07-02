document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Get error elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        let isValid = true;

        // Name validation
        if (name === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Email validation (Basic format check)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Message validation
        if (message === "") {
            messageError.style.display = "block";
            isValid = false;
        } else {
            messageError.style.display = "none";
        }

        // If form is valid, submit it (for now, just log the data)
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset(); // Clear form fields
        }
    });
});
