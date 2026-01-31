let step = 1;
let time = 15;

const btn = document.getElementById("actionBtn");
const timer = document.getElementById("timer");
const stepNo = document.getElementById("stepNo");

// 🔴 Monetag Direct Link (yaha apna link paste karo)
const AD_LINK = "https://otieu.com/4/10548540";

// 🔴 APK Direct Download Link (GitHub Release / CDN)
const APK_LINK = "https://example.com/app.apk";

function startTimer(){
  btn.disabled = true;
  btn.classList.remove("active");
  time = 15;

  timer.innerText = `Please wait ${time} seconds...`;

  const interval = setInterval(() => {
    time--;
    timer.innerText = `Please wait ${time} seconds...`;

    if(time <= 0){
      clearInterval(interval);
      timer.innerText = "Click Continue to proceed";
      btn.disabled = false;
      btn.classList.add("active");
    }
  },1000);
}

btn.onclick = () => {

  // ✅ BUTTON CLICK → AD POP
  window.open(AD_LINK, "_blank");

  if(step < 3){
    step++;
    stepNo.innerText = step;
    startTimer();
  }else{
    // ✅ FINAL STEP → APK DOWNLOAD
    window.location.href = APK_LINK;
  }
};

// Start first lock
startTimer();
