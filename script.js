// Floating Background Hearts Generator
const heartsBg = document.getElementById('hearts-bg');
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heartsBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 7000);
}
setInterval(createHeart, 400);

// Step Navigation Logic
let currentStep = 1;
function nextStep(step) {
    const currentCard = document.getElementById(`step-${step}`);
    const nextCard = document.getElementById(`step-${step + 1}`);
    
    if(currentCard && nextCard) {
        currentCard.classList.remove('active');
        currentCard.classList.add('exit');
        
        nextCard.classList.add('active');
        
        document.getElementById(`dot-${step}`).classList.remove('active');
        document.getElementById(`dot-${step + 1}`).classList.add('active');
        currentStep = step + 1;
    }
}

// Trick 'No' Button Logic
let noAttempts = 0;
const hints = [
    "think about it.",
    "pretty please?",
    "wait, come back.",
    "a prompt to click No"
];

function moveNoButton() {
    const noBtn = document.getElementById('btn-no');
    const hintMsg = document.getElementById('hint-msg');
    
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    
    noAttempts++;
    if(noAttempts < hints.length) {
        hintMsg.innerText = hints[noAttempts];
    } else {
        hintMsg.innerText = hints[hints.length - 1];
    }
}
