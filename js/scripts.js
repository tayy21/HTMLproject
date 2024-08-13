function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

function navigateToPage(pageURL) {
    window.location.href = pageURL;
  }


document.addEventListener('DOMContentLoaded', function() {
    const servicesCols = document.querySelectorAll('.services-col');
    servicesCols.forEach(function(col) {
        col.addEventListener('click', function() {
            if (window.location.pathname.includes("services.html")) {
                scrollToSection("one-on-one");
            } else {
               navigateToPage("services.html");
            }
        });
    });
});

const hamburgerIcon = document.getElementById('hamburger-icon');
hamburgerIcon.addEventListener('click', function() {
    toggleMobileMenu(this);
});

