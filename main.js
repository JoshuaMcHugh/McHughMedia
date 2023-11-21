

// Moving Letters


// const containerEL=document.querySelector("h2");

// const effect_text=["Extended Reality","Video Editing","Film Making","3D Modelling","Web Development"];

// let effectIndex=0;
// let characterIndex=0;
// updateText();

// function updateText(){
//     characterIndex++;
//     containerEL.innerHTML=`${effect_text[effectIndex].slice(0,characterIndex)}`;

// if(characterIndex===effect_text[effectIndex].length){
//     effectIndex++;
//     characterIndex=0;
// }
// if(effectIndex===effect_text.length){
//     effectIndex=0;
// }
// setTimeout(updateText,300);
// }


// Dark Mode


// let icon = document.getElementById("sm-icon");
// const bodyEl = document.querySelector("body");
// console.log(icon);
// console.log("hello");
// icon.onclick = function(){
// document.body.classList.toggle("dark-theme");
// if(document.body.classList.contains("dark-theme")){
//     icon.src = "img/sun.png";
//     bodyEl.style.background="black";
// } else{
//     icon.src = "img/moon.png";
//     bodyEl.style.background="white";
// }
// }

// Carousel


const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
let index = 0;
function run(){
    index++;
    if (index > img.length - 1){
index = 0
    }
console.log(run);
imgs.style.transform = `translateX(${-index *500}px)`;
}
setInterval(run, 3000)
