
// Variables
const toggleBtn = document.querySelector(".btn-toggle");
const colorLight = '#eee';
const colorDark = '#222';

// Get Themes
let initialTheme = 'light';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemThemeLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const storedTheme = localStorage.getItem("theme");

// Set initial Theme
if (storedTheme) {
    initialTheme = storedTheme;
} else if (systemTheme) {
    initialTheme = systemTheme;
}
document.documentElement.setAttribute('data-theme', initialTheme );



// Functions
function getSystemPreferences() {
    if (window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
          } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
          } else if (window.matchMedia("(prefers-color-scheme: no-preference)").matches) {
            return false
          }
    }
}


function toggleTheme() {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("theme", 'light');
        const metaTag = document.querySelector('meta[name="theme-color"]')
        metaTag.setAttribute('content', colorLight );
    } else {
        document.documentElement.setAttribute('data-theme', 'dark' );
        localStorage.setItem("theme", 'dark');
        const metaTag = document.querySelector('meta[name="theme-color"]')
        metaTag.setAttribute('content', colorDark );
    }
    
}


// Events
toggleBtn.addEventListener("click", toggleTheme );