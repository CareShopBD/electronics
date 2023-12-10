document.addEventListener("DOMContentLoaded", function () {
    const navbarItems = document.querySelectorAll(".navbar li");
    const productCategories = document.querySelectorAll(".category");

    navbarItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedCategory = this.getAttribute("data-category");

            productCategories.forEach(category => {
                if (category.id === selectedCategory) {
                    category.style.display = "block";
                } else {
                    category.style.display = "none";
                }
            });
        });
    });
});

