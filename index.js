let text = document.getElementById("text");
let time = document.getElementById("time");

function count(result) {
  if (result < 0) {
    return;
  }
  time.textContent = result;
  result = result - 1;

  setTimeout(function () {
    count(result);
  }, 1000);
}

function startCountdown() {
  let result = text.value;
  count(result);
}
