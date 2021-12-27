(function () {
    const jars = [
      {
        title: "Wildflower Honey",
        image: "img/w-f-honey.jpg",
        price: 7.00,
      },
      {
        title: "Blossom Honey",
        image: "img/bl-honey.jpg",
        price: 20.00,
      },
      {
        title: "Clover Honey",
        image: "img/cl-honey.jpg",
        price: 8.00,
      },
      {
        title: "Buckwheat Honey",
        image: "img/bw-honey.jpg",
        price: 10.00,
      },
      {
        title: "Citrus Blossom Honey",
        image: "img/c-b-honey.jpg",
        price: 15.00,
      },
    ];
  
    function renderJars(jars) {
      const jarsContainer = document.querySelector(".our_honey_show");
      for (const product of jars) {
        jarsContainer.innerHTML += `<div id="box_w">
        <article class="our_honey-show__card">
            <img width="300" src="img/w-f-honey.jpg" alt="wildflower honey">
            <h3 class="our_honey-show__name">Wildflower Honey</h3>
            <p class="our_honey-show__price">$7.00</p>
            <button class="our_honey-button">Buy Now</button>
        </article>
    </div>
    <div id="box_bl">
        <article class="our_honey-show__card">
            <img width="300" src="img/bl-honey.jpg" alt="blossom honey">
            <h3 class="our_honey-show__name">Blossom Honey</h3>
            <p class="our_honey-show__price">$20.00</p>
            <button class="our_honey-button">Buy Now</button>
        </article>
    </div>
    <div id="box_cl">
        <article class="our_honey-show__card">
            <img width="300" src="img/cl-honey.jpg" alt="clover honey">
            <h3 class="our_honey-show__name">Clover Honey</h3>
            <p class="our_honey-show__price">$8.00</p>
            <button class="our_honey-button">Buy Now</button>
        </article>
    </div>
    <div id="box_b">
        <article class="our_honey-show__card">
            <img width="300" src="img/bw-honey.jpg" alt="buckwheat honey">
            <h3 class="our_honey-show__name">Buckwheat Honey</h3>
            <p class="our_honey-show__price">$10.00</p>
            <button class="our_honey-button">Buy Now</button>
        </article>
    </div>
    <div id="box_c">
        <article class="our_honey-show__card">
            <img width="300" src="img/c-b-honey.jpg" alt="citrus blossom-honey">
            <h3 class="our_honey-show__name">Citrus Blossom Honey</h3>
            <p class="our_honey-show__price">$15.00</p>
            <button class="our_honey-button">Buy Now</button>
        </article>
    </div>`;
      }
    }
  
    renderJars(jars);
  })();