"use strict";

// ============mobile menu toggler===================
const menuBtn = document.getElementById("openMenuBtn");
const navContainer = document.getElementById("mobileNavContainer");
const menuIcon = document.getElementById("menuIcon");

navContainer.style.right = "-767px";

menuBtn.onclick = function () {

    if (navContainer.style.right === "-767px") {
        navContainer.style.right = "0"
        menuIcon.classList.add("bx-x");
        menuIcon.classList.remove("bx-menu");
    }
    else {
        navContainer.style.right = "-767px";
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }
}

// ========when click on navlink it will hide the navbar========
const navLink = Array.from(document.getElementsByClassName("navLink"));

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        navContainer.style.right = "-767px";
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    });
}

// =============change navbar color on scroll==============
const nav = document.querySelector(".navContainer");

window.addEventListener("scroll", ()=>{
    nav.classList.toggle("windowScroll", window.scrollY > 0);
});

// ==============Slider=============
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});