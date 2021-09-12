
{/* <nav aria-label="Mythical University">
  <ul id="exTest" class="disclosure-nav">
    <li>
      <button aria-expanded="true" aria-controls="id_about_menu">
        About
      </button>
      <ul id="id_about_menu">
        <li>
          <a href="#mythical-page-content">
            Overview
          </a>
        </li>
        <li>
          <a href="#mythical-page-content">
            Administration
          </a>
        </li>
        <li>
          <a href="#mythical-page-content">
            Facts
          </a>
        </li> */}

// https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element

function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var firstFocusableEl = focusableEls[0];  
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;
  
    element.addEventListener('keydown', function(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }