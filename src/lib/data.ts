import {
  Home,
  Building2,
  Warehouse,
  Briefcase,
  Hammer,
  Sparkles,
  Store,
  Hotel,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  estimatedTime: string;
  pricing: string;
};

export const services: Service[] = [
  {
    slug: "garsoniere",
    icon: Home,
    title: "Curățenie garsoniere",
    short: "Curățenie completă pentru garsoniere, rapid și profesional.",
    description:
      "Spațiu mic, rezultat impecabil. Curățăm fiecare colț cu produse și echipamente profesionale, ideal pentru proprietari, chiriași sau regim hotelier.",
    benefits: ["Praf, geamuri, băi", "Dezinfectare suprafețe", "Aspirare & spălare"],
    estimatedTime: "2 – 3 ore",
    pricing: "de la 100 lei",
  },
  {
    slug: "apartamente",
    icon: Building2,
    title: "Curățenie apartamente",
    short: "Apartamente 2, 3 sau 4 camere — întreținere sau curățenie generală.",
    description:
      "Servicii personalizate pentru apartamente din Constanța. Folosim produse profesionale, sigure pentru copii și animale.",
    benefits: ["Bucătărie & baie", "Geamuri interior", "Pardoseli & mobilier"],
    estimatedTime: "3 – 5 ore",
    pricing: "de la 150 lei",
  },
  {
    slug: "case",
    icon: Home,
    title: "Curățenie case",
    short: "Case și vile, pe nivele sau integral, cu echipă dedicată.",
    description:
      "Echipa noastră tratează cu atenție fiecare suprafață a casei tale, de la dormitoare la spații exterioare acoperite.",
    benefits: ["Echipă extinsă", "Echipamente profesionale", "Programare flexibilă"],
    estimatedTime: "4 – 8 ore",
    pricing: "ofertă personalizată",
  },
  {
    slug: "dupa-constructor",
    icon: Hammer,
    title: "Curățenie după constructor",
    short: "Îndepărtăm praful fin, resturile de vopsea, adeziv și moloz.",
    description:
      "Pregătim spațiul tău pentru mutare. Curățare în profunzime după renovări sau lucrări de construcții.",
    benefits: ["Praf fin & vopsea", "Decapare suprafețe", "Pregătire mutare"],
    estimatedTime: "1 – 2 zile",
    pricing: "6 – 8 lei/mp",
  },
  {
    slug: "generala",
    icon: Sparkles,
    title: "Curățenie generală",
    short: "Curățenie în profunzime, recomandată sezonier sau înainte de evenimente.",
    description:
      "Detartrare, decalcifiere, igienizare completă. Ideal pentru o reîmprospătare totală a spațiului.",
    benefits: ["Detartrare profundă", "Igienizare completă", "Polish suprafețe"],
    estimatedTime: "1 zi completă",
    pricing: "de la 200 lei",
  },
  {
    slug: "intretinere",
    icon: Sparkles,
    title: "Curățenie întreținere",
    short: "Servicii recurente săptămânale, bi-lunare sau lunare.",
    description:
      "Menținem spațiul tău impecabil printr-un program regulat. Tarife avantajoase pentru contracte.",
    benefits: ["Program recurent", "Tarife reduse", "Aceeași echipă"],
    estimatedTime: "2 – 4 ore",
    pricing: "de la 100 lei",
  },
  {
    slug: "birouri",
    icon: Briefcase,
    title: "Curățenie birouri",
    short: "Spații de lucru curate, productivitate maximă.",
    description:
      "Curățenie discretă, programată în afara orelor de program. Contracte personalizate pentru companii.",
    benefits: ["Discreție totală", "În afara programului", "Contracte flexibile"],
    estimatedTime: "personalizat",
    pricing: "4 – 5 lei/mp",
  },
  {
    slug: "hale",
    icon: Warehouse,
    title: "Curățenie hale",
    short: "Hale industriale și de producție, suprafețe mari, echipamente profesionale.",
    description:
      "Curățare profesională a halelor de producție, depozite logistice și spații industriale.",
    benefits: ["Echipamente industriale", "Suprafețe mari", "SSM respectat"],
    estimatedTime: "1 – 3 zile",
    pricing: "4 – 6 lei/mp",
  },
  {
    slug: "depozite",
    icon: Warehouse,
    title: "Curățenie depozite",
    short: "Depozite logistice curate și conforme standardelor.",
    description:
      "Aspirare industrială, spălare pardoseli, curățare rafturi și suprafețe de încărcare.",
    benefits: ["Aspirare industrială", "Spălare pardoseli", "Curățare rafturi"],
    estimatedTime: "1 – 2 zile",
    pricing: "4 – 5 lei/mp",
  },
  {
    slug: "spatii-comerciale",
    icon: Store,
    title: "Curățenie spații comerciale",
    short: "Magazine, showroom-uri, restaurante — curățenie premium.",
    description:
      "Spațiul tău comercial este vitrina afacerii. Asigurăm o curățenie impecabilă, zilnic sau săptămânal.",
    benefits: ["Vitrine impecabile", "Pardoseli polish", "Igienizare zilnică"],
    estimatedTime: "personalizat",
    pricing: "4 – 6 lei/mp",
  },
];

