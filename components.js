/* =============================================
   696 DEPT — Shared Components
   ============================================= */

const NAV_HTML = `
<nav class="navbar">
  <div class="container navbar-inner">
    <a href="index.html" class="nav-logo">696 DEPT</a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="gallery.html">Lookbook</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <button class="search-btn" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      <a href="cart.html" class="cart-icon-wrap" aria-label="Cart">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span class="cart-count" style="display:none">0</span>
      </a>
    </div>
    <div class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="nav-logo">696 DEPT</span>
        <p>Born from raw expression and unapologetic creativity. Streetwear that speaks.</p>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html">All T-Shirts</a></li>
          <li><a href="shop.html?cat=New+Arrivals">New Arrivals</a></li>
          <li><a href="shop.html?cat=Best+Sellers">Best Sellers</a></li>
          <li><a href="shop.html?cat=Limited+Edition">Limited Edition</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Info</h4>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="gallery.html">Lookbook</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="contact.html">FAQ</a></li>
          <li><a href="contact.html">Shipping Info</a></li>
          <li><a href="contact.html">Returns</a></li>
          <li><a href="contact.html">Size Guide</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 696 DEPT. All rights reserved. Gaborone, Botswana.</p>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">&#xe900;</a>
        <a href="#" aria-label="TikTok" style="font-family:sans-serif;font-size:14px;font-weight:700">d</a>
        <a href="#" aria-label="Twitter" style="font-size:14px">&#x1D54F;</a>
      </div>
    </div>
  </div>
</footer>

<div class="search-overlay" id="searchOverlay">
  <div class="search-overlay-inner">
    <div class="search-input-wrap">
      <input type="text" placeholder="Search products...">
      <button class="search-close" id="searchClose">&times;</button>
    </div>
  </div>
</div>
<div class="toast"></div>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
