let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {

    const countElements =
    document.querySelectorAll('.cart-count');

    countElements.forEach(el => {
        el.textContent = cart.length;
    });
}

function addToCart(product) {

    cart.push(product);

    localStorage.setItem(
        'cart',
        JSON.stringify(cart)
    );

    updateCartCount();

    alert('Added to Cart');
}

updateCartCount();
