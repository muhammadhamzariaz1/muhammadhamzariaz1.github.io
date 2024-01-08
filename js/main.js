// Navigation bar Effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

let modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        })
    })
});

// Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

let portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfoliomodalView) => {
            portfoliomodalView.classList.remove("active");
        })
    })
});

// Light/Dark Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    updateThemeIcon();

    // Update and save the theme and icon preferences
    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("dark-theme") ? "sun" : "moon";

const updateThemeIcon = () => {
    const icon = getCurrentIcon();
    themeBtn.classList.toggle("sun", icon === "sun");
    themeBtn.classList.toggle("moon", icon === "moon");
};

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

document.body.classList.add(savedTheme === "dark" ? "dark-theme" : "light-theme");
themeBtn.classList.add(savedIcon === "moon" ? "moon" : "sun");


// Set the initial theme and icon classes
document.body.classList.add(savedTheme === "dark" ? "dark-theme" : "light-theme");
themeBtn.classList.add(savedIcon === "sun" ? "sun" : "moon");

// Scroll to top

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
});

// Scroll Reveal Animation

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 100, origin: 'left', interval: 100 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .copy-right', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li, .contact-right', { delay: 100, origin: 'right', interval: 100 });
ScrollReveal().reveal('.skills-description, services-description, .contact-card, .client-swiper, .contact-left', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 100, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 100 });