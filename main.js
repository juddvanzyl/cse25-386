/* =============================================
   696 DEPT — Shared JavaScript
   Cart, UI interactions, search
   ============================================= */

// ─── Cart State ───────────────────────────────
const Cart = {
  items: JSON.parse(localStorage.getItem('696dept_cart') || '[]'),

  save() {
    localStorage.setItem('696dept_cart', JSON.stringify(this.items));
    this.updateUI();
  },

  add(product) {
    const key = `${product.id}_${product.size}_${product.color}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) {
      existing.qty += product.qty;
    } else {
      this.items.push({ ...product, key });
    }
    this.save();
    showToast('Item added to cart!');
  },

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
  },

  updateQty(key, delta) {
    const item = this.items.find(i => i.key === key);
    if (item) {
      item.qty = Math.max(1, item.qty + delta);
      this.save();
    }
  },

  get total() {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  },

  get count() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  },

  updateUI() {
    const counters = document.querySelectorAll('.cart-count');
    counters.forEach(el => {
      el.textContent = this.count;
      el.style.display = this.count > 0 ? 'flex' : 'none';
    });
  }
};

// ─── Toast Notification ───────────────────────
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Search Overlay ───────────────────────────
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const openBtns = document.querySelectorAll('.search-btn');
  const closeBtn = document.getElementById('searchClose');
  if (!overlay) return;

  openBtns.forEach(btn => btn.addEventListener('click', () => {
    overlay.classList.add('active');
    overlay.querySelector('input')?.focus();
  }));

  closeBtn?.addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });
}

// ─── Qty Controls ─────────────────────────────
function initQtyControls() {
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const minus = ctrl.querySelector('.qty-minus');
    const plus = ctrl.querySelector('.qty-plus');
    const val = ctrl.querySelector('.qty-value');

    minus?.addEventListener('click', () => {
      const v = parseInt(val.textContent);
      if (v > 1) val.textContent = v - 1;
    });

    plus?.addEventListener('click', () => {
      const v = parseInt(val.textContent);
      val.textContent = v + 1;
    });
  });
}

// ─── Active Nav Link ──────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ─── Mobile Nav ───────────────────────────────
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'white';
    navLinks.style.padding = '20px 24px';
    navLinks.style.borderBottom = '1px solid #e8e8e8';
    navLinks.style.zIndex = '99';
  });
}

// ─── Init All ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateUI();
  initSearch();
  initQtyControls();
  setActiveNav();
  initMobileNav();
});

// ─── Product Data ─────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'Bold 696 Tee',
    price: 299,
    category: 'Graphic Tees',
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'This streetwear tee is made for everyday comfort and bold expression. Premium cotton. Limited drop.',
    badge: 'Best Seller',
    img: 'css/img-tee-black-1.jpg'
  },
  {
    id: 2,
    name: 'Classic 696 Tee',
    price: 299,
    category: 'New Arrivals',
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The classic 696 graphic tee. Clean, minimal, and built to last.',
    img: 'css/img-tee-white-1.jpg'
  },
  {
    id: 3,
    name: 'Global Tee',
    price: 299,
    category: 'Graphic Tees',
    colors: ['Black', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Globe-inspired graphic. Represent culture worldwide.',
    img: 'css/img-tee-black-2.jpg'
  },
  {
    id: 4,
    name: 'Splatter 696 Tee',
    price: 299,
    category: 'Limited Edition',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Limited edition splatter print. One of a kind.',
    badge: 'Limited',
    img: 'css/img-tee-white-2.jpg'
  },
  {
    id: 5,
    name: 'Worldwide Tee',
    price: 299,
    category: 'New Arrivals',
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: '696 DEPT goes worldwide. Premium heavyweight cotton.',
    img: 'css/img-tee-white-3.jpg'
  },
  {
    id: 6,
    name: 'Heritage Tee',
    price: 299,
    category: 'Best Sellers',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heritage fleur-de-lis graphic on 100% cotton.',
    img: 'css/img-tee-black-3.jpg'
  },
  {
    id: 7,
    name: 'Core 696 Tee',
    price: 299,
    category: 'Best Sellers',
    colors: ['Grey', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The everyday essential. Stonewash grey edition.',
    img: 'css/img-tee-grey-1.jpg'
  },
  {
    id: 8,
    name: 'Back Print Tee',
    price: 299,
    category: 'Graphic Tees',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Big back graphic. Statement piece for the streets.',
    img: 'css/img-tee-black-4.jpg'
  }
];
