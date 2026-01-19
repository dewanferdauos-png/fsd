// ====== নেভমেনু JS শুরু ======
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Menu show class
const style = document.createElement("style");
style.innerHTML = `
.nav-menu.active{
    display:block;
}
`;
document.head.appendChild(style);
// ====== নেভমেনু JS শেষ ======

// ========= PAGE LOADER JS শুরু =========
window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 600); // Smooth delay
});
// ========= PAGE LOADER JS শেষ =========


// ========= SCROLL PROGRESS BAR JS শুরু =========
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    document.getElementById("scrollProgressBar").style.width = scrollPercent + "%";
});
// ========= SCROLL PROGRESS BAR JS শেষ =========



// ====== Hero Section JS শুরু ======

// Hero fade-in animation on load
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    hero.style.opacity = 0;
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {
        hero.style.transition = "0.8s ease";
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
    }, 200);
});

// ====== Hero Section JS শেষ ======

//============ HERO CAROUSEL JS START ==============//

// Select elements
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

// Show slide function
function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

// Auto slide
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 4000);

// Dot click
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
});

//============== HERO CAROUSEL JS END =====================//

//========== IMPORTANT NOTICE TOUCH PAUSE ==========
const noticeTrack = document.querySelector('.notice-marquee-track');

if(noticeTrack){
    noticeTrack.addEventListener('touchstart', () => {
        noticeTrack.style.animationPlayState = 'paused';
    });
    noticeTrack.addEventListener('touchend', () => {
        noticeTrack.style.animationPlayState = 'running';
    });
}


//========== FLOATING COUNTDOWN TIMER JS ==========//

// 🔴 ট্রেনিং শুরুর তারিখ দিন
const floatingDate = new Date("2026-01-28 09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = floatingDate - now;

    if(diff <= 0){
        document.querySelector(".floating-countdown").innerHTML =
            "<h3 style='color:white'>🎉 আজই ট্রেনিং শুরু!</h3>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("f-days").innerText = days;
    document.getElementById("f-hours").innerText = hours;
    document.getElementById("f-minutes").innerText = minutes;
    document.getElementById("f-seconds").innerText = seconds;

}, 1000);

//========== FLOATING COUNTDOWN TIMER JS END ==========//


// ========= ABOUT SECTION JS শুরু =========

// Reveal animation
const animatedItems = document.querySelectorAll('.animate');

const reveal = () => {
    animatedItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            item.classList.add('show');
        }
    });
};
window.addEventListener('scroll', reveal);
reveal();

// Count animation
const counters = document.querySelectorAll('[data-count]');
let counted = false;

window.addEventListener('scroll', () => {
    if(counted) return;

    const stats = document.querySelector('.about-stats');
    if(stats.getBoundingClientRect().top < window.innerHeight){
        counters.forEach(counter => {
            let target = +counter.dataset.count;
            let current = 0;
            let step = Math.ceil(target / 90);

            const update = () => {
                current += step;
                if(current >= target){
                    counter.innerText = target + (target === 999 ? "+" : "+");
                }else{
                    counter.innerText = current;
                    requestAnimationFrame(update);
                }
            };
            update();
        });
        counted = true;
    }
});

// ========= ABOUT SECTION JS শেষ =========

// ========= WHY CHOOSE US JS শুরু =========

const whyItems = document.querySelectorAll('.why-choose-section .animate');

const revealWhy = () => {
    whyItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 120){
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealWhy);
revealWhy();

// ========= WHY CHOOSE US JS শেষ =========

// ========= COURSES SECTION JS শুরু =========

const courseItems = document.querySelectorAll('.courses-section .animate');

const revealCourses = () => {
    courseItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 120){
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealCourses);
revealCourses();

// ========= COURSES SECTION JS শেষ =========

// ========= CONTACT CTA SECTION JS শুরু =========

const ctaItems = document.querySelectorAll('.contact-cta-section .animate');

const revealCTA = () => {
    ctaItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 120){
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealCTA);
revealCTA();

// ========= CONTACT CTA SECTION JS শেষ =========

// ========= FOOTER SECTION JS শুরু =========

