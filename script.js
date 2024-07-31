/***************************
    Loader JavaScript
****************************/
const body = document.body;
const loader = document.getElementById("loader");
body.onload = () => {
    loader.style.display = 'none';
}

/***************************
    Nav Bar JavaScript
****************************/
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = () => {
    navigation.classList.toggle("open");
}


/* var home = document.getElementById("home-li")
var about = document.getElementById("about-li")
var service = document.getElementById("service-section")
var portfolio = document.getElementById("portfolio-section")
var resume = document.getElementById("resume-section")
var contact = document.getElementById("contact-section")
home.classList.add("active")
window.onscroll = function() {
        if (document.body.scrollTop > 50) {
            home.classList.remove("active")
            about.classList.add("active")
        }
    } */
/* window.addEventListener("scroll", () => {
    if (body.scrollTop > 50) {
        home.classList.remove("active")
        about.classList.add("active")
    }
}) */


/********************************
    Light/Dark Mode JavaScript
********************************/

// Navbar Const
const ChangeColor = document.getElementById("modeChange");
const text = document.getElementById("text");
const darkMode = document.getElementById("darkMode");
const modeIcon = document.getElementById("mode-icon");

// Mobile Navbar Const
const MobileColorChange = document.getElementById("MobModeChange");
const MobDarkMode = document.getElementById("MobDarkMode");
const MobileText = document.getElementById("MobileText");
const MobModeIcon = document.getElementById("mob-mode-icon");

// Color Variable
var root = document.querySelector(":root");
var whiteStyles = getComputedStyle(root);
var white = whiteStyles.getPropertyValue("--white");
var blackStyles = getComputedStyle(root);
var black = blackStyles.getPropertyValue("--transparent-black");
var colorBlackStyles = getComputedStyle(root);
var colorBlack = colorBlackStyles.getPropertyValue("--black");
var grayStyles = getComputedStyle(root);
var gray = grayStyles.getPropertyValue("--heading-color");
var greyStyles = getComputedStyle(root);
var grey = greyStyles.getPropertyValue("--light-black");

// For Navbar Mode Change
ChangeColor.onclick = () => {
        darkMode.classList.toggle("active")
        if (darkMode.classList.contains("active")) {

            MobDarkMode.classList.remove("active");
            MobileText.innerHTML = "Dark Mode";
            MobModeIcon.innerHTML = '<i class=" fa-solid fa-moon"></i>';
            modeIcon.innerHTML = '<i class=" fa-solid fa-moon"></i>';
            root.style.setProperty("--white", "#0a0c0d");
            root.style.setProperty("--transparent-black", "#E0E0E0");
            root.style.setProperty("--light-black", "#E0E0E0");
            root.style.setProperty("--black", "#E0E0E0");
            root.style.setProperty("--heading-color", "#0a0c0d");
            text.innerHTML = "Dark Mode";
            body.style.backgroundImage = "url(main-background.jpg)";

        } else {
            MobDarkMode.classList.add("active");
            MobileText.innerHTML = "Light Mode";
            MobModeIcon.innerHTML = '<i class=" fa-solid fa-sun"></i>';
            modeIcon.innerHTML = '<i class=" fa-solid fa-sun"></i>';
            text.innerText = "Light Mode";
            root.style.setProperty("--white", "#E0E0E0");
            root.style.setProperty("--transparent-black", "rgba(0, 0, 0, 0.25)");
            root.style.setProperty("--light-black", "rgb(33, 37, 41, 0.5)");
            root.style.setProperty("--black", "#0a0c0d");
            root.style.setProperty("--heading-color", "#767676");
            body.style.backgroundImage = "url(white-background.jpg)";
        }
    }
    // For Mobile Navbar Mode Change
MobileColorChange.onclick = () => {
    MobDarkMode.classList.toggle("active")
    if (MobDarkMode.classList.contains("active")) {
        darkMode.classList.remove("active");
        text.innerHTML = "Dark Mode";
        modeIcon.innerHTML = '<i class=" fa-solid fa-moon"></i>';
        MobModeIcon.innerHTML = '<i class=" fa-solid fa-moon"></i>';
        root.style.setProperty("--white", "#0a0c0d");
        root.style.setProperty("--transparent-black", "#E0E0E0");
        root.style.setProperty("--light-black", "#E0E0E0");
        root.style.setProperty("--black", "#E0E0E0");
        root.style.setProperty("--heading-color", "#0a0c0d");
        MobileText.innerHTML = "Dark Mode";
        body.style.backgroundImage = "url(main-background.jpg)";
    } else {
        darkMode.classList.add("active");
        text.innerHTML = "Light Mode";
        modeIcon.innerHTML = '<i class=" fa-solid fa-sun"></i>';
        MobModeIcon.innerHTML = '<i class=" fa-solid fa-sun"></i>';
        MobileText.innerText = "Light Mode";
        root.style.setProperty("--white", "#E0E0E0");
        root.style.setProperty("--transparent-black", "rgba(0, 0, 0, 0.25)");
        root.style.setProperty("--light-black", "rgb(33, 37, 41, 0.5)");
        root.style.setProperty("--black", "#0a0c0d");
        root.style.setProperty("--heading-color", "#767676 ");
        body.style.backgroundImage = "url(white-background.jpg)";
    }
}

/***************************
    Back To Top JavaScript
****************************/
let BackToTop = document.getElementById("backToTop");


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        BackToTop.style.display = "block";
    } else {
        BackToTop.style.display = "none";
    }
}

window.onscroll = function() { scrollFunction() };

function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}