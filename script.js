document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".project-card, .hero-content");

    const reveal = () => {
        elements.forEach(el => {
            let pos = el.getBoundingClientRect().top;
            if (pos < window.innerHeight - 100) {
                el.style.transition = "0.8s";
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    };

    reveal();
    window.addEventListener("scroll", reveal);
});
