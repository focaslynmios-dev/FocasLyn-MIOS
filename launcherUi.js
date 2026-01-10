<!-- =============================== -->  
<!-- LAUNCHER UI MOBILE LAYOUT ----- -->  
<!-- =============================== -->  
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Launcher UI Mobile</title>
<style>
  /* ===== Reset & Base ===== */
  * { margin:0; padding:0; box-sizing:border-box; font-family: 'Segoe UI', sans-serif; }
  html, body { width:100%; height:100%; overflow:hidden; }

  /* ===== Animated Background ===== */
  body {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  /* Lifestyle & Business panels (animated floating text) */
  .floating-text {
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.1;
    animation: floatUp 15s linear infinite;
  }

  @keyframes floatUp {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-50vh) rotate(360deg); }
  }

  /* ===== Logo ===== */
  #logo {
    width: 140px;
    height: 140px;
    background: #000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 0 25px rgba(0,0,0,0.7);
    animation: bounce 2s infinite;
  }

  #logo span.focas { color: #1e90ff; font-size: 28px; font-weight: bold; }
  #logo span.mios { color: #ffd700; font-size: 20px; font-weight: bold; margin-top: -5px; }

  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* ===== Marketing Push ===== */
  #marketing {
    margin-top: 20px;
    font-size: 16px;
    text-align: center;
    max-width: 250px;
    line-height: 1.5;
    animation: fadeIn 2s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px);}
    to { opacity: 1; transform: translateY(0);}
  }

  /* ===== Start Button ===== */
  #start-btn {
    margin-top: 25px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(45deg, #1e90ff, #00bfff);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  }

  #start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 18px rgba(0,0,0,0.4);
  }
</style>
</head>
<body>

  <!-- Floating Lifestyle & Business labels -->
  <div class="floating-text" style="left:10%; animation-delay: 0s;">Lifestyle: Budgeting</div>
  <div class="floating-text" style="left:25%; animation-delay: 3s;">Lifestyle: Health</div>
  <div class="floating-text" style="left:40%; animation-delay: 5s;">Lifestyle: Goals</div>
  <div class="floating-text" style="left:60%; animation-delay: 2s;">Business: Finance</div>
  <div class="floating-text" style="left:75%; animation-delay: 6s;">Business: HR</div>
  <div class="floating-text" style="left:85%; animation-delay: 4s;">Business: Operations</div>
  <div class="floating-text" style="left:50%; animation-delay: 1s;">Business: Marketing</div>
  <div class="floating-text" style="left:30%; animation-delay: 5s;">Business: Leadership</div>

  <!-- Logo -->
  <div id="logo">
    <span class="focas">FocasLyn</span>
    <span class="mios">MIOS</span>
  </div>

  <!-- Marketing Push -->
  <div id="marketing">
    Start your journey in Lifestyle & Business.<br>
    Explore, learn, and manage everything effortlessly.
  </div>

  <!-- Start Button -->
  <button id="start-btn">Get Started</button>

<script>
  // Trigger transition.js for next screen
  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('launcherNextScreen', {
      detail: { message: 'LauncherUI clicked' }
    }));
  });
</script>

</body>
</html>

  <!-- =============================== -->  
<!-- LAUNCHER UI DESKTOP LAYOUT ---- -->  
<!-- =============================== -->  

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Launcher UI Desktop</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family: 'Segoe UI', sans-serif; }
  html, body { width:100%; height:100%; overflow:hidden; }

  body {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .floating-text {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    opacity: 0.1;
    animation: floatUp 20s linear infinite;
  }

  @keyframes floatUp {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-50vh) rotate(360deg); }
  }

  #logo {
    width: 220px;
    height: 220px;
    background: #000;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0 0 35px rgba(0,0,0,0.8);
    animation: bounce 2s infinite;
  }

  #logo span.focas { color: #1e90ff; font-size: 40px; font-weight: bold; }
  #logo span.mios { color: #ffd700; font-size: 28px; font-weight: bold; margin-top: -10px; }

  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  #marketing {
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
    max-width: 500px;
    line-height: 1.5;
    animation: fadeIn 2s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px);}
    to { opacity: 1; transform: translateY(0);}
  }

  #start-btn {
    margin-top: 40px;
    padding: 18px 40px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(45deg, #1e90ff, #00bfff);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 8px 18px rgba(0,0,0,0.3);
  }

  #start-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.4);
  }
</style>
</head>
<body>

  <div class="floating-text" style="left:10%; animation-delay: 0s;">Lifestyle: Budgeting</div>
  <div class="floating-text" style="left:25%; animation-delay: 3s;">Lifestyle: Health</div>
  <div class="floating-text" style="left:40%; animation-delay: 5s;">Lifestyle: Goals</div>
  <div class="floating-text" style="left:60%; animation-delay: 2s;">Business: Finance</div>
  <div class="floating-text" style="left:75%; animation-delay: 6s;">Business: HR</div>
  <div class="floating-text" style="left:85%; animation-delay: 4s;">Business: Operations</div>
  <div class="floating-text" style="left:50%; animation-delay: 1s;">Business: Marketing</div>
  <div class="floating-text" style="left:30%; animation-delay: 5s;">Business: Leadership</div>

  <div id="logo">
    <span class="focas">FocasLyn</span>
    <span class="mios">MIOS</span>
  </div>

  <div id="marketing">
    Start your journey in Lifestyle & Business.<br>
    Explore, learn, and manage everything effortlessly.
  </div>

  <button id="start-btn">Get Started</button>

<script>
  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('launcherNextScreen', {
      detail: { message: 'LauncherUI clicked' }
    }));
  });
</script>

</body>
</html>
