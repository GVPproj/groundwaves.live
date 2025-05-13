// FORCE LIGHT THEME ONLY
const primaryColorScheme = "light";

// Clear any stored theme preference
if (localStorage.getItem("theme")) {
  localStorage.removeItem("theme");
}

function getPreferTheme() {
  // Always return light theme regardless of any preferences
  return "light";
}

let themeValue = "light";

function setPreference() {
  // Always set to light theme in localStorage
  localStorage.setItem("theme", "light");
  reflectPreference();
}

function reflectPreference() {
  // Always set data-theme to light
  document.firstElementChild.setAttribute("data-theme", "light");

  // Update theme button if it exists
  document.querySelector("#theme-btn")?.setAttribute("aria-label", "light");

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);
  }
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // Force light theme on load
    themeValue = "light";
    reflectPreference();
    
    // Clear any dark theme that might have been set
    if (document.firstElementChild.getAttribute("data-theme") !== "light") {
      document.firstElementChild.setAttribute("data-theme", "light");
    }
    
    // Disable any theme toggle functionality
    const themeBtn = document.querySelector("#theme-btn");
    if (themeBtn) {
      themeBtn.removeEventListener("click", () => {});
      themeBtn.style.display = "none"; // Optionally hide the button
    }
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// MODIFIED: Commented out system theme sync to force light mode only
/*
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });
*/
