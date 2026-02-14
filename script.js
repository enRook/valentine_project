const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseText = document.getElementById("responseText");
const bgMusic = document.getElementById("bgMusic");
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");



let noClickCount = 0;

const noMessages = [
    "Pweaaasseee 🥺",
    "Are you sure? 😢",
    "But baaaaabbbee 🥺 ",
    "Oh my heart💔",
    "What will Molang say? 🙀",
    "You don't mean that 🥹",
    "If you say yes we'd seggs 😜 ",
    "Darling I'm begging youuu😭",
    "huhuhuhu",
    "Okay fine 😔"
];

// YES BUTTON
// YES BUTTON
yesBtn.addEventListener("click", () => {

    yesSound.currentTime = 0;
    yesSound.play();

    // Hide the top question and buttons after a tiny delay
    document.getElementById("mainText").style.display = "none";

    setTimeout(() => {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }, 100);

    // Show love message with tiny envelope
    responseText.innerHTML = `
        <div class="love-message">
            <h2>YEEEYYY I knew you would say yes!!!</h2>
            <p>I am the happiest person right now 😭💕</p>
            <p>Let's make more beautiful memories together 🥺</p>
            <p class="valentine-line">Happy Valentine's Day My Love!!!</p>
            <span id="envelopeIcon" style="cursor:pointer; display:inline-block; margin-left:10px; font-size:24px;">📩</span>
        </div>
    `;

    // Add click to show letter overlay
    const envelopeIcon = document.getElementById("envelopeIcon");
    envelopeIcon.addEventListener("click", () => {
        const letterOverlay = document.getElementById("letterOverlay");
        letterOverlay.classList.add("active");
        // Optional: play paper rustle SFX
        yesSound.currentTime = 0;
        yesSound.play();
    });

    createHearts();
});



// NO BUTTON
noBtn.addEventListener("click", () => {

    noSound.currentTime = 0;
noSound.play();

    if (noClickCount < noMessages.length) {
        responseText.textContent = noMessages[noClickCount];
        noClickCount++;
    } else if (noClickCount === noMessages.length) {
        responseText.textContent = 
        "Umm whats wrong with the NO button?😏🤭";

        makeButtonRunAway();
        noClickCount++; // prevent repeating
    }

});


// Make button avoid mouse (Desktop)
function makeButtonRunAway() {

    noBtn.style.position = "absolute";

    document.addEventListener("mousemove", (e) => {
        const rect = noBtn.getBoundingClientRect();
        const distance = Math.hypot(
            e.clientX - (rect.left + rect.width/2),
            e.clientY - (rect.top + rect.height/2)
        );

        if (distance < 100) {
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 50);

            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";
        }
    });

    // Mobile disable
    noBtn.disabled = true;
}

// Floating hearts animation
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animation = "floatUp 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}


document.addEventListener("click", () => {
    bgMusic.play().catch(() => {});
}, { once: true });

// Start BGM on first user interaction
document.addEventListener("click", () => {
    bgMusic.volume = 0.4; // softer romantic vibe
    bgMusic.play().catch(() => {});
}, { once: true });



const letterOverlay = document.getElementById("letterOverlay");
const letterImage = letterOverlay.querySelector(".letterImage");

// Close when clicking outside the letter
letterOverlay.addEventListener("click", (e) => {
    if (!letterImage.contains(e.target)) {
        letterOverlay.classList.remove("active");
    }
});



