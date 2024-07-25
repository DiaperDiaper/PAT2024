document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-slide");
    const nextButton = document.querySelector(".next-slide");

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        }

        slides.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    showSlide(currentSlide);

    prevButton.addEventListener("click", () => {
        currentSlide--;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
    });
});