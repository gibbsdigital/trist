

let hamburger = document.getElementById('hamburger'),
    navMenu = document.getElementById('navMenu'),
    closeBtn = document.getElementById('closeNavMenu'),
    main = document.querySelector('main'),
    focusableInNav = document.querySelectorAll(
      '#navMenu [href], #navMenu button, #navMenu input, #navMenu select, #navMenu textarea, #navMenu [tabindex]:not([tabindex="-1"])'
    ),
    transitionTime = 100, // This matches what's in the CSS for the transition
    firstFocusableElement = focusableInNav[0],
    lastFocusableElement = focusableInNav[focusableInNav.length-1],
    overlay = document.createElement('div');

document.body.appendChild(overlay);

function openMenu () {
  // Save current focus
  focusedElementBeforeModal = document.activeElement;
  navMenu.classList.add('visible', 'active');
  overlay.classList.add('overlay');
  main.classList.add('menuOpen');
  main.setAttribute("aria-hidden", "true");
  main.setAttribute("tabindex", -1);
  /* hamburger.classList.add('menuOpen'); */
  hamburger.setAttribute("aria-hidden", "true");
  hamburger.setAttribute("aria-expanded", "true");
  window.setTimeout(function () {
    //closeBtn.focus();
    firstFocusableElement.focus();
    // Listen for indicators to close the modal
    overlay.addEventListener('click', closeMenu );
    document.addEventListener('keyup', function (e) {
      if (e.key === "Escape") {
        closeMenu();
      }
      // 27 = ESC key
      if (e.keyCode === 27) {
        closeMenu();
      }
    }, false);
  }, transitionTime);
}

function closeMenu () {
  navMenu.classList.remove("active");
  overlay.classList.remove('overlay');
  main.classList.remove('menuOpen');
  main.setAttribute('aria-hidden', false);
  window.setTimeout(function () {
    navMenu.classList.remove('visible');
    hamburger.setAttribute("aria-hidden", "false");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.classList.remove('menuOpen');
    focusedElementBeforeModal.focus();
  }, transitionTime);
}

function moveFocusToTop(e) {
  if (e.key === "Tab" && !e.shiftKey) {
    e.preventDefault();
    firstFocusableElement.focus();
  }
}

function moveFocusToBottom(e) {
  if (e.key === "Tab" && e.shiftKey) {
    e.preventDefault();
    lastFocusableElement.focus();
  }
}

hamburger.addEventListener('click', openMenu )
/* hamburger.addEventListener('click', function () {
  if (navMenu.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
}, false); */

closeBtn.addEventListener('click', closeMenu );
firstFocusableElement.addEventListener('keydown', moveFocusToBottom );
lastFocusableElement.addEventListener("keydown", moveFocusToTop);
/* closeBtn.addEventListener('click', function () {
  closeMenu();
}, false); */

/* hamburgerMenuBtn.addEventListener('click', openNav );
  closeBtn.addEventListener('click', closeNav );
  slideNav.addEventListener('keyup', closeNav );
  firstFocusableElement.addEventListener('keydown', moveFocusToBottom );
  lastFocusableElement.addEventListener("keydown", moveFocusToTop); */
/* 

let hamburger = document.getElementById('hamburger'),
navMenu = document.getElementById('navMenu'),
closeMenu = document.getElementById('closeMenu'),
main = document.querySelector('main'),
focusableInNav = document.querySelectorAll('nav button, nav a'),
transitionTime = 100, // This matches what's in the CSS for the transition
overlay = document.createElement('div');

document.body.appendChild(overlay);

function openMenu () {
hamburger.setAttribute('aria-expanded', true);
navMenu.classList.remove('vh');
navMenu.classList.remove('hidden');
main.classList.add('menuOpen');
hamburger.classList.add('menuOpen');
hamburger.classList.add('hamburger-z');
window.setTimeout(function () {
closeMenu.focus();
overlay.classList.add('overlay');
overlay.addEventListener('click', function () {
  closeMenu();
}, false);

document.addEventListener('keyup', function (e) {
  // 27 = ESC key
  if (e.keyCode === 27) {
    closeMenu();
  }
}, false);
}, transitionTime);
}

function closeMenu () {
hamburger.setAttribute('aria-expanded', false);
navMenu.classList.add('hidden');
main.classList.remove('menuOpen');
hamburger.classList.remove('menuOpen');
overlay.classList.remove('overlay');
window.setTimeout(function () {
navMenu.classList.add('vh');
hamburger.focus();
overlay.classList.remove('overlay');
hamburger.classList.remove('hamburger-z');
}, transitionTime);
}

hamburger.addEventListener('click', function () {
if (navMenu.classList.contains('hidden')) {
openMenu();
} else {
closeMenu();
}
}, false);

closeMenu.addEventListener('click', function () {
closeMenu();
}, false);
 */