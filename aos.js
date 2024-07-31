//1. Vertically Reveal Animation

function FadeTop() {
    var fadeTop = document.querySelectorAll(".fade-top");
    for (var i = 0; i < fadeTop.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = fadeTop[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            fadeTop[i].classList.add("active");
        } else {
            fadeTop[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", FadeTop);
// end-fade-top

function FadeDown() {
    var fadeDown = document.querySelectorAll(".fade-down");
    for (var i = 0; i < fadeDown.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = fadeDown[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            fadeDown[i].classList.add("active");
        } else {
            fadeDown[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", FadeDown);
// end-fade-down

// END-ANIMATION

//2. Horizontally Reveal Animation

function fadeLeft() {
    var FadeLeft = document.querySelectorAll(".fade-left");
    for (var i = 0; i < FadeLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = FadeLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            FadeLeft[i].classList.add("active");
        } else {
            FadeLeft[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeLeft);
// end-fade-left

function fadeRight() {
    var FadeRight = document.querySelectorAll(".fade-right");
    for (var i = 0; i < FadeRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = FadeRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            FadeRight[i].classList.add("active");
        } else {
            FadeRight[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeRight);
// end-fade-right

// END-ANIMATION

//3. Fade-In Animation
function fadeIn() {
    var FadeIn = document.querySelectorAll(".fade-in");
    for (var i = 0; i < FadeIn.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = FadeIn[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            FadeIn[i].classList.add("active");
        } else {
            FadeIn[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", fadeIn);
// END-ANIMATION

//Credit goes to: https://codepen.io/alvarotrigo/pen/PoKamZy