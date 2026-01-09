document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    function openMenu() {
        if (navMenu) navMenu.classList.add('active');
        if (menuOverlay) menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeNav() {
        if (navMenu) navMenu.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeNav);
    if (menuOverlay) menuOverlay.addEventListener('click', closeNav);

    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Hero Video Autoplay Logic
    const heroVideo = document.getElementById('heroVideo');

    if (heroVideo) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(error => {
                        console.log("Autoplay prevented:", error);
                    });
                } else {
                    heroVideo.pause();
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the video is visible
        });

        videoObserver.observe(heroVideo);
    }
});

// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
    if (localStorage.getItem("ageConfirmed") != "true") {
        ageModal.style.display = "flex";
    } else {
        ageModal.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
    alert("Dostęp zabroniony. Strona tylko dla osób 18+");
    window.close();
    window.location.href = "https://www.google.pl";
});

// Hide the top warning when the page is scrolled
const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");

const warn = document.querySelector(".warn");
if (warn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            warn.style.display = "none";
        } else {
            warn.style.display = "";
        }
    });
}

city.addEventListener("click", toggleCont);
function toggleCont() {
    city.classList.toggle("active");
    Array.from(cont).forEach((el) => {
        el.style.display = el.style.display === "block" ? "none" : "block";
    });
}

// Footer Year Logic
const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    const timers = document.querySelectorAll(".timer");

    timers.forEach(timer => {
        const daysAgo = parseInt(timer.dataset.daysAgo, 10);
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        const formattedDate = date.toLocaleDateString("pl-PL", {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        });

        timer.textContent = formattedDate;
    });
});