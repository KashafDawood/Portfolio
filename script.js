"use strict";

// ============mobile menu toggler===================
const menuBtn = document.getElementById("openMenuBtn");
const navContainer = document.getElementById("mobileNavContainer");

navContainer.style.right = "-767px";

menuBtn.onclick = function(){

    (navContainer.style.right === "-767px")? navContainer.style.right = "0" : navContainer.style.right = "-767px";
}

// ========when click on navlink it will hide the navbar========
const navLink = Array.from(document.getElementsByClassName("navLink"));

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("click", function(){
        navContainer.style.right = "-767px";
    }); 
}