window.addEventListener("scroll", function () {
    let e = document.querySelector("header");
    e.classList.toggle("sticky", window.scrollY > 0)
});
const serviceModals = document.querySelectorAll(".service-modal")
    , learnmoreBtns = document.querySelectorAll(".learn-more-btn")
    , modalCloseBtns = document.querySelectorAll(".modal-close-btn");
let modal = function (e) {
    serviceModals[e].classList.add("active")
};
learnmoreBtns.forEach((e, t) => {
    e.addEventListener("click", () => {
        modal(t)
    }
    )
}
),
    modalCloseBtns.forEach(e => {
        e.addEventListener("click", () => {
            serviceModals.forEach(e => {
                e.classList.remove("active")
            }
            )
        }
        )
    }
    );
const portfolioModals = document.querySelectorAll(".portfolio-modal")
    , imgCards = document.querySelectorAll(".img-card")
    , portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");
let portfolioModal = function (e) {
    portfolioModals[e].classList.add("active")
};
imgCards.forEach((e, t) => {
    e.addEventListener("click", () => {
        portfolioModal(t)
    }
    )
}
),
    portfolioCloseBtns.forEach(e => {
        e.addEventListener("click", () => {
            portfolioModals.forEach(e => {
                e.classList.remove("active")
            }
            )
        }
        )
    }
    );
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"),
        updateThemeIcon(),
        localStorage.setItem("saved-theme", getCurrentTheme()),
        localStorage.setItem("saved-icon", getCurrentIcon())
}
);
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"
    , getCurrentIcon = () => document.body.classList.contains("dark-theme") ? "sun" : "moon"
    , updateThemeIcon = () => {
        let e = getCurrentIcon();
        themeBtn.classList.toggle("sun", "sun" === e),
            themeBtn.classList.toggle("moon", "moon" === e)
    }
    , savedTheme = localStorage.getItem("saved-theme")
    , savedIcon = localStorage.getItem("saved-icon");
document.body.classList.add("dark" === savedTheme ? "dark-theme" : "light-theme"),
    themeBtn.classList.add("moon" === savedIcon ? "moon" : "sun"),
    document.body.classList.add("dark" === savedTheme ? "dark-theme" : "light-theme"),
    themeBtn.classList.add("sun" === savedIcon ? "sun" : "moon");
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
}),
    scrollTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0,
            document.documentElement.scrollTop = 0
    }
    ),
    window.addEventListener("scroll", () => {
        let e = document.querySelectorAll("section")
            , t = window.pageYOffset;
        e.forEach(e => {
            let o = e.offsetHeight
                , l = e.offsetTop - 50
                , a = e.getAttribute("id");
            t > l && t <= l + o ? document.querySelector(".nav-items a[href*=" + a + "]").classList.add("active") : document.querySelector(".nav-items a[href*=" + a + "]").classList.remove("active")
        }
        )
    }
    );
const menuBtn = document.querySelector(".nav-menu-btn")
    , closeBtn = document.querySelector(".nav-close-btn")
    , navigation = document.querySelector(".navigation")
    , navItems = document.querySelectorAll(".nav-items a");
menuBtn.addEventListener("click", () => {
    navigation.classList.add("active")
}
),
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active")
    }
    ),
    navItems.forEach(e => {
        e.addEventListener("click", () => {
            navigation.classList.remove("active")
        }
        )
    }
    ),
    ScrollReveal({
        reset: !0,
        distance: "60px",
        duration: 1e3,
        delay: 100
    }),
    ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {
        delay: 100,
        origin: "left"
    }),
    ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
        delay: 100,
        origin: "right"
    }),
    ScrollReveal().reveal(".home .info .btn", {
        delay: 100,
        origin: "bottom"
    }),
    ScrollReveal().reveal(".media-icons i, .contact-left li", {
        delay: 100,
        origin: "left",
        interval: 100
    }),
    ScrollReveal().reveal(".home-img, .about-img", {
        delay: 100,
        origin: "bottom"
    }),
    ScrollReveal().reveal(".about .description, .copy-right", {
        delay: 100,
        origin: "right"
    }),
    ScrollReveal().reveal(".about .professional-list li, .contact-right", {
        delay: 100,
        origin: "right",
        interval: 100
    }),
    ScrollReveal().reveal(".skills-description, services-description, .contact-card, .client-swiper, .contact-left", {
        delay: 100,
        origin: "left"
    }),
    ScrollReveal().reveal(".experience-card, .service-card, .education, .portfolio .img-card", {
        delay: 100,
        origin: "bottom",
        interval: 100
    }),
    ScrollReveal().reveal("footer .group", {
        delay: 500,
        origin: "top",
        interval: 100
    });
