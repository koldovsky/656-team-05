(function () {
    const products = [
      {
        title: "Clover Honey",
        image: "img/types-of-honey-icon1.svg",
      },
      {
        title: "Buckwheat Honey",
        image: "img/types-of-honey-icon2.svg",
      },
    
      {
        title: "Wildflower honey",
        image: "img/types-of-honey-icon3.svg",
      },
      {
        title: "Citrus Blossom honey",
        image: "img/types-of-honey-icon4.svg",

      },
    ];
  
    function renderProducts(products) {
      const productsContainer = document.querySelector(".types_oh_honey");
      for (const product of products) {
        productsContainer.innerHTML += `<article class="honey-show__card">
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
    </article>`;
      }
    }
  
    renderProducts(products);
  })();