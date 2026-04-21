
// CART SYSTEM
let cart = [];

function addToCart(item) {
   cart.push(item);
   document.getElementById("cart-count").innerText = cart.length;
   alert(item + " added to cart 🛒");
}

function viewCart() {
   if (cart.length === 0) {
       alert("Cart is empty");
   } else {
       alert("Cart:\n" + cart.join("\n"));
   }
}

// FORM
function submitForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;

   if (name === "" || email === "") {
       alert("Fill in all fields");
   } else {
       alert("Thanks " + name + " 🔥");
   }
}

// SCROLL ANIMATION
window.addEventListener("scroll", () => {
   let reveals = document.querySelectorAll(".reveal");

   reveals.forEach(el => {
       let top = el.getBoundingClientRect().top;
       let windowHeight = window.innerHeight;

       if (top < windowHeight - 100) {
           el.classList.add("active");
       }
   });
});

