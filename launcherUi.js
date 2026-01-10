<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- =============================== -->
  <!-- MOBILE LAYOUT STYLES --------- -->
  <!-- =============================== -->
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-family: sans-serif;
    }

    .mobile.layout {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      background: linear-gradient(to right, #1a1a1a, #333); /* placeholder for lifestyle/business sides */
      position: relative;
      animation: backgroundAnim 5s infinite alternate; /* placeholder animation */
    }

    /* Square Circle Design */
    .launcher-logo {
      width: 200px;
      height: 200px;
      background-color: #000; /* black square circle */
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: 32px;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }

    .launcher-logo .focas {
      color: #00f; /* blue */
      margin-right: 2px;
    }

    .launcher-logo .lyn {
      color: #fff; /* white */
      margin-right: 2px;
    }

    .launcher-logo .Mios {
      color: gold; /* gold */
    }

    @keyframes backgroundAnim {
      0% { background-position: 0 0; }
      100% { background-position: 100% 0; }
    }
  </style>
</head>
<body>
  <!-- =============================== -->
  <!-- MOBILE LAYOUT ----------------- -->
  <!-- =============================== -->
  <div class="mobile layout">
    <div class="launcher-logo">
      <span class="focus">Focas</span>
      <span class="lyn">LYN</span>
      <span class="os">MIOS</span>
    </div>
  </div>

  <!-- =============================== -->
  <!-- TRANSITION TRIGGER TO transition.js -->
  <!-- =============================== -->
  <script>
    // When the logo (square circle) is clicked, notify transition.js
    const launcherLogo = document.querySelector('.launcher-logo');
    launcherLogo.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('launcherTriggered'));
    });
  </script>
</body>
</html>
