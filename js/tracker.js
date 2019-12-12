
/*
//circle start
*/
let progressBar = document.querySelector('.circProgress');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  var offset = - length - length * value / (timePercent);
  progressBar.style.strokeDashoffset = offset;
  pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`;
};

//circle ends, timer starts

const display = document.querySelector('.display-remain-time')
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const now = Date.now();

let interval;
let timeLeft;
let wholeTime = 25 * 60;
let isStarted = false;

update(wholeTime, wholeTime);
displayTimeLeft(wholeTime);

function timer(seconds) {
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);

  interval = setInterval(() => {
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    //check if out of time
    if (timeLeft <= 0) {
      clearInterval(interval);
      isStarted = false;
  displayTimeLeft(wholeTime);
  return;
}
//otherwise display time
displayTimeLeft(timeLeft);
  }, 1000);
}

//displays time on the clock
function displayTimeLeft(timeLeft) {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  display.textContent = displayTime;
  update(timeLeft, wholeTime);
}

startBtn.addEventListener('click', () => {
  console.log('clicked')
if (isStarted === false) {
  timer(wholeTime);
  isStarted = true;
}});


stopBtn.addEventListener('click', () => {
  console.log('clicked')
  clearInterval(interval);
      isStarted = false;
  displayTimeLeft(wholeTime);
});
