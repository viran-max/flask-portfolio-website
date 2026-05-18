const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const btn = document.querySelector(".send-btn");

        btn.disabled = true;

        btn.querySelector(".btn-text").style.display = "none";

        btn.querySelector(".btn-loading").style.display = "inline-block";
    });
}

const successPopup = document.querySelector(".success-popup");

if (successPopup) {

    setTimeout(() => {

        successPopup.style.opacity = "0";

        successPopup.style.transform = "translateY(10px)";

        setTimeout(() => {

            successPopup.style.display = "none";

        }, 400);

    }, 3000);
}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});