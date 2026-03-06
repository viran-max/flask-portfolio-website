const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.2
    }
);

reveals.forEach(reveal => {
    observer.observe(reveal);
});
const skillBars = document.querySelectorAll(".skill-bar span");

skillBars.forEach(bar => {
    const width = bar.getAttribute("data-width");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bar.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(bar);
});
