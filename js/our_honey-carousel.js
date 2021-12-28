(function() {

    const slides = [
        '<div><img src="img/w-f-honey.jpg" alt="wildflower honey"></div>',
        '<div><img src="img/bl-honey.jpg" alt="blossom honey"></div>',
        '<div><img src="img/cl-honey.jpg" alt="clover honey"></div>',
        '<div><img src="img/bw-honey.jpg" alt="buckwheat honey"></div>',
        '<div><img src="img/c-b-honey.jpg" alt="citrus blossom-honey"></div>'
    ];

    let CurrentSlide = 0;

    function showCurrentSlide() {
        const slideConteiner = document.querySelector('.our_honey-carousel__slide');
        slideConteiner.innerHTML = slides[currentSlide];
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

    setInterval(nextSlide, 1000);
    showCurrentSlide();

document.querySelector('.our_honey-carousel forward').addEventListener('click', nextSlide);

})();