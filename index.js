// ------------------------------
// GLOBAL APP LAYOUT OBJECT
// ------------------------------
window.AppLayout = {
  orientation: null,         // portrait | landscape
  currentLayout: null,       // mobile-layout | desktop-layout
  approot: null,             // DOM container
};

// ------------------------------
// ORIENTATION DETECTION
// ------------------------------
function detectOrientation() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (height >= width) {
    AppLayout.orientation = "portrait";
    AppLayout.currentLayout = "mobile-layout";
  } else {
    AppLayout.orientation = "landscape";
    AppLayout.currentLayout = "desktop-layout";
  }

  AppLayout.approot.className = AppLayout.currentLayout;
  document.dispatchEvent(new CustomEvent("orientationChanged", { detail: AppLayout }));
}

// ------------------------------
// BODY RENDERER (FORWARD NAVIGATION)
// ------------------------------
const Renderer = {
  init: function(rootId) {
    AppLayout.approot = document.getElementById(rootId);
  },
  renderScreen: function(screenObj) {
    const body = AppLayout.approot.querySelector("#app-body");
    if (!body) return;

    // Push current screen to go-back stack
    if (window.GoBack) window.GoBack.push(body.innerHTML, AppLayout.currentScreen);

    // Render HTML for current layout
    const html = screenObj[AppLayout.currentLayout] || `<p>Coming Soon</p>`;
    body.innerHTML = html;

    // Update screen name dynamically
    const screenNameEl = AppLayout.approot.querySelector("#screen-name");
    if (screenNameEl && screenObj.name) screenNameEl.textContent = screenObj.name;

    // Store current screen
    AppLayout.currentScreen = screenObj;

    // Call screen's onMount if exists
    if (typeof screenObj.onMount === "function") screenObj.onMount();
  }
};

// ------------------------------
// INIT APP
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  detectOrientation();
  Renderer.init("approot");

  // Load launcher screen first
  Renderer.renderScreen(LauncherUI);
});

// ------------------------------
// LISTEN FOR ORIENTATION CHANGES
// ------------------------------
window.addEventListener("resize", detectOrientation);
