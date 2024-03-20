<<<<<<< HEAD
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
=======
/*git branch -m branch main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a*/

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
>>>>>>> c1d69f273b13aef3bec29c95281185e1d4ab4baf
