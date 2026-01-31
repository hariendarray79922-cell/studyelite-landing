let timeLeft = 10;
const btn = document.getElementById("downloadBtn");

// 🔗 Monetag Direct Link
const AD_LINK = "https://otieu.com/4/10548540";

// 🔗 APK Direct Download Link
const APK_LINK = "https://example.com/studyelite.apk"; // <-- apna real APK link yaha

const timer = setInterval(() => {
  timeLeft--;
  btn.innerText = `Download APK (${timeLeft})`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    btn.innerText = "Download APK";
    btn.disabled = false;
    btn.classList.add("active");

    btn.onclick = () => {
      // 1️⃣ Ad open (new tab)
      window.open(AD_LINK, "_blank");

      // 2️⃣ APK download (same tab)
      setTimeout(() => {
        window.location.href = APK_LINK;
      }, 800);
    };
  }
}, 1000);
