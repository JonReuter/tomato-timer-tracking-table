/*
js for slides on method page
*/
const slide = document.querySelector('.slides');
const slideImgs = Array.from(slide.children);

//buttons
const lBtn = document.querySelector('#lBtn');
const rBtn = document.querySelector('#rBtn');

//a counter
let count = 0
const size = slideImgs[0].getBoundingClientRect().width;

//event listen for buttons

lBtn.addEventListener('click',()=>{
    if(count>0){
    count--;
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
}})

rBtn.addEventListener('click',()=>{
    if(count<5){
    count++;
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
}})




/*
//circle start
let progressBar = document.querySelector('.e-c-progress');
let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;



function update(value, timePercent) {
  var offset = - length - length * value / (timePercent);
  progressBar.style.strokeDashoffset = offset; 
  pointer.style.transform = `rotate(${360 * value / (timePercent)}deg)`; 
};

//circle ends
const displayOutput = document.querySelector('.display-remain-time')
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('start');

let intervalTimer;
let timeLeft;
let wholeTime = .5 * 60; 
let isStarted = false;
let isStopped = false;


update(wholeTime,wholeTime);
displayTimeLeft(wholeTime);

function changeWholeTime(seconds){
  if ((wholeTime + seconds) > 0){
    wholeTime += seconds;
    update(wholeTime,wholeTime);
  }
}


function timer (seconds){ //counts time, takes seconds
  let remainTime = Date.now() + (seconds * 1000);
  displayTimeLeft(seconds);
  
  intervalTimer = setInterval(function(){
    timeLeft = Math.round((remainTime - Date.now()) / 1000);
    if(timeLeft < 0){
      clearInterval(intervalTimer);
      isStarted = false;
      });
      displayTimeLeft(wholeTime);
      return ;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}


function displayTimeLeft (timeLeft){ //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

*/





