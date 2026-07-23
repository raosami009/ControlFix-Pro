# Gearnix Design Guide (Exact Source Values)

Pulled directly from the theme's live CSS custom properties (Shopify "Vinova Gearnix" theme) — not estimated from the screenshot. Dark violet base with a BlueViolet → HotPink gradient accent, **Orbitron** for headings/branding and **Poppins** as the default/body font.

---

## 🎨 Color Palette (exact hex from source)

| Role | Hex | RGB | Source variable / usage |
|---|---|---|---|
| Background — Primary (page) | `#10012A` | 16, 1, 42 | `.template-index` body background |
| Background — Secondary (services/policy panel) | `#1B0631` | 27, 6, 49 | `.policy-item-content` background |
| Background — Black scheme | `#000000` | 0, 0, 0 | `.color-background-2` |
| Text / Title — Primary | `#FFFFFF` | 255, 255, 255 | `--color-title` on dark schemes |
| Text — Muted (most common body/sub-title color) | `#9F99AA` | 159, 153, 170 | `--color-text` / most `sub_title` blocks |
| Text — Muted variant (about/testimonial sub) | `#82758E` | 130, 117, 142 | "OUR SERVICES" section desc |
| Text — Muted variant (promo sub) | `#B0A1C3` | 176, 161, 195 | "Super Weekly Promotions" subtitle |
| Text — Muted variant (footer sub) | `#AD9FB2` | 173, 159, 178 | Newsletter section subtitle |
| Accent Gradient — Start (BlueViolet) | `#8A2BE2` | 138, 43, 226 | Buttons, hover states |
| Accent Gradient — End (HotPink) | `#FF69B4` | 255, 105, 180 | Buttons, `--color-hover` |
| Product card — Background | `#FFFFFF` | 255, 255, 255 | `--product-color-background` |
| Product card — Border | `#F5F6FC` | 245, 246, 252 | `--product-color-border` |
| Product card — Title | `#1C1C1C` | 28, 28, 28 | `--product-color-title` |
| Product card — Title hover | `#FF512F` | 255, 81, 47 | `--product-color-title-hover` |
| Badge — Sale/Discount | `#D40909` | 212, 9, 9 | `--product-color-badge-sale` |
| Badge — New | `#0D9D00` | 13, 157, 0 | `--product-color-badge-new` |

**Signature gradient** (exact, used on every button, wishlist badge, star-rating fill, and cart-count bubble):
```css
/* default state */
background: linear-gradient(135deg, rgba(138, 43, 226, 1) 0%, rgba(255, 105, 180, 1) 100%);
/* hover state (reversed) */
background: linear-gradient(135deg, rgba(255, 105, 180, 1) 0%, rgba(138, 43, 226, 1) 100%);
```

Section-background wash (used behind services/testimonials/newsletter panels):
```css
background: linear-gradient(180deg, rgba(241, 98, 186, 0.05) 0%, rgba(139, 57, 107, 0.4) 100%);
```

---

## ✍️ Typography (exact source tokens)

```css
--font-family-primary: Orbitron;   /* headings / display */
--font-family-default: Poppins;    /* body / buttons / UI */
```

| Token | Value |
|---|---|
| H1 font size | `3.6rem` |
| H2 font size | `2.4rem` |
| H3 font size | `1.8rem` |
| H4 font size | `1.6rem` |
| H5 font size | `1.4rem` |
| H6 font size | `1.0rem` |
| Heading weight | `800` |
| Heading line-height | `1.2` |
| Body font size | `1.4rem` |
| Body weight | `400` |
| Body line-height | `1.5` |
| Section heading size | `40px` (desktop) → `28px` (≤1199px) |
| Section heading weight | `600` |
| Section sub/desc heading size | `16px`, weight `400` |
| Button font | Poppins (`--font-family-default`), size `1.4rem`, weight `500`, text-transform `capitalize` |
| Button corner radius | `5px` |

