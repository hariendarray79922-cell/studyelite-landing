let timeLeft = 10;
const btn = document.getElementById("downloadBtn");

const timer = setInterval(() => {
  timeLeft--;
  btn.innerText = `Download APK (${timeLeft})`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    btn.innerText = "Download APK";
    btn.disabled = false;
    btn.classList.add("active");
    btn.onclick = () => {
      // 🔗 APK LINK (yaha apna link daalo)
      window.location.href = "https://example.com/studyelite.apk";
    };
  }
}, 1000);
