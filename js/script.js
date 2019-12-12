/*
js for slides on method page
*/

const slide = document.querySelector('.slides');
const slideImgs = document.querySelectorAll('.slides img');

//buttons
const lBtn = document.querySelector('#lBtn');
const rBtn = document.querySelector('#rBtn');

//a counter
let count = 0
const size = slideImgs[0].clientWidth;



//event listen for buttons


lBtn.addEventListener('click',()=>{
    if(count>0){
    count--
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}})

rBtn.addEventListener('click',()=>{
    if(count<5){}
    count++
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}})