**Google Fonts import (as loaded by the theme):**
```html
<link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Orbitron:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
```

---

## Ready-to-use CSS

```css
:root {
  /* Colors */
  --bg-primary: #10012A;
  --bg-secondary: #1B0631;
  --bg-black: #000000;
  --text-primary: #FFFFFF;
  --text-muted: #9F99AA;
  --accent-start: #8A2BE2;
  --accent-end: #FF69B4;

  --product-bg: #FFFFFF;
  --product-border: #F5F6FC;
  --product-title: #1C1C1C;
  --product-title-hover: #FF512F;
  --badge-sale: #D40909;
  --badge-new: #0D9D00;

  --gradient-accent: linear-gradient(135deg, var(--accent-start) 0%, var(--accent-end) 100%);
  --gradient-accent-hover: linear-gradient(135deg, var(--accent-end) 0%, var(--accent-start) 100%);
  --gradient-section-wash: linear-gradient(180deg, rgba(241, 98, 186, 0.05) 0%, rgba(139, 57, 107, 0.4) 100%);

  /* Fonts */
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Poppins', sans-serif;
}

body {
  background: var(--bg-primary);
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 1.4rem;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6, .logo {
  font-family: var(--font-heading);
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary);
}

h1 { font-size: 3.6rem; }
h2 { font-size: 2.4rem; }
h3 { font-size: 1.8rem; }
h4 { font-size: 1.6rem; }
h5 { font-size: 1.4rem; }
h6 { font-size: 1.0rem; }

.section-heading {
  font-size: 40px;
  font-weight: 600;
  color: var(--text-primary);
}
@media (max-width: 1199px) {
  .section-heading { font-size: 28px; }
}

.btn {
  font-family: var(--font-body);
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: capitalize;
  background: var(--gradient-accent);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  position: relative;
  transition: background 0.3s;
}
.btn:hover {
  background: var(--gradient-accent-hover);
}

.section-panel {
  background: var(--bg-secondary);
  border-radius: 10px;
}

.section-wash {
  background: var(--gradient-section-wash);
}

.product-card {
  background: var(--product-bg);
  border: 1px solid var(--product-border);
  border-radius: 10px;
  color: var(--product-title);
}
.product-card .title:hover { color: var(--product-title-hover); }
.badge-sale { background: var(--badge-sale); color: #fff; }
.badge-new { background: var(--badge-new); color: #fff; }
```

---

## 🖼️ Key Image Assets (from the live theme)

| Asset | URL |
|---|---|
| Logo (white, for dark bg) | `https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258` |
| Logo (black, for light bg) | `https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_black_x320.png?v=1722670265` |
| Favicon | `https://nov-gearnix.myshopify.com/cdn/shop/files/favicon-nov.png` |
| Hero product image | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-1_2048x.png?v=1724138744` |
| "About us" image | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-2_2048x.png?v=1724140582` |
| "Feel it now" video-section background | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-3.png?v=1723713471` |
| "Core Features" image | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-4_2048x.png?v=1724032183` |
| Countdown/promo background | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-5.png?v=1723713471` |
| Newsletter image | `https://nov-gearnix.myshopify.com/cdn/shop/files/img-3-6.png?v=1724127192` |
| Service icons (4x) | `.../p-3-1_200x.png`, `p-3-2`, `p-3-3`, `p-3-4` (same CDN path, `?v=1723713470`) |
| "We use creativity" feature icons | `.../p-3-5_200x.png`, `p-3-6`, `p-3-7` (`?v=1723866677-8`) |
| Core Features icons | `.../i-3-1_200x.png` … `i-3-6_40x.png` (`?v=1723881125-6` / `1724031351`) |
| Newsletter popup image | `https://nov-gearnix.myshopify.com/cdn/shop/files/newletter_2048x.jpg?v=1725943683` |

> All product photography (consoles, controllers, headsets) lives under `/cdn/shop/files/` with responsive `_260x` … `_2048x` size suffixes — swap the size suffix for the resolution you need.

