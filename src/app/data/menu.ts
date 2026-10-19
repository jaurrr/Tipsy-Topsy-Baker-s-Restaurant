export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  cat: string;
  name: string;
  desc: string;
  price: number;
  tag?: 'Bestseller' | "Chef's Special" | 'Eggless';
}

export const MENU_CATS: MenuCategory[] = [
  { id: 'bakery', label: 'Bakery & Cakes', icon: 'cake-slice' },
  { id: 'maincourse', label: 'Main Course', icon: 'salad' },
  { id: 'chinese', label: 'Chinese', icon: 'soup' },
  { id: 'southindian', label: 'South Indian', icon: 'leaf' },
  { id: 'burgers', label: 'Burgers', icon: 'sandwich' },
  { id: 'sandwiches', label: 'Sandwiches', icon: 'croissant' },
  { id: 'pasta', label: 'Pasta', icon: 'wheat' },
  { id: 'momo', label: 'Momo', icon: 'sparkles' },
  { id: 'snacks', label: 'Snacks', icon: 'utensils' },
  { id: 'indiansnacks', label: 'Indian Snacks', icon: 'flame' },
  { id: 'maggi', label: 'Maggi', icon: 'cookie' },
  { id: 'coffee', label: 'Coffee & Beverages', icon: 'coffee' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ---- Bakery & Cakes (all eggless, baked in-house) ----
  { id: 'b1', cat: 'bakery', name: 'White Forest Cake (500 g)', desc: 'Classic vanilla sponge, cream & white chocolate shavings.', price: 490, tag: 'Bestseller' },
  { id: 'b2', cat: 'bakery', name: 'Full Chocolate Cake (500 g)', desc: 'Rich chocolate sponge layered with silky ganache.', price: 500, tag: 'Eggless' },
  { id: 'b3', cat: 'bakery', name: 'Black Forest Cake (500 g)', desc: 'Chocolate, cherry & cream — the timeless celebration cake.', price: 450, tag: 'Eggless' },
  { id: 'b4', cat: 'bakery', name: 'Black Forest Regular Cake (500 g)', desc: 'Everyday-size black forest with the same classic taste.', price: 375, tag: 'Eggless' },
  { id: 'b5', cat: 'bakery', name: 'Pineapple Cake (500 g)', desc: 'Light sponge with juicy pineapple & fresh cream.', price: 450, tag: 'Eggless' },
  { id: 'b6', cat: 'bakery', name: 'Choco Chips Cake (500 g)', desc: 'Double chocolate loaded with crunchy choco chips.', price: 600, tag: 'Eggless' },
  { id: 'b7', cat: 'bakery', name: 'Black Forest Pastry', desc: "A single-serve slice of everyone's favourite.", price: 75, tag: 'Bestseller' },
  { id: 'b8', cat: 'bakery', name: 'Pineapple Pastry', desc: 'Pineapple & cream pastry — light and fresh.', price: 75 },
  { id: 'b9', cat: 'bakery', name: 'Choco Garnish Pastry', desc: 'Chocolate pastry finished with a rich garnish.', price: 75 },
  { id: 'b10', cat: 'bakery', name: 'Cassata Pastry', desc: 'Layered ice-cream-style cassata slice.', price: 85 },
  { id: 'b11', cat: 'bakery', name: 'Pyramid Pastry', desc: 'Tall triple-layer pastry for serious chocolate lovers.', price: 115 },
  { id: 'b12', cat: 'bakery', name: 'Choco Chips Pastry', desc: 'Chocolate pastry studded with choco chips.', price: 115 },
  { id: 'b13', cat: 'bakery', name: 'Sparkle Candle (Small)', desc: 'Small sparkling candle for birthday cakes.', price: 30 },
  { id: 'b14', cat: 'bakery', name: 'Sparkle Candle (Large)', desc: 'Large sparkling candle — make the moment shine.', price: 80 },

  // ---- Main Course ----
  { id: 'm1', cat: 'maincourse', name: 'Bhojan Thali', desc: 'The full meal — dal, sabzi, roti, rice & more.', price: 270, tag: 'Bestseller' },
  { id: 'm2', cat: 'maincourse', name: 'Special Mini Thali', desc: 'A lighter thali for smaller appetites.', price: 200 },
  { id: 'm3', cat: 'maincourse', name: 'Shahi Paneer', desc: 'Royal creamy paneer in a rich tomato gravy.', price: 360 },
  { id: 'm4', cat: 'maincourse', name: 'Kadhai Paneer', desc: 'Paneer tossed with charred peppers & kadhai masala.', price: 325 },
  { id: 'm5', cat: 'maincourse', name: 'Matar Paneer', desc: 'Homestyle peas & paneer curry.', price: 300 },
  { id: 'm6', cat: 'maincourse', name: 'Paneer Butter Masala', desc: 'Silky butter-tomato gravy with soft paneer.', price: 310 },
  { id: 'm7', cat: 'maincourse', name: 'Paneer Dopyaza', desc: 'Paneer with double onions in a rustic masala.', price: 325 },
  { id: 'm8', cat: 'maincourse', name: 'Mix Veg', desc: 'Seasonal vegetables in a light homestyle curry.', price: 180 },
  { id: 'm9', cat: 'maincourse', name: 'Matar Mushroom Capsicum', desc: 'Peas, mushroom & capsicum in a spiced gravy.', price: 350 },
  { id: 'm10', cat: 'maincourse', name: 'Mushroom Dopyaza', desc: 'Mushroom & onion in a peppery masala.', price: 325 },
  { id: 'm11', cat: 'maincourse', name: 'Dal Fry', desc: 'Yellow dal tempered with ghee & garlic.', price: 115 },
  { id: 'm12', cat: 'maincourse', name: 'Dal Tadka', desc: 'Dal with a smoky tadka, dhaba style.', price: 150 },
  { id: 'm13', cat: 'maincourse', name: 'Jeera Rice', desc: 'Steamed rice tossed with ghee-roasted cumin.', price: 150 },
  { id: 'm14', cat: 'maincourse', name: 'Steam Rice', desc: 'Simple steamed basmati rice.', price: 125 },
  { id: 'm15', cat: 'maincourse', name: 'Tawa Butter Naan', desc: 'Soft tawa naan brushed with butter.', price: 50 },
  { id: 'm16', cat: 'maincourse', name: 'Tawa Naan', desc: 'Fresh tawa-cooked naan.', price: 40 },
  { id: 'm17', cat: 'maincourse', name: 'Butter Roti', desc: 'Whole wheat roti with butter.', price: 20 },
  { id: 'm18', cat: 'maincourse', name: 'Tawa Roti', desc: 'Fresh whole wheat tawa roti.', price: 15 },
  { id: 'm19', cat: 'maincourse', name: 'Laccha Paratha', desc: 'Flaky layered whole-wheat paratha.', price: 55 },
  { id: 'm20', cat: 'maincourse', name: 'Tawa Roti Combo', desc: "Roti combo — ask the counter for today's mix.", price: 100 },
  { id: 'm21', cat: 'maincourse', name: 'Green Salad', desc: 'Fresh cut salad with lemon.', price: 75 },
  { id: 'm22', cat: 'maincourse', name: 'Onion Rings', desc: 'Crisp onion rings with chaat masala.', price: 30 },
  { id: 'm23', cat: 'maincourse', name: 'Plain Papad (1 pc)', desc: 'Roasted papad.', price: 35 },
  { id: 'm24', cat: 'maincourse', name: 'Masala Papad', desc: 'Papad topped with onion-tomato masala.', price: 60 },
  { id: 'm25', cat: 'maincourse', name: 'Fry Papad (1 pc)', desc: 'Crisp fried papad.', price: 50 },

  // ---- Chinese ----
  { id: 'c1', cat: 'chinese', name: 'Veg Fried Rice', desc: 'Smoky wok-tossed rice with crunchy vegetables.', price: 140 },
  { id: 'c2', cat: 'chinese', name: 'Veg Noodles', desc: 'Street-style noodles tossed on a high flame.', price: 140, tag: 'Bestseller' },
  { id: 'c3', cat: 'chinese', name: 'Hakka Noodles', desc: 'Classic hakka noodles with garden veggies.', price: 210 },
  { id: 'c4', cat: 'chinese', name: 'Paneer Noodles', desc: 'Noodles tossed with soft paneer cubes.', price: 190 },
  { id: 'c5', cat: 'chinese', name: 'Schezwan Mushroom Noodles', desc: 'Fiery schezwan noodles with mushrooms.', price: 235, tag: "Chef's Special" },
  { id: 'c6', cat: 'chinese', name: 'Paneer Fried Rice', desc: 'Fried rice with spiced paneer.', price: 190 },
  { id: 'c7', cat: 'chinese', name: 'Manchurian Dry', desc: 'Crisp veg manchurian balls in a garlic-soy glaze.', price: 270 },
  { id: 'c8', cat: 'chinese', name: 'Manchurian Gravy', desc: 'Manchurian balls in a savoury gravy.', price: 270 },
  { id: 'c9', cat: 'chinese', name: 'Chilli Paneer Dry', desc: 'Charred paneer tossed with peppers & spring onion.', price: 290 },
  { id: 'c10', cat: 'chinese', name: 'Chilli Paneer Gravy', desc: 'Chilli paneer in a spicy, glossy gravy.', price: 290 },

  // ---- South Indian ----
  { id: 'd1', cat: 'southindian', name: 'Paper Dosa', desc: 'Extra crisp, extra large paper dosa.', price: 100 },
  { id: 'd2', cat: 'southindian', name: 'Special Masala Dosa', desc: 'Masala dosa with our special filling.', price: 155 },
  { id: 'd3', cat: 'southindian', name: 'Paneer Masala Dosa', desc: 'Dosa stuffed with spiced paneer masala.', price: 220 },
  { id: 'd4', cat: 'southindian', name: 'Idli Fry', desc: 'Crisp-fried idli tossed in podi masala.', price: 80 },
  { id: 'd5', cat: 'southindian', name: 'Chilli Idli', desc: 'Idli cubes in an Indo-Chinese chilli sauce.', price: 150 },

  // ---- Burgers ----
  { id: 'g1', cat: 'burgers', name: 'Veg Burger', desc: 'Crispy veg patty in a soft toasted bun.', price: 65 },
  { id: 'g2', cat: 'burgers', name: 'Veg Cheese Burger', desc: 'Veg patty with a molten cheese slice.', price: 105 },
  { id: 'g3', cat: 'burgers', name: 'Veg Grilled Burger', desc: 'Grilled patty with a smoky flavour.', price: 105 },
  { id: 'g4', cat: 'burgers', name: 'Veg Cheese Grilled Burger', desc: 'Grilled patty, cheese & crunchy veggies.', price: 130 },

  // ---- Sandwiches ----
  { id: 'w1', cat: 'sandwiches', name: 'Veg Grilled Sandwich', desc: 'Triple-layer grilled sandwich with veggies.', price: 90 },
  { id: 'w2', cat: 'sandwiches', name: 'Cheese Grilled Sandwich', desc: 'Grilled sandwich with molten cheese.', price: 130 },
  { id: 'w3', cat: 'sandwiches', name: 'Corn Grilled Sandwich', desc: 'Sweet corn & cheese, grilled crisp.', price: 130 },
  { id: 'w4', cat: 'sandwiches', name: 'Paneer Grilled Sandwich', desc: 'Spiced paneer filling, grilled golden.', price: 155 },

  // ---- Pasta ----
  { id: 'p1', cat: 'pasta', name: 'Red Chilli Pasta', desc: 'Pasta in a spicy red sauce.', price: 185 },
  { id: 'p2', cat: 'pasta', name: 'White Cheese Pasta', desc: 'Creamy white-sauce pasta with cheese.', price: 240 },
  { id: 'p3', cat: 'pasta', name: 'Mixed Sauce Pasta', desc: 'Half red, half white — the best of both.', price: 240 },

  // ---- Momo ----
  { id: 'o1', cat: 'momo', name: 'Fry Momo (6 pcs)', desc: 'Golden fried momos with spicy chutney.', price: 155 },
  { id: 'o2', cat: 'momo', name: 'Chilli Momo (6 pcs)', desc: 'Momos tossed in a fiery chilli-garlic sauce.', price: 195 },

  // ---- Snacks ----
  { id: 's1', cat: 'snacks', name: 'Finger Chips', desc: 'Golden crispy finger chips.', price: 120 },
  { id: 's2', cat: 'snacks', name: 'Chilli Potato', desc: 'Crispy potato fingers in a chilli-garlic glaze.', price: 195 },
  { id: 's3', cat: 'snacks', name: 'Honey Chilli Potato', desc: 'Crispy potato with a sweet-spicy honey chilli glaze.', price: 235, tag: 'Bestseller' },
  { id: 's4', cat: 'snacks', name: 'Crispy Corn Pebbles', desc: 'Crunchy corn bites — dangerously snackable.', price: 230 },
  { id: 's5', cat: 'snacks', name: 'Golden Baby Corn', desc: 'Crisp baby corn in a light seasoning.', price: 235 },
  { id: 's6', cat: 'snacks', name: 'Crispy Chilli Baby Corn', desc: 'Baby corn tossed in a chilli-pepper sauce.', price: 260 },
  { id: 's7', cat: 'snacks', name: 'Crispy Chilli Mushroom', desc: 'Crunchy mushroom in a fiery glaze.', price: 260 },

  // ---- Indian Snacks ----
  { id: 'n1', cat: 'indiansnacks', name: 'Pav Bhaji', desc: 'Hot buttery bhaji with soft toasted pav.', price: 140, tag: 'Bestseller' },
  { id: 'n2', cat: 'indiansnacks', name: 'Chole Bhature', desc: 'Fluffy bhature with spicy homestyle chole.', price: 140 },
  { id: 'n3', cat: 'indiansnacks', name: 'Paneer Pakoda (6 pcs)', desc: 'Crisp golden paneer fritters.', price: 120 },
  { id: 'n4', cat: 'indiansnacks', name: 'Extra Pav', desc: 'Two extra butter-toasted pav.', price: 50 },

  // ---- Maggi ----
  { id: 'a1', cat: 'maggi', name: 'Masala Maggi', desc: 'The all-time favourite — masala maggi, made right.', price: 80 },
  { id: 'a2', cat: 'maggi', name: 'Cheese Corn Maggi', desc: 'Maggi with sweet corn & molten cheese.', price: 130 },

  // ---- Coffee & Beverages ----
  { id: 'v1', cat: 'coffee', name: 'Hot Coffee', desc: 'Freshly brewed — strong & comforting.', price: 65 },
  { id: 'v2', cat: 'coffee', name: 'Black Coffee', desc: 'Bold black coffee, no milk.', price: 60 },
  { id: 'v3', cat: 'coffee', name: 'Cold Coffee', desc: 'Blended iced coffee with a frothy top.', price: 145 },
  { id: 'v4', cat: 'coffee', name: 'Cold Coffee With Ice-cream', desc: 'Cold coffee crowned with vanilla ice cream.', price: 180 },
  { id: 'v5', cat: 'coffee', name: 'Coke Can (180 ml)', desc: 'Chilled Coca-Cola can.', price: 35 },
  { id: 'v6', cat: 'coffee', name: 'Soft Drink Can (180 ml)', desc: 'Chilled soft drink can.', price: 35 },
];

export const MENU_MAP: Record<string, MenuItem> = Object.fromEntries(MENU_ITEMS.map((i) => [i.id, i]));

export interface Review {
  name: string;
  meta: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'R k Jaan',
    meta: 'Google review',
    text: 'Best cake shop in Azamgarh. Maine bhot baar order kia hai yaha se. Bhot aacha cake banate hai ye log. Price bhee bhot genuine hai.',
  },
  {
    name: 'Pawan Kumar',
    meta: 'Google review',
    text: 'Tasty food. Veg noodles aur pav bhaji Azamgarh me inse aacha koi ni bana sakta. Aur pure veg.',
  },
  {
    name: 'Google review summary',
    meta: 'From 286 Google reviews',
    text: 'Quality place, quality food and great hospitality… do visit! Well designed, awesome service and friendly behaviour of staff.',
  },
];
