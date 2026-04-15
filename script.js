// Change About Text
function changeText() {
    document.getElementById("aboutText").innerHTML =
        "We specialize in connecting customers with their dream cars. At JUDD's MOTOR ZONE, we ensure quality, affordability, and trust in every deal.";
}

// Simple Welcome Alert (runs when page loads)
window.onload = function () {
    console.log("Welcome to JUDD's MOTOR ZONE About Page");
};

// Highlight Navigation Active Link
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// Back to Top Button (optional enhancement)
const btn = document.createElement("button");
btn.innerText = "↑ Top";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.display = "none";

document.body.appendChild(btn);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
