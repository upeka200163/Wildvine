'use strict';

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

function openTab(evt, tabId) {
  // 1. හැම content එකක්ම හංගන්න
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
    tabcontent[i].style.display = "none"; // මේක අනිවාර්යයෙන්ම ඕනේ
  }

  // 2. හැම button එකකම active class එක අයින් කරන්න
  var tablinks = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // 3. ක්ලික් කරපු content එක පෙන්වන්න
  var activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = "block";
    activeTab.classList.add("active");
  }

  // 4. බටන් එක active (කොළ පාට) කරන්න
  evt.currentTarget.classList.add("active");
}