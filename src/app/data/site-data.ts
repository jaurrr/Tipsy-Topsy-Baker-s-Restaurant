export const SITE = {
  name: "Tipsy Topsy Baker's & Restaurant",
  nameHi: 'टिप्सी टॉप्सी बेकर\u2019स & रेस्टोरेंट',
  tagline: 'Pure Veg Family Restaurant & Eggless Bakery',
  phoneDisplay: '072679 79933',
  phoneIntl: '+91 72679 79933',
  phoneHref: 'tel:+917267979933',
  whatsapp: '917267979933',
  address: 'Shikshak Bhawan, Near Dr. Salmani, Brahmasthan, Azamgarh, Uttar Pradesh 276001',
  addressShort: 'Brahmasthan, Azamgarh',
  hours: '10:30 AM – 10:00 PM',
  hoursNote: 'Open all days of the week',
  rating: '4.2',
  reviewCount: '286',
  priceForTwo: '₹400',
  priceBand: '₹200–400 per person',
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Tipsy+Topsy+Baker%27s+%26+Restaurant+Brahmasthan+Azamgarh",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Tipsy%20Topsy%20Baker%27s%20%26%20Restaurant%20Brahmasthan%20Azamgarh&output=embed",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(lines: { qty: number; name: string; price: number }[], total: number, name: string): string {
  const head = `*New Order \u2014 Tipsy Topsy*\n--------------------------`;
  const body = lines.map((l) => `${l.qty} x ${l.name} \u2014 \u20B9${l.qty * l.price}`).join('\n');
  const tail = `--------------------------\n*Total: \u20B9${total}*`;
  return name.trim() ? `${head}\n${body}\n${tail}\nName: ${name.trim()}` : `${head}\n${body}\n${tail}`;
}
