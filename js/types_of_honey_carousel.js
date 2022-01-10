(function() {
const slides = [
'<img src = "img/types-of-honey-icon1.svg" alt="Clover Honey">',
'<img src = "img/types-of-honey-icon2.svg" alt="Buckweat Honey">',
'<img src = "img/types-of-honey-icon3.svg" alt="Wildflower honey">',
'<img src = "img/types-of-honey-icon4.svg" alt="Citrus Blossom honey">',

];
let currentSlide = 0;
function showCurrentSlide() {
        const slideContainer = document.querySelector('.types_of_honey_carousel_slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
}

function nextSlide() {
        currentSlide = currentSlide +1 >= slides.length ? 0 : currentSlide + 1;
        showCurrentSlide();
    }


    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
showCurrentSlide();
    }
{
    document.querySelector('.types_of_honey-carousel__button.forward').addEventListener('click', nextSlide);
    document.querySelector('.types_of_honey-carousel__button.forward').addEventListener('click', prevSlide);
    window.addEventListener('resize', renderJars);
}; 