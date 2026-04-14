const music = document.getElementById('birthday-audio');
const musicBtn = document.getElementById('play-music');
const celebrateBtn = document.getElementById('celebrate-btn');
const typewriterElement = document.getElementById('typewriter');
const ageCounter = document.getElementById('age-counter');

function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartEmojis = ['❤️', '💖', '💗', '💕'];
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }, 400);
}

const text = "Happy 19th Birthday, Beautiful!";
let charIndex = 0;
function type() {
    if (charIndex < text.length) {
        typewriterElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    }
}

function updateAge() {
    const birthDate = new Date(new Date().getFullYear() - 19, 0, 1); 
    const now = new Date();
    const diff = now - birthDate;
    const seconds = Math.floor(diff / 1000);
    ageCounter.innerText = `You've been awesome for approximately ${seconds.toLocaleString()} seconds!`;
    setTimeout(updateAge, 1000);
}

const reasons = ["Your Smile", "Your Kindness", "Your Eyes", "Your Ambition", "Your Laugh", "Your Style", "Your Strength", "Your Wisdom", "Your Bravery", "Your Heart", "How You Care", "Your Focus", "Your Support", "Your Humor", "Your Energy", "Your Voice", "Your Vibe", "Your Dreams", "Just Being You"];
const reasonDetails = ["It lights up the darkest rooms.", "You always put others first.", "I see a whole world in them.", "You never stop chasing your goals.", "It's my favorite song.", "You make everything look elegant.", "You handle every hurdle with grace.", "You're smart beyond your years.", "You aren't afraid to be yourself.", "It's made of pure gold.", "You notice the small things.", "You know exactly what you want.", "You are my biggest cheerleader.", "You make every moment fun.", "It's absolutely contagious.", "It's the most soothing sound.", "You bring peace wherever you go.", "They are beautiful and inspiring.", "The world is better with you in it."];

function loadReasons() {
    const grid = document.getElementById('reasons-grid');
    reasons.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.backgroundImage = `url('https://picsum.photos/400/400?random=${i + 20}')`;
        card.innerHTML = `<div class="reason-content" style="position:relative; z-index:2; text-align:center; padding:10px;"><div class="reason-title" style="font-size:1.5rem; transition:0.5s;">Reason #${i + 1}</div><div class="reason-text" style="opacity:0; transition:0.5s; font-size:1rem; margin-top:10px;"><strong>${reason}</strong><br>${reasonDetails[i]}</div></div>`;
        card.onmouseover = () => {
            card.querySelector('.reason-title').style.transform = 'translateY(-20px) scale(0.8)';
            card.querySelector('.reason-text').style.opacity = '1';
        };
        card.onmouseout = () => {
            card.querySelector('.reason-title').style.transform = 'translateY(0) scale(1)';
            card.querySelector('.reason-text').style.opacity = '0';
        };
        grid.appendChild(card);
    });
}

function createBalloons() {
    const container = document.getElementById('balloon-container');
    for (let i = 0; i < 19; i++) {
        const b = document.createElement('div');
        b.className = 'balloon';
        b.innerText = '🎈';
        b.style.position = 'absolute';
        b.style.left = Math.random() * 90 + '%';
        b.style.top = Math.random() * 80 + '%';
        b.style.cursor = 'pointer';
        b.style.fontSize = '2rem';
        b.onclick = function(event) {
            this.style.display = 'none';
            confetti({ particleCount: 15, origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight } });
            if (document.querySelectorAll('.balloon:not([style*="display: none"])').length === 0) {
                document.getElementById('card-popup').classList.remove('hidden');
                confetti({ particleCount: 200, spread: 100 });
            }
        };
        container.appendChild(b);
    }
}

const cutCakeBtn = document.getElementById('cut-cake-btn');
const cakeWrapper = document.getElementById('cake-wrapper');
const cakeLeft = document.getElementById('cake-left');
const cakeMsg = document.getElementById('cake-message');

cutCakeBtn.addEventListener('click', () => {
    cakeLeft.innerText = '🍰';
    cakeWrapper.innerHTML += '<div style="font-size: 10rem;">🍰</div>';
    cakeWrapper.classList.add('split-cake');
    cakeMsg.classList.remove('hidden');
    confetti({ particleCount: 200, spread: 160, origin: { y: 0.8 } });
    cutCakeBtn.textContent = "19 Years Celebrated! 🥳";
    cutCakeBtn.disabled = true;
});

window.onload = () => {
    type();
    updateAge();
    loadReasons();
    createBalloons();
    createFloatingHearts();
};

musicBtn.onclick = () => { music.paused ? (music.play(), musicBtn.textContent = "⏸ Pause") : (music.pause(), musicBtn.textContent = "🎵 Music"); };
celebrateBtn.onclick = () => confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
document.querySelector('.close-btn').onclick = () => document.getElementById('card-popup').classList.add('hidden');