let cart = [];

function addToCart() {
cart.push({name: "Graphic Tee", price: 250});
alert("Added to cart");
updateCart();
}

function updateCart() {
let list = document.getElementById("cart-items");
let total = 0;

if (!list) return;

list.innerHTML = "";

cart.forEach(item => {
let li = document.createElement("li");
li.textContent = item.name + " - P" + item.price;
list.appendChild(li);
total += item.price;
});

document.getElementById("total").textContent = total;
}
