(function() {

    const slides = [
        '<div><img src="img/w-f-honey.jpg" alt="wildflower honey"></div>',
        '<div><img src="img/bl-honey.jpg" alt="blossom honey"></div>',
        '<div><img src="img/cl-honey.jpg" alt="clover honey"></div>',
        '<div><img src="img/bw-honey.jpg" alt="buckwheat honey"></div>',
        '<div><img src="img/c-b-honey.jpg" alt="citrus blossom-honey"></div>'
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(".our_honey-carousel__slide");
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide +1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.our_honey-carousel__button.forward').addEventListener('click', nextSlide);
    document.querySelector('.our_honey-carousel__button.back').addEventListener('click', prevSlide);
        window.addEventListener('resize', showCurrentSlide);
})();