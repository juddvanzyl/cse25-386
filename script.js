function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');

  products.forEach(p => {
    const cats = (p.dataset.category || "").toLowerCase();
    if (category === 'all' || cats.includes(category)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
