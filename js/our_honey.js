(function () {
    const products = [
      {
        title: "Wildflower Honey",
        image: "img/w-f-honey.jpg",
        price: "$7.00",
      },
      {
        title: "Blossom Honey",
        image: "img/bl-honey.jpg",
        price: "$20.00",
      },
      {
        title: "Clover Honey",
        image: "img/cl-honey.jpg",
        price: "$8.00",
      },
      {
        title: "Buckwheat Honey",
        image: "img/bw-honey.jpg",
        price: "$10.00",
      },
      {
        title: "Citrus Blossom Honey",
        image: "img/c-b-honey.jpg",
        price: "$15.00",
      },
    ];
  
    function renderProducts(products) {
      const productsContainer = document.querySelector(".our_honey_show");
      for (const product of products) {
        productsContainer.innerHTML += `<article class="our_honey-show__card">
        <img class="our_honey-show__image" width="300" src="${product.image}" alt="${product.title}">
        <h3 class="our_honey-show__name">${product.title}</h3>
        <p class="our_honey-show__price">${product.price}</p>
        <button class="our_honey-button">Buy Now</button>
      </article>`;
      }
    }
  
    renderProducts(products);
  })();