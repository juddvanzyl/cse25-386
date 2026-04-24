// CART STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SAVE CART
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart();
  alert("Added to cart");
}

// DISPLAY CART
function displayCart() {
  const cartContainer = document.querySelector(".cart-items");
  const totalElement = document.querySelector(".total-price");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.name}</p>
        <p>P${item.price}</p>
        <div>
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.qty}
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
        <button onclick="removeItem(${index})">X</button>
      </div>
    `;
  });

  if (totalElement) {
    totalElement.textContent = "P" + total;
  }
}

// CHANGE QUANTITY
function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  displayCart();
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

// CHECKOUT (SIMULATION)
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "confirmation.html";
}

// LOAD CART ON PAGE
document.addEventListener("DOMContentLoaded", displayCart);
