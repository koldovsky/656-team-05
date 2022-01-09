(function() {
    const jars = [
        {
          id: "1",
          title: "Wildflower Honey",
          image: "img/w-f-honey.jpg",
          price: "$7.00",
        },
        {
          id: "2",
          title: "Blossom Honey",
          image: "img/bl-honey.jpg",
          price: "$20.00",
        },
        {
          id: "3",
          title: "Clover Honey",
          image: "img/cl-honey.jpg",
          price: "$8.00",
        },
        {
          id: "4",
          title: "Buckwheat Honey",
          image: "img/bw-honey.jpg",
          price: "$10.00",
        },
        {
          id: "5",
          title: "Citrus Blossom Honey",
          image: "img/c-b-honey.jpg",
          price: "$15.00",
        },
      ];
    
      function renderSlide(jars) {
        return `<article class="our_honey-show__card">
          <img class="our_honey-show__image" width="300" src="${jars.image}" alt="${jars.title}">
          <h3 class="our_honey-show__name">${jars.title}</h3>
          <p class="our_honey-show__price">${jars.price}</p>
          <button class="our_honey-button">Buy Now</button>
        </article>`;
        }

    let currentSlide = 0;

    function renderJars() {
        const jarsContainer = document.querySelector(".our_honey-carousel__slide");
        jarsContainer.innerHTML = renderSlide(jars[currentSlide]);
        if (window.innerWidth > 600) {
            const secondSlide =
                currentSlide + 1 >= jars.length ? 0 : currentSlide + 1;
            jarsContainer.innerHTML += renderSlide(jars[secondSlide]);

            if (window.innerWidth > 900) {
                const thirdSlide =
                secondSlide + 1 >= jars.length ? 0 : secondSlide + 1;
                jarsContainer.innerHTML += renderSlide(jars[thirdSlide]);

                if (window.innerWidth > 900) {
                  const fourthSlide =
                  thirdSlide + 1 >= jars.length ? 0 : thirdSlide + 1;
                  jarsContainer.innerHTML += renderSlide(jars[fourthSlide]);
                }
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide +1 >= jars.length ? 0 : currentSlide + 1;
        renderJars();
    }

    renderJars(jars);

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? jars.length - 1 : currentSlide - 1;
        renderJars();
    }

    document.querySelector('.our_honey-carousel__button.forward').addEventListener('click', nextSlide);
    document.querySelector('.our_honey-carousel__button.back').addEventListener('click', prevSlide);
    window.addEventListener('resize', renderJars);
})();