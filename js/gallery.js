// FILTER
const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery-item');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  };
});

closeBtn.onclick = () => lightbox.style.display = 'none';
lightbox.onclick = e => {
  if (e.target !== lightboxImg) lightbox.style.display = 'none';
};

// ========= BACK TO TOP BUTTON JS শুরু =========

const backToTop = document.getElementById("backToTop");

// Scroll করলে বাটন দেখাবে
window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});

// Click করলে উপরে যাবে
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ========= BACK TO TOP BUTTON JS শেষ =========


// ========= PAGE LOADER JS শুরু =========
window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 600); // Smooth delay
});
// ========= PAGE LOADER JS শেষ =========