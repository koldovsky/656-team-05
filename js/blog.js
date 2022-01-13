document.querySelectorAll(".blog__carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".blog__carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="blog__carousel-dot-button"></span>`
    });

    carousel.insertAdjacentHTML("beforeend", `<div class="blog__carousel-nav">${ buttonsHtml.join("") }</div>`);

    const buttons = carousel.querySelectorAll(".blog__carousel-dot-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-selectedd all the items
            items.forEach((item) => 
                item.classList.remove("blog__carousel-item-selected")
            );
            buttons.forEach((button) => 
                button.classList.remove("blog__carousel-dot-button-selected")
            );

            items[i].classList.add("blog__carousel-item-selected");
            button.classList.add("blog__carousel-dot-button-selected")
        });
    });

    // Select the first item on page load
    items[0].classList.add("blog__carousel-item-selected");
    buttons[0].classList.add("blog__carousel-dot-button-selected");
});

