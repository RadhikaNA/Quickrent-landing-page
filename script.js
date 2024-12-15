// Example of a scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    fadeIns.forEach(fadeIn => appearOnScroll.observe(fadeIn));
});
