/* =========================
   ELEMENTS
========================= */

const envelope =
    document.getElementById("envelope");

const response =
    document.getElementById("response");

const music =
    document.getElementById("bgMusic");


/* =========================
   TYPING EFFECT
========================= */

const typingText =
    "I'm sorry for hurting you and for not understanding you the way I should have. I don't want to lose you, Ritu. ❤️";

const typingElement =
    document.getElementById("typing");

let typingIndex = 0;


function typeMessage() {

    if (
        typingIndex <
        typingText.length
    ) {

        typingElement.textContent +=
            typingText.charAt(
                typingIndex
            );

        typingIndex++;

        setTimeout(
            typeMessage,
            45
        );

    }

}


typeMessage();


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    const button =
        document.querySelector(
            ".music-btn"
        );


    if (music.paused) {

        music.play()
            .then(() => {

                button.textContent =
                    "⏸️ Pause Our Song";

            })
            .catch(() => {

                button.textContent =
                    "🎵 Tap Again";

            });

    }

    else {

        music.pause();

        button.textContent =
            "🎵 Play Our Song";

    }

}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    envelope.classList.toggle(
        "open"
    );


    if (
        envelope.classList.contains(
            "open"
        )
    ) {

        setTimeout(() => {

            document
                .getElementById("letter")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 300);

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function makeHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "float-heart";


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "✨"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() *
        100 +
        "vw";


    heart.style.fontSize =
        14 +
        Math.random() *
        28 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() *
        7 +
        "s";


    document
        .getElementById("hearts")
        .appendChild(
            heart
        );


    setTimeout(() => {

        heart.remove();

    }, 13000);

}


setInterval(
    makeHeart,
    500
);


/* =========================
   FORGIVE
========================= */

function forgive() {

    response.textContent =
        "Thank you, Ritu. I promise I'll do better. ❤️";


    document
        .querySelector(
            ".big-heart"
        )
        .textContent =
        "💖";


    for (
        let i = 0;
        i < 50;
        i++
    ) {

        setTimeout(
            makeHeart,
            i * 50
        );

    }

}


/* =========================
   NEED TIME
========================= */

function moveButton() {

    const button =
        document.getElementById(
            "maybe"
        );


    const x =
        Math.random() *
        160 -
        80;


    const y =
        Math.random() *
        100 -
        50;


    button.style.transform =
        `translate(${x}px, ${y}px)`;


    response.textContent =
        "Take all the time you need. I'll still be here. 🤍";

}
