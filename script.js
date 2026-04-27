let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart");
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");

  let total = 0;
  cartContainer.innerHTML = "";

  cartData.forEach(item => {
    total += item.price;
    cartContainer.innerHTML += `<p>${item.name} - P${item.price}</p>`;
  });

  document.getElementById("total").innerText = "Total: P" + total;
}
