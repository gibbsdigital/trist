// THEME TOGGLE https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#combining

// Get users system preferences, as well as stored (site) preferences.


// Grab the toogle btn
const btn = document.querySelector(".btn-toggle");

// Get the system preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if available
const currentTheme = localStorage.getItem("theme");

// If theme preference is dark, then toggle the .dark-theme class on the body
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  // If the theme preference is light, then toggle the .light-theme class on the body
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

document.documentElement.setAttribute('data-theme', currentTheme );

// Listen for a click event on the button 
btn.addEventListener("click", function () {
  // If the user's system preference is dark and matches our .dark-mode class, 
  // then oggle the light mode class
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  // Last, save the current preference to localStorage
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute('data-theme', theme );
});




//

"use strict";
document.createElement("main");
var toggleSwitch = document.querySelector(
  '.theme-toggle input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

var currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (typeof currentTheme == "undefined") {
  console.log("theme not stored");

  if (matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("prefer dark");
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
  } else if (matchMedia("(prefers-color-scheme: light)").matches) {
    console.log("prefers light");
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
  }
}

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener("change", switchTheme, false); //get header height and add some distance to main

var header = document.querySelector("header");
var main = document.querySelector("header");

function space() {
  var headerHeight = header.clientHeight + "px";
  document.querySelector("main").style.marginTop = headerHeight;
  console.log(headerHeight);
}

window.addEventListener("load", space);
window.addEventListener("resize", space);

//# sourceMappingURL=scripts-min.js.map




// This code assumes a Light Mode default
/* This condition checks whether the user has set a site preference for dark mode 
    OR a OS-level preference for Dark Mode 
    AND no site preference */
if (
  localStorage.getItem("theme") === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches &&
   !localStorage.getItem('theme'))
) {
  // if true, set the site to Dark Mode
  document.documentElement.setAttribute('color-mode', 'dark')
}


f (matchMedia("(prefers-color-scheme: dark)").matches) {
  console.log("prefer dark");
  document.documentElement.setAttribute("data-theme", "dark");
  toggleSwitch.checked = true;
} else if (matchMedia("(prefers-color-scheme: light)").matches) {
  console.log("prefers light");
  document.documentElement.setAttribute("data-theme", "light");
  toggleSwitch.checked = false;
}
