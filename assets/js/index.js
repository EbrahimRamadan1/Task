let timer = document.querySelector("#timer");
let secs = "01";
let mins = "02";

function forAge() {
  document.querySelector(".btn-container-one").innerHTML = `
    <div class="btn-container-two">
      <h2 class="btn-con-title">Are you on Medicare or Medicaid?</h2>
      <button onclick = "forMedicaid()">Yes</button>
      <button onclick = "forUnMedicaid()">No</button>
    </div>
  `;
}
function forMedicaid() {
  document.querySelector(".btn-container-two").innerHTML = `
    <div class="btn-container-three">
        <h2>Unfortunately, we can't Qualify you at the moment</h2>
    </div>
    `;
}

function forUnMedicaid() {
  document.querySelector(".btn-container-two").style.display = "none";
  document.querySelector(".result").style.display = "block";
  timerDown();
}

function timerDown() {
  timer.textContent = `${mins}:${secs}`;
  secs -= 1;
  secs = secs < 10 ? "0" + secs : secs;
  if (secs === "00" && mins === "02") {
    secs = "59";
    mins = "01";
  } else if (secs === "00" && mins === "01") {
    secs = "59";
    mins = "00";
  } else if (mins === "00" && secs < "00") {
    clearInterval(counter);
  }
}
let counter = setInterval(timerDown, 1000);
