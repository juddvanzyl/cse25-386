let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;
    cartItems.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between">
                <p>${item.name}</p>
                <p>P${item.price}</p>
            </div>
        `;
    });

    document.getElementById("total").innerText = "P" + total;
}
