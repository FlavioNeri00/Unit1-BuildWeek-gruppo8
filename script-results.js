let seconds = 30;
let elem = document.getElementById("demo");

function countdown() {
  if (seconds == -1) {
    console.log("finish");
    clearTimeout(timerId);
  } else {
    elem.innerHTML = seconds;
    seconds--;
  }
}

let timerId = setInterval(countdown, 1000);
