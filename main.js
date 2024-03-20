//CLIENT SIDE VALIDATION
document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        contactForm.classList.add("was-validated");
    });
});