// ===============================
// APP CORE
// ===============================

const App = {
  root: document.getElementById("app-root"),

  detectOrientation() {
    return window.innerWidth > window.innerHeight
      ? "horizontal"
      : "portrait";
  },

  async loadFile(filePath) {
    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error("File not found: " + filePath);
      }

      const html = await response.text();
      this.render(html);
    } catch (err) {
      this.render(`
        <div style="padding:20px;color:red;">
          <h3>Error loading screen</h3>
          <p>${err.message}</p>
        </div>
      `);
    }
  },

  render(html) {
    this.root.innerHTML = html;
  },

  start() {
    const orientation = this.detectOrientation();
    console.log("Orientation:", orientation);

    // FIRST SCREEN
    this.loadFile("launcher.ui.html");
  }
};

// ===============================
// BOOT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  App.start();
});
