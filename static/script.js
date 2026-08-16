// ===============================
// SORRY WEBSITE - SCRIPT
// ===============================

const music = document.getElementById("bgMusic");

// Typing animation
const messages = [
    "I'm sorry for hurting you...",
    "I'm sorry for not understanding you...",
    "You mean so much to me, Ritu ❤️"
];

let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    if (charIndex < messages[messageIndex].length) {
        typing.textContent += messages[messageIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeMessage, 70);
    } else {
        setTimeout(() => {
            typing.textContent = "";
            charIndex = 0;
            messageIndex = (messageIndex + 1) % messages.length;
            typeMessage();
        }, 1800);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeMessage();
});


// ===============================
// OPEN HEART + MUSIC
// ===============================

function startExperience() {

    // Start music directly from the button click
    if (music) {
        music.volume = 0.7;

        music.play()
            .then(() => {
                console.log("Music started ❤️");
            })
            .catch((error) => {
                console.log("Music blocked:", error);
            });
    }

    openLetter();
}


// ===============================
// LETTER
// ===============================

function openLetter() {

    const envelope = document.getElementById("envelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }

    const letter = document.getElementById("letter");

    if (letter) {
        setTimeout(() => {
            letter.scrollIntoView({
                behavior: "smooth"
            });
        }, 300);
    }
}


// ===============================
// FORGIVENESS
// ===============================

function forgive() {

    const response = document.getElementById("response");

    if (response) {
        response.innerHTML = `
            <div class="forgive-message">
                Thank you, Ritu. ❤️🥹
                <br>
                I'll make sure your forgiveness is worth it.
            </div>
        `;
    }

    createHearts();
}


// ===============================
// MAYBE BUTTON
// ===============================

function moveButton() {

    const button = document.getElementById("maybe");

    if (!button) return;

    const maxX = window.innerWidth - button.offsetWidth - 30;
    const maxY = window.innerHeight - button.offsetHeight - 30;

    const x = Math.random() * Math.max(maxX, 30);
    const y = Math.random() * Math.max(maxY, 30);

    button.style.position = "fixed";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}


// ===============================
// FLOATING HEARTS
// ===============================

function createHearts() {

    const container = document.getElementById("hearts");

    if (!container) return;

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}
