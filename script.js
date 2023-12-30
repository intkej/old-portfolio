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

function changePage(page) {
    var pageURL;
    switch (page) {
      case 'services':
        pageURL = 'services.html';
        break;
      case 'aboutme':
        pageURL = 'moreaboutme.html';
        break;
      case 'projects':
        pageURL = 'projects.html';
        break;
      default:
        pageURL = 'index.html';
    }

    window.location.href = pageURL;
}
