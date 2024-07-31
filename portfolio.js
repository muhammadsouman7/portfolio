/***************************
    Portfolio JavaScript
***************************/

//For Portfolio Item Abbas Yousaf
let slideItemAbbasYousaf = 1;
showSlidesAbbasYousaf(slideItemAbbasYousaf);

function itemAbbasYousaf(n) {
    showSlidesAbbasYousaf(slideItemAbbasYousaf += n);
}

function currentSlideAbbasYousaf(n) {
    showSlidesAbbasYousaf(slideItemAbbasYousaf = n);
}

function showSlidesAbbasYousaf(n) {
    let i;
    let slidesAbbasYousaf = document.getElementsByClassName("item-abbas-yousaf");
    if (n > slidesAbbasYousaf.length) {
        slideItemAbbasYousaf = 1
    }
    if (n < 1) {
        slideItemAbbasYousaf = slidesAbbasYousaf.length;
    }
    for (i = 0; i < slidesAbbasYousaf.length; i++) {
        slidesAbbasYousaf[i].style.display = "none";
    }
    slidesAbbasYousaf[slideItemAbbasYousaf - 1].style.display = "block";
}

//For Portfolio Item NewAims Pharmaceuticals
let slideItemNewAims = 1;
showSlidesNewAims(slideItemNewAims);

function itemNewAims(n) {
    showSlidesNewAims(slideItemNewAims += n);
}

function currentSlideNewAims(n) {
    showSlidesNewAims(slideItemNewAims = n);
}

function showSlidesNewAims(n) {
    let i;
    let slidesNewAims = document.getElementsByClassName("item-newaims");
    if (n > slidesNewAims.length) {
        slideItemNewAims = 1
    }
    if (n < 1) {
        slideItemNewAims = slidesNewAims.length;
    }
    for (i = 0; i < slidesNewAims.length; i++) {
        slidesNewAims[i].style.display = "none";
    }
    slidesNewAims[slideItemNewAims - 1].style.display = "block";
}

//For Portfolio Item Sazhia Motors
let slideItemSazhiaMotors = 1;
showSlidesSazhiaMotors(slideItemSazhiaMotors);

function itemSazhiaMotors(n) {
    showSlidesSazhiaMotors(slideItemSazhiaMotors += n);
}

function currentSlideSazhiaMotors(n) {
    showSlidesSazhiaMotors(slideItemSazhiaMotors = n);
}

function showSlidesSazhiaMotors(n) {
    let i;
    let slidesSazhiaMotors = document.getElementsByClassName("item-sazhia-motors");
    if (n > slidesSazhiaMotors.length) {
        slideItemSazhiaMotors = 1
    }
    if (n < 1) {
        slideItemSazhiaMotors = slidesSazhiaMotors.length;
    }
    for (i = 0; i < slidesSazhiaMotors.length; i++) {
        slidesSazhiaMotors[i].style.display = "none";
    }
    slidesSazhiaMotors[slideItemSazhiaMotors - 1].style.display = "block";
}

//For Portfolio Item Reflex Designs
let slideItemReflex = 1;
showSlidesReflex(slideItemReflex);

function itemReflex(n) {
    showSlidesReflex(slideItemReflex += n);
}

function currentSlideReflex(n) {
    showSlidesReflex(slideItemReflex = n);
}

function showSlidesReflex(n) {
    let i;
    let slidesReflex = document.getElementsByClassName("item-reflex-designs");
    if (n > slidesReflex.length) {
        slideItemReflex = 1
    }
    if (n < 1) {
        slideItemReflex = slidesReflex.length;
    }
    for (i = 0; i < slidesReflex.length; i++) {
        slidesReflex[i].style.display = "none";
    }
    slidesReflex[slideItemReflex - 1].style.display = "block";
}