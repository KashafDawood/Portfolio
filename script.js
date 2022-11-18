"use strict";

// ============mobile menu toggler===================
const menuBtn = document.getElementById("openMenuBtn");
const navContainer = document.getElementById("mobileNavContainer");
const menuIcon = document.getElementById("menuIcon");

navContainer.style.right = "-767px";

menuBtn.onclick = function(){

    if(navContainer.style.right === "-767px"){
        navContainer.style.right = "0"
        menuIcon.classList.add("uil-multiply");
        menuIcon.classList.remove("uil-bars");
    }
    else{
        navContainer.style.right = "-767px";
        menuIcon.classList.remove("uil-multiply");
        menuIcon.classList.add("uil-bars");
    }
}

// ========when click on navlink it will hide the navbar========
const navLink = Array.from(document.getElementsByClassName("navLink"));

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", function(){
        navContainer.style.right = "-767px";
        menuIcon.classList.remove("uil-multiply");
        menuIcon.classList.add("uil-bars");
    }); 
}