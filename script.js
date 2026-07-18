const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const card = document.querySelector(".glass-card");

const text = "তোমার জন্য আমার একটি বিশেষ কথা আছে... ❤️";

let i = 0;

// ======================
// Typewriter
// ======================

function typeWriter(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,60);

    }

}

typeWriter();


// ======================
// Proposal Page
// ======================

startBtn.addEventListener("click",()=>{

card.innerHTML=`

<div class="proposal">

<div class="heart-icon">❤️</div>

<h2>Will You Be Mine?</h2>

<p>

তুমি কি আমার জীবনের সবচেয়ে সুন্দর গল্পটা হবে?

</p>

<div class="buttons">

<button id="yesBtn">

YES ❤️

</button>

<button id="noBtn">

NO 😅

</button>

</div>

</div>

`;

document.getElementById("yesBtn").onclick = showLetter;

moveNoButton();

});


// ======================
// NO Button
// ======================

function moveNoButton(){

const no=document.getElementById("noBtn");

no.onmouseover=()=>{

const x=Math.random()*250-125;

const y=Math.random()*150-75;

no.style.transform=`translate(${x}px,${y}px)`;

}

}



// ======================
// Love Letter
// ======================

function showLetter(){

card.innerHTML=`

<div class="letter">

<div class="heart-icon">

💖

</div>

<h2>

প্রিয় কবিতা ❤️

</h2>

<p>

তুমি আমার জীবনের সবচেয়ে সুন্দর অধ্যায়।

<br><br>

তোমার হাসিতে আমার শান্তি,

তোমার ভালোবাসায় আমার পৃথিবী।

<br><br>

প্রতিদিন নতুন করে তোমার প্রেমে পড়ি।

<br><br>

জীবনে যত ঝড়ই আসুক,

আমি সবসময় তোমার হাত ধরে পাশে থাকতে চাই।

<br><br>

ভালোবাসি তোমায়—

আজ, আগামীকাল,

আর সারাজীবন। ❤️

</p>

<h3>

ইতি,<br>

তোমার ভালোবাসার মানুষ<br>

<b>Nazrul Islam ❤️</b>

</h3>

</div>

`;

}



// ======================
// Floating Hearts
// ======================

setInterval(()=>{

const item=document.createElement("div");

item.innerHTML=Math.random()>.5?"❤️":"🌸";

item.style.position="fixed";

item.style.left=Math.random()*100+"vw";

item.style.bottom="-40px";

item.style.fontSize=(18+Math.random()*20)+"px";

item.style.opacity=".8";

item.style.pointerEvents="none";

item.style.zIndex="2";

item.style.animation=`float ${5+Math.random()*3}s linear forwards`;

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},8000);

},500);
