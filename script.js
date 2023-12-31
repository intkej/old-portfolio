const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");

let charIndex = 0;

function typeMainText() {
    const currentText = 'intke.net';
    if (charIndex < currentText.length) {
        textElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(typeMainText, 300);
    } 
}

setTimeout(() => {
    typeMainText();
}, 1000);
