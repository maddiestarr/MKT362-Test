// ========================================
// NAVIGATION JAVASCRIPT
// ========================================


// ----------------------------------------
// SMOOTH SCROLLING
// ----------------------------------------

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = this.getAttribute("href");

        // Ignore empty "#" links
        if (targetID === "#") {
            return;
        }

        const targetSection = document.querySelector(targetID);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ----------------------------------------
// ACTIVE PRIMARY NAVIGATION
// ----------------------------------------

const sections = document.querySelectorAll(
    "main section[id]"
);

const primaryNavLinks = document.querySelectorAll(
    ".primary-nav a"
);


function updateNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        // Detect which section is currently
        // closest to the top of the screen
        if (sectionTop <= 180) {
            currentSection = section.getAttribute("id");
        }

    });


    primaryNavLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkSection =
            link.getAttribute("href").replace("#", "");

        if (linkSection === currentSection) {
            link.classList.add("active");
        }

    });

}


// Run navigation update when scrolling
window.addEventListener(
    "scroll",
    updateNavigation
);


// Run once when page loads
updateNavigation();


// ----------------------------------------
// MOBILE NAVIGATION
// ----------------------------------------

const mobileLinks = document.querySelectorAll(
    ".primary-nav a, .secondary-nav a"
);

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Close mobile navigation if you
        // add a mobile menu later.
        document.body.classList.remove("nav-open");

    });

});
