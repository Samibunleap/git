function toggleDropdown() {
    let dropdown = document.getElementById("colorDropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}

function filterColor(color) {

    let products = document.querySelectorAll(".product");

    for (let i = 0; i < products.length; i++) {

        let productColor = products[i].getAttribute("data-color");

        if (productColor === color) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}