// ====== নেভমেনু JS শুরু ======
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if(hamburger && navMenu){
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

const style = document.createElement("style");
style.innerHTML = `.nav-menu.active{ display:block; }`;
document.head.appendChild(style);
// ====== নেভমেনু JS শেষ ======

// ========= PAGE LOADER JS শুরু =========
window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    if(loader){
        setTimeout(() => {
            loader.classList.add("hide");
        }, 600);
    }
});
// ========= PAGE LOADER JS শেষ =========


// ========= SCROLL PROGRESS BAR JS শুরু =========
window.addEventListener("scroll", () => {
    const bar = document.getElementById("scrollProgressBar");
    if(!bar) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = ((scrollTop / scrollHeight) * 100) + "%";
});
// ========= SCROLL PROGRESS BAR JS শেষ =========


// ====== Hero Section JS শুরু ======
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");
    if(!hero) return;
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
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index){
    if(!slides.length || !slides[index]) return;
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[index].classList.add("active");
    if(dots[index]) dots[index].classList.add("active");
    current = index;
}

if(slides.length){
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 4000);
}

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
const floatingDate = new Date("2026-05-6 09:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = floatingDate - now;

    const floatingEl = document.querySelector(".floating-countdown");
    if(!floatingEl) return;

    if(diff <= 0){
        floatingEl.innerHTML =
            "<h3 style='color:white'>🎉পরবর্তি অফলাইন ব্যাচ শুরুর তারিখ জানানো হবে! <br> আমাদের অনলাইন কোর্স এর রেজিঃ চলছে।</h3>";
        return;
    }

    const fDays    = document.getElementById("f-days");
    const fHours   = document.getElementById("f-hours");
    const fMinutes = document.getElementById("f-minutes");
    const fSeconds = document.getElementById("f-seconds");
    if(!fDays || !fHours || !fMinutes || !fSeconds) return;

    fDays.innerText    = Math.floor(diff / (1000 * 60 * 60 * 24));
    fHours.innerText   = Math.floor((diff / (1000 * 60 * 60)) % 24);
    fMinutes.innerText = Math.floor((diff / (1000 * 60)) % 60);
    fSeconds.innerText = Math.floor((diff / 1000) % 60);
}, 1000);
//========== FLOATING COUNTDOWN TIMER JS END ==========//


// ========= ABOUT SECTION JS শুরু =========
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
    if(!stats) return;
    if(stats.getBoundingClientRect().top < window.innerHeight){
        counters.forEach(counter => {
            let target = +counter.dataset.count;
            let curr = 0;
            let step = Math.ceil(target / 90);
            const update = () => {
                curr += step;
                if(curr >= target){
                    counter.innerText = target + "+";
                }else{
                    counter.innerText = curr;
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
        if(item.getBoundingClientRect().top < window.innerHeight - 120){
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
        if(item.getBoundingClientRect().top < window.innerHeight - 120){
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
        if(item.getBoundingClientRect().top < window.innerHeight - 120){
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
        if(item.getBoundingClientRect().top < window.innerHeight - 100){
            item.classList.add('show');
        }
    });
};
window.addEventListener('scroll', revealFooter);
revealFooter();
// ========= FOOTER SECTION JS শেষ =========


// ========= BACK TO TOP BUTTON JS শুরু =========
const backToTop = document.getElementById("backToTop");
if(backToTop){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 300){
            backToTop.classList.add("show");
        }else{
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top:0, behavior:"smooth" });
    });
}
// ========= BACK TO TOP BUTTON JS শেষ =========


// ========= Registration JS শুরু =========
const registrationForm = document.getElementById("registrationForm");
const submitBtn        = document.getElementById("submitBtn");

if(registrationForm && submitBtn){
    const btnText    = submitBtn.querySelector('.btn-text');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');

    registrationForm.addEventListener("submit", function(e){
        e.preventDefault();

        // Show loading state
        submitBtn.classList.add("loading");
        if(btnText) btnText.textContent = 'প্রক্রিয়া হচ্ছে...';
        submitBtn.disabled = true;

        var formData = new FormData(this);

        fetch("https://script.google.com/macros/s/AKfycbzzF3cqvhggijg7BY-mzwe3kij0ipiZ7hhq2o5HZFSzOlf3cJLEiW8RnL7Htj3HS_q6qQ/exec", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            submitBtn.classList.remove("loading");
            if(data.status === "success"){
                if(btnText) btnText.textContent = '✅ সফলভাবে রেজিস্ট্রেশন হয়েছে!';
                submitBtn.style.background = '#28a745';
                submitBtn.style.color = '#fff';
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'not-allowed';
                submitBtn.disabled = true;
            } else {
                if(btnText) btnText.textContent = 'রেজিস্ট্রেশন করুন';
                submitBtn.disabled = false;
                alert(data.msg);
            }
        })
        .catch(() => {
            submitBtn.classList.remove("loading");
            if(btnText) btnText.textContent = 'রেজিস্ট্রেশন করুন';
            submitBtn.disabled = false;
            alert("সার্ভার সমস্যা!");
        });
    });
}
// ========= Registration JS শেষ =========


// ========= TRAINER HERO JS শুরু =========
const trainerImage = document.querySelector(".trainer-image img");
if(trainerImage){
    trainerImage.addEventListener("mousemove", e => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        trainerImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    trainerImage.addEventListener("mouseleave", () => {
        trainerImage.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
}
// ========= TRAINER HERO JS শেষ =========


// ========= Gallery filter + lightbox JS শুরু =========
document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".filter-buttons button");
    const images  = document.querySelectorAll(".gallery-item");

    buttons.forEach(btn => {
        btn.addEventListener("click", function(){
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const filter = this.dataset.filter;
            images.forEach(img => {
                img.style.display = (filter === "all" || img.classList.contains(filter)) ? "block" : "none";
            });
        });
    });

    const lightbox    = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn    = document.querySelector(".lightbox-close");

    if(lightbox && lightboxImg && closeBtn){
        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });
        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }
});
// ========= Gallery filter + lightbox JS শেষ =========


/* ===== গ্যালারির modal JS শুরু ===== */
document.addEventListener("DOMContentLoaded", function(){
    const imgs   = document.querySelectorAll(".g-img");
    const modal  = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const close  = document.getElementById("close");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.25 });

    imgs.forEach(i => observer.observe(i));

    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(b => {
        b.addEventListener("click", () => {
            const a = b.getAttribute("data-album");
            imgs.forEach(img => {
                img.style.display = (a === "all" || img.getAttribute("data-album") === a) ? "block" : "none";
            });
        });
    });

    if(modal && modalImg){
        imgs.forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImg.src = img.src;
            });
        });
    }

    if(close && modal){
        close.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }
});
/* ===== গ্যালারির modal JS শেষ ===== */


// ===== Header scroll shadow =====
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(!header) return;
    header.style.boxShadow = window.scrollY > 50
        ? "0 5px 20px rgba(0,0,0,0.2)"
        : "none";
});
