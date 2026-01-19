
// ========= PAGE LOADER JS শুরু =========
window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 600); // Smooth delay
});
// ========= PAGE LOADER JS শেষ =========
const textElement = document.getElementById("typing-text");
const text = textElement.innerText;

let index = 0;
let isDeleting = false;

textElement.innerText = "";

function typeEffect() {
  if (!isDeleting) {
    // Typing
    if (index < text.length) {
      textElement.innerText += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // typing speed
    } else {
      // Pause after typing
      setTimeout(() => isDeleting = true, 1500);
      setTimeout(typeEffect, 1500);
    }
  } else {
    // Deleting
    if (index > 0) {
      textElement.innerText = text.substring(0, index - 1);
      index--;
      setTimeout(typeEffect, 50); // delete speed
    } else {
      isDeleting = false;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();


 /*========trainer-skills========*/
const box = document.querySelector('.floating-info');

let rotate = 0;
setInterval(() => {
  rotate = rotate === 2 ? -2 : 2;
  box.style.transform += ` rotate(${rotate}deg)`;
}, 2000);
