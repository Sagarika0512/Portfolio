
// lazyload.js

document.addEventListener("DOMContentLoaded", function() {
    const lazyloadImages = document.querySelectorAll(".lazy");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
  
    lazyloadImages.forEach(img => {
      observer.observe(img);
    });
  });
  
  


//CLIENT SIDE VALIDATION
/*document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        contactForm.classList.add("was-validated");
    });
});

/*git branch -m branch main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

*/
  