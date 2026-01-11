window.GoBack = {
  stack: [],
  push: function(htmlContent, screenObj) {
    this.stack.push({ html: htmlContent, screen: screenObj });
    this.updateButton();
  },
  pop: function() {
    if (this.stack.length === 0) return;

    const body = AppLayout.approot.querySelector("#app-body");
    const last = this.stack.pop();
    if (body) body.innerHTML = last.html;

    // Restore previous screen name
    const screenNameEl = AppLayout.approot.querySelector("#screen-name");
    if (screenNameEl && last.screen && last.screen.name) {
      screenNameEl.textContent = last.screen.name;
      AppLayout.currentScreen = last.screen;
    }

    // Call onMount of the previous screen
    if (last.screen && typeof last.screen.onMount === "function") last.screen.onMount();

    this.updateButton();
  },
  updateButton: function() {
    const btn = AppLayout.approot.querySelector("#go-back-btn");
    if (!btn) return;
    btn.hidden = this.stack.length === 0;
  }
};

// Attach GoBack button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("go-back-btn");
  if (btn) btn.addEventListener("click", () => window.GoBack.pop());
});
