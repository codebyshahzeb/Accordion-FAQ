const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
