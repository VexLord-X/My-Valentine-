const messages = [
    "Are you sure?",
    "Really sure??",
    "yakiiiin?",
    "Pookie please...",
    "QwQ whyy????",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes pleasee! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    const gifContainer = document.querySelector(".gif_container img");
    gifContainer.src = "https://media4.giphy.com/media/QlQdLBS70XJcZY1fLF/giphy.gif?cid=6c09b952smk1by1n4r2g2xy59qhsho56ts61899zyxkvk1ei&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
    
    noClickCount++;
    // Jika sudah diklik 6 kali, sembunyikan tombol NO
    if (noClickCount >= 10) {
        noButton.style.display = "none";
}
    
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
