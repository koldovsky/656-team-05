(function() {
const slides = [
    `<article class="honey-show__card">
        <img src="img/types-of-honey-icon1.svg" alt="Clover Honey">
        <h3 class="type of honey_card-name">Clover Honey</h3>
        <p>This honey is produced by honeybees that collect tne nectar of clover plants. Mild in taste an light
            nin colour.</p>
        <button>Buy Now</button>
    </article>
    <article class="honey-show__card">
        <img src="img/types-of-honey-icon2.svg" alt="Buckweat Honey">
        <h3 class="type of honey_card-name">Buckweat Honey</h3>
        <p>It is highly nutritious amber-colored honey with a slight reddish tint. It has a pleasant sweet
            taste.</p>
        <button>Buy Now</button>
    </article>
    <article class="honey-show__card">
        <img src="img/types-of-honey-icon3.svg" alt="Wildflower honey">
        <h3 class="type of honey_card-name">Wildflower honey</h3>
        <p>It is also known as polyfloral honey. It is made from a nestar of different species of flowers or
            bossoms.</p>
        <button>Buy Now</button>
    </article>
    <article class="honey-show__card">
        <img src="img/types-of-honey-icon4.svg" alt="Citrus Blossom honey">
        <h3 class="type of honey_card-name">Citrus Blossom honey</h3>
        <p>This honey is sweet an relatively thick, a perfect match for your tea or toast. It is the best
            association with California!</p>
        <button>Buy Now</button>
    </article>`
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
}}}});