const footerItems = document.querySelectorAll('.footer-section .animate');

const revealFooter = () => {
    footerItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            item.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealFooter);
revealFooter();

// ========= FOOTER SECTION JS শেষ =========

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

// ========= Registration JS শুরু =========

let submitted = false;

document.querySelector("form").addEventListener("submit", () => {
    submitted = true;
    setTimeout(() => {
        alert("রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!");
        document.querySelector("form").reset();
    }, 800);
});

// ========= Registration JS শেষ =========
document
.getElementById("registrationForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  var formData = new FormData(this);

  fetch("https://script.google.com/macros/s/AKfycbzxeTdEtRZ0LG0quUq2hNAigrCMIP37b-6oj_j0eS-eXgRk_JG4lf8XNEWKDzWwNZv2Mw/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if(data.status === "success"){
      alert("রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে!");
      this.reset();
    } else {
      alert("সমস্যা হয়েছে, আবার চেষ্টা করুন");
    }
  })
  .catch(err => {
    alert("সার্ভার সমস্যা!");
  });

});

// ========= TRAINER HERO JS শুরু =========

// Hover tilt effect (light)
const trainerImage = document.querySelector(".trainer-image img");

trainerImage.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    trainerImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

trainerImage.addEventListener("mouseleave", () => {
    trainerImage.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// ========= TRAINER HERO JS শেষ =========
document.addEventListener("DOMContentLoaded", function(){

  const buttons = document.querySelectorAll(".filter-buttons button");
  const images = document.querySelectorAll(".gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", function(){

      buttons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      images.forEach(img => {
        if(filter === "all" || img.classList.contains(filter)){
          img.style.display = "block";
        }else{
          img.style.display = "none";
        }
      });

    });
  });

  // Lightbox
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  images.forEach(img=>{
    img.addEventListener("click", ()=>{
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", ()=>{
    lightbox.style.display = "none";
  });

});
/* ===== গ্যালারির JS শুরু ===== */

document.addEventListener("DOMContentLoaded", function(){

  const imgs = document.querySelectorAll(".g-img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const close = document.getElementById("close");

  /* scroll observer */
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:.25
  });

  imgs.forEach(i=>{
    observer.observe(i);
  });

  /* filter logic */
  const btns = document.querySelectorAll(".filter-btn");

  btns.forEach(b=>{
    b.addEventListener("click", ()=>{

      const a = b.getAttribute("data-album");

      imgs.forEach(img=>{

        if(img.getAttribute("data-album") === a){
          img.style.display="block";
        }else{
          img.style.display="none";
        }

      });

    });
  });

  /* modal open */
  imgs.forEach(img=>{

    img.addEventListener("click", ()=>{
      modal.style.display="flex";
      modalImg.src = img.src;
    });

  });

  /* modal close */
  close.addEventListener("click", ()=>{
    modal.style.display="none";
  });

});

/* ===== গ্যালারির JS শেষ ===== */
// ===== ব্যাচ ১, ব্যাচ ২ এবং সকল ছবি filter JS শুরু =====

document.addEventListener("DOMContentLoaded", function(){

  const imgs = document.querySelectorAll(".g-img");
  const btns = document.querySelectorAll(".filter-btn");

  /* Scroll effect — আগের মতোই */
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{
    threshold:0.25
  });

  imgs.forEach(i=>{
    observer.observe(i);
  });

  /* ===== আসল filter logic ===== */
  btns.forEach(function(btn){

    btn.addEventListener("click", function(){

      const album = btn.getAttribute("data-album");

      imgs.forEach(function(img){

        // যদি “সকল ছবি” বাটন হয়
        if(album === "all"){
          img.style.display = "block";
        }

        // ব্যাচ অনুযায়ী
        else if(img.getAttribute("data-album") === album){
          img.style.display = "block";
        }

        else{
          img.style.display = "none";
        }

      });

    });

  });

});

// ===== ব্যাচ ১, ব্যাচ ২ এবং সকল ছবি filter JS শেষ =====

/* 
=================================
trainer section Simple Scroll Effect
=================================
*/

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});
