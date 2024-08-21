// Variables for navigation items and corresponding sections
var home = document.getElementById("home-li");
var about = document.getElementById("about-li");
var service = document.getElementById("service-li");
var portfolio = document.getElementById("portfolio-li");
var resume = document.getElementById("resume-li");
var contact = document.getElementById("contact-li");

var mobHome = document.getElementById("mobileHome");
var mobAbout = document.getElementById("mobileAbout");
var mobService = document.getElementById("mobileService");
var mobPortfolio = document.getElementById("mobilePortfolio");
var mobResume = document.getElementById("mobileResume");
var mobContact = document.getElementById("mobileContact");

var homeSection = document.getElementById("home-section");
var aboutSection = document.getElementById("about-section");
var serviceSection = document.getElementById("service-section");
var portfolioSection = document.getElementById("portfolio-section");
var resumeSection = document.getElementById("resume-section");
var contactSection = document.getElementById("contact-section");

var navItems = [home, about, service, portfolio, resume, contact];
var mobNavItems = [mobHome, mobAbout, mobService, mobPortfolio, mobResume, mobContact];
var sections = [homeSection, aboutSection, serviceSection, portfolioSection, resumeSection, contactSection];

// Scroll Event Handler
window.onscroll = () => {
    let top = window.scrollY + window.innerHeight / 2;

    for (let i = 0; i < sections.length; i++) {
        let sectionOffset = sections[i].offsetTop;
        let sectionHeight = sections[i].offsetHeight;

        // Check if the section is in the viewport
        if (top >= sectionOffset && top < sectionOffset + sectionHeight) {
            setActive(navItems[i], mobNavItems[i]);
            break;
        }
    }
};

// Click Event Handlers for desktop and mobile nav items
navItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the section
        sections[index].scrollIntoView({ behavior: "smooth" });

        // Update the active class
        setActive(item, mobNavItems[index]);
    });
});

mobNavItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll to the section
        sections[index].scrollIntoView({ behavior: "smooth" });

        // Update the active class
        setActive(navItems[index], item);
    });
});

// Set Active Class Function
function setActive(desktopLink, mobileLink) {
    // Remove 'active' class from all nav items
    navItems.forEach(item => item.classList.remove("active"));
    mobNavItems.forEach(item => item.classList.remove("active"));

    // Add 'active' class to the clicked/current nav item
    desktopLink.classList.add("active");
    mobileLink.classList.add("active");
}

// CSS for smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';
