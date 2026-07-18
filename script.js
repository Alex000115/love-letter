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

// Typewriter Effect Configuration
const banglaText = `প্রিয়তমা,

আমার জীবনের সবচেয়ে সুন্দর অধ্যায়টা শুরু হয়েছে সেদিন থেকে, যেদিন তুমি আমার পাশে এসে দাঁড়িয়েছ। জীবনের হাজারো ব্যস্ততার মাঝেও যখনই তোমার ওই মিষ্টি হাসির দিকে তাকাই, আমার সব ক্লান্তি এক নিমেষে হারিয়ে যায়।

তুমি শুধু আমার জীবনের অংশ নও, তুমি আমার জীবনের সেই সুর যা আমার প্রতিটা দিনকে সুন্দর করে তোলে, তোমার এই হাতটা ধরে আমি জীবনের বাকি পথটুকুও পার করে দিতে চাই।

আমি তোমাকে কতটা ভালোবাসি, তা হয়তো কোনো ভাষায় লিখে প্রকাশ করা সম্ভব না। শুধু এটুকু জেনে রেখো—তুমি আমার জীবনের সবচেয়ে বড় উপহার, আমার সুখে-দুঃখে জড়িয়ে থাকা আমার পুরো পৃথিবী।

            — তোমার নজরুল ইসলাম`;

let textIndex = 0;
const speed = 40; // টাইপিং স্পীড (মিলিসেকেন্ডে)
let typingStarted = false;

function typeWriter() {
    const textContainer = document.getElementById("typewriter-text");
    if (textContainer && textIndex < banglaText.length) {
        textContainer.innerHTML += banglaText.charAt(textIndex);
        textIndex++;
        textContainer.scrollTop = textContainer.scrollHeight;
        setTimeout(typeWriter, speed);
    }
}

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
        
        // যখন খাম খুলে চিঠি পেজে (Step 2) আসবে, তখনই টাইপিং শুরু হবে
        if (currentStep === 2 && !typingStarted) {
            typingStarted = true;
            setTimeout(typeWriter, 500);
        }
    }
}

// Trick 'No' Button Logic
function moveNoButton() {
    const noBtn = document.getElementById('btn-no');
    if (noBtn) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 120 - 60;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }
}
