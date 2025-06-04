document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".bg-image");
    let currentIndex = 0;

    function changeBackground() {
        let current = images[currentIndex];
        let nextIndex = (currentIndex + 1) % images.length;
        let next = images[nextIndex];

        current.classList.remove("active");

        setTimeout(() => {
            next.classList.add("active");
        }, 300);

        currentIndex = nextIndex;
    }

    setInterval(changeBackground, 10000);
});
