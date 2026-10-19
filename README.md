# Tipsy Topsy Baker's & Restaurant — Demo Website

Demo website for **Tipsy Topsy Baker's & Restaurant**, Brahmasthan, Azamgarh (pure veg family restaurant & eggless bakery).

## Run it

```bash
npm install
ng serve        # or: npm start
```

Open http://localhost:4200/

## Build

```bash
ng build
```

## What's inside

- Angular 22 (standalone components, signals)
- Sections: Hero, Highlights, Menu (12 categories, 86 items with real prices from the
  restaurant's Justdial "Order Online" menu, live search, veg badges), Bakery spotlight,
  Reviews (real Google reviews), Visit Us (hours, map, directions), Footer
- **WhatsApp ordering**: add dishes to the cart → slide-in order drawer → "Order via WhatsApp"
  opens a pre-filled WhatsApp chat with the full order (item × qty, total, customer name)
- Floating WhatsApp chat button + "View order" pill
- Lucide icons (inlined SVG, no extra dependency), Fraunces + Inter fonts
- Fully responsive, no backend — pure frontend demo

## Before showing the restaurant

- WhatsApp number in `src/app/data/site-data.ts` (`whatsapp: '917267979933'`) is the number
  listed on Google Maps — confirm the restaurant's actual WhatsApp number and update it.
- Menu prices: 86 items across 12 categories taken from the restaurant's Justdial
  "Order Online" listing (same name + address as the Google Maps listing). Note: the
  restaurant's printed flyer (photos on the same page) shows slightly different, mostly
  lower prices plus extra categories (Pizza, Shakes, Mocktails, Combos, Soups) — confirm
  with the restaurant which rate card is current before going live.
- Drop real food/restaurant photos into `src/assets/` and reference them from the
  hero/bakery sections when available.
