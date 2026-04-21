// LOADER
window.onload = () => {
   setTimeout(() => {
       document.getElementById("loader").style.display = "none";
   }, 1200);
};

let total = 0;

// ADD TO CART
function addToCart(name, price) {
   total += price;

   document.getElementById("cart-count").innerText++;
   document.getElementById("total").innerText = total;

   let li = document.createElement("li");
   li.innerHTML = `${name} - P${price} <button onclick="removeItem(this, ${price})">❌</button>`;
   document.getElementById("cart-items").appendChild(li);
}

// REMOVE ITEM
function removeItem(button, price) {
   button.parentElement.remove();
   total -= price;

   document.getElementById("cart-count").innerText--;
   document.getElementById("total").innerText = total;
}

// TOGGLE CART
function toggleCart() {
   document.getElementById("cart").classList.toggle("active");
}

// MODE
function toggleMode() {
   document.body.classList.toggle("light-mode");
}