export const businessSegments = [
  { icon: Briefcase, label: "Birouri" },
  { icon: Warehouse, label: "Hale & Depozite" },
  { icon: Store, label: "Spații comerciale" },
  { icon: Building2, label: "Asociații" },
  { icon: Hotel, label: "Airbnb / Regim hotelier" },
];

export const pricingTable = [
  {
    category: "Garsonieră",
    rows: [
      { label: "Curățenie întreținere", price: "100 lei" },
      { label: "Curățenie generală", price: "150 – 200 lei" },
    ],
  },
  {
    category: "Apartament 2 camere",
    rows: [
      { label: "Curățenie întreținere", price: "150 lei" },
      { label: "Curățenie generală", price: "200 – 250 lei" },
    ],
  },
  {
    category: "Apartament 3 – 4 camere",
    rows: [
      { label: "Curățenie întreținere", price: "250 lei" },
      { label: "Curățenie generală", price: "300 – 350 lei" },
    ],
  },
  {
    category: "Hale / Depozite / Birouri / Spații comerciale",
    rows: [
      { label: "Întreținere", price: "4 – 5 lei/mp" },
      { label: "Generală", price: "6 – 8 lei/mp" },
    ],
  },
];

export const testimonials = [
  {
    name: "Andreea M.",
    role: "Proprietar Airbnb, Mamaia",
    text: "Echipa Speed Aqua Sea îmi întreține 3 apartamente în regim hotelier. Punctualitate impecabilă și rezultate de fiecare dată peste așteptări.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Cristian P.",
    role: "Manager Operațional, Constanța",
    text: "Avem contract de curățenie pentru birouri de aproape un an. Foarte serioși, flexibili și mereu disponibili pentru intervenții urgente.",
    rating: 5,
    initial: "C",
  },
  {
    name: "Mihaela D.",
    role: "Persoană fizică",
    text: "Au făcut curățenie generală după renovare. Au scos absolut tot praful fin de construcție. Recomand cu mare drag!",
    rating: 5,
    initial: "M",
  },
  {
    name: "Robert S.",
    role: "Administrator depozit",
    text: "Lucrăm cu ei pentru curățenia halei noastre de 1200 mp. Echipă profesionistă, echipamente serioase. Preț corect.",
    rating: 5,
    initial: "R",
  },
];

export const benefits = [
  {
    title: "Echipamente profesionale",
    description: "Mașini și unelte industriale pentru orice tip de suprafață.",
  },
  {
    title: "Produse incluse",
    description: "Detergenți profesionali, eficienți și siguri, incluși în preț.",
  },
  {
    title: "Rapiditate & seriozitate",
    description: "Programare rapidă, intervenții punctuale, rezultate garantate.",
  },
  {
    title: "Personal de încredere",
    description: "Echipă atentă, discretă, verificată și instruită constant.",
  },
  {
    title: "Contracte pentru firme",
    description: "Colaborări lunare, trimestriale sau anuale, cu tarife negociabile.",
  },
  {
    title: "Programări rapide",
    description: "Răspuns în maxim 1 oră la solicitări telefonice sau WhatsApp.",
  },
];
