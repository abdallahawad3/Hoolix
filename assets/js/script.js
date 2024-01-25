"use strict";

// DOM elements
const menuButton = document.getElementById("menu");
let overlay = document.getElementById("overlay");
let navbar = document.getElementById("nav");
let menuHiddenIcon = document.querySelector(".nav-top i");
let menuLinks = document.querySelectorAll(".nav-bar.active .nav-list a");
let header = document.querySelector(".header");
let menuLinksArray = Array.from(menuLinks);

// Event listener for scroll to toggle header class
window.addEventListener("scroll", () => {
  if (scrollY >= 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Event listeners for menu interactions
menuButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

menuHiddenIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Event listener for menu link clicks
menuLinksArray.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// FAQ section //
let showDetails = document.querySelectorAll(".faq-right .box h4");
let paragraphs = document.querySelectorAll(".faq-right .box p");
let showDetailsArray = Array.from(showDetails);
let paragraphsArray = Array.from(paragraphs);

// Event listeners for FAQ section interactions
showDetailsArray.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("active");
    element.classList.toggle("active");
    // Toggle icon based on active class
    element.nextElementSibling.className == "active"
      ? (element.firstElementChild.className = "fa-solid fa-minus")
      : (element.firstElementChild.className = "fa-solid fa-plus");
  });
});
