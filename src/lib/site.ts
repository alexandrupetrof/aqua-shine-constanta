export const SITE = {
  name: "Speed Aqua Sea",
  tagline: "Servicii Profesionale de Curățenie",
  phone: "0738877347",
  phoneDisplay: "0738 877 347",
  whatsapp: "40738877347",
  whatsappMessage: "Bună ziua, doresc o ofertă pentru servicii de curățenie.",
  area: "Județul Constanța",
  email: "contact@speedaquasea.ro",
  schedule: [
    { day: "Luni – Vineri", hours: "08:00 – 20:00" },
    { day: "Sâmbătă", hours: "09:00 – 18:00" },
    { day: "Duminică", hours: "La cerere" },
  ],
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+4${SITE.phone}`;
