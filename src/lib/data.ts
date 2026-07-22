export type Condition =
  | "Comme neuf"
  | "Très bon état"
  | "Bon état"
  | "À réparer";

export interface Review {
  author: string;
  rating: number;
  text: string;
  meta: string;
}

export interface Seller {
  id: string;
  name: string;
  initials: string;
  rating: string;
  reviews: number;
  sales: number;
  responseTime: string;
  memberSince: string;
  reviewList: Review[];
}

export interface Listing {
  id: string;
  title: string;
  sub: string;
  price: number;
  area: string;
  brand: string;
  model: string;
  storage: string;
  cond: Condition;
  batt: string;
  imei: boolean;
  img: string;
  sellerId: string;
  publishedAgo: string;
}

function unsplash(id: string): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=640&q=70`;
}

export const SELLERS: Record<string, Seller> = {
  "jean-marc": {
    id: "jean-marc",
    name: "Jean-Marc A.",
    initials: "JM",
    rating: "4,8",
    reviews: 36,
    sales: 23,
    responseTime: "~1 h",
    memberSince: "mars 2025",
    reviewList: [
      {
        author: "Rachelle K.",
        rating: 5,
        text: "iPhone conforme aux photos, IMEI vérifié ensemble au moment de la remise. Sérieux.",
        meta: "Il y a 1 semaine · achat sécurisé",
      },
      {
        author: "Ismaël D.",
        rating: 5,
        text: "Transaction rapide à Godomey, batterie au niveau annoncé. Je recommande.",
        meta: "Il y a 3 semaines · achat sécurisé",
      },
      {
        author: "Bérénice H.",
        rating: 5,
        text: "Bon vendeur, juste un peu de retard au rendez-vous. Téléphone nickel.",
        meta: "Il y a 1 mois · achat sécurisé",
      },
    ],
  },
  "fifa-tel": {
    id: "fifa-tel",
    name: "Boutique Fifa Tel",
    initials: "FT",
    rating: "4,9",
    reviews: 112,
    sales: 214,
    responseTime: "~20 min",
    memberSince: "janvier 2024",
    reviewList: [
      {
        author: "Parfait G.",
        rating: 5,
        text: "Boutique fiable, plusieurs achats déjà. Toujours des appareils propres.",
        meta: "Il y a 4 jours · achat sécurisé",
      },
      {
        author: "Sandrine M.",
        rating: 5,
        text: "Facture fournie, IMEI vérifié. Rien à redire.",
        meta: "Il y a 2 semaines · achat sécurisé",
      },
    ],
  },
  "estelle": {
    id: "estelle",
    name: "Estelle Z.",
    initials: "EZ",
    rating: "4,6",
    reviews: 21,
    sales: 14,
    responseTime: "~2 h",
    memberSince: "juin 2025",
    reviewList: [
      {
        author: "Koffi A.",
        rating: 5,
        text: "Samsung comme décrit, échange sécurisé à Cadjèhoun. Merci.",
        meta: "Il y a 5 jours · achat sécurisé",
      },
      {
        author: "Laure T.",
        rating: 4,
        text: "Bon contact, batterie un peu en dessous mais rien de grave.",
        meta: "Il y a 3 semaines · achat sécurisé",
      },
    ],
  },
  "rodrigue": {
    id: "rodrigue",
    name: "Rodrigue T.",
    initials: "RT",
    rating: "4,4",
    reviews: 9,
    sales: 6,
    responseTime: "~3 h",
    memberSince: "septembre 2025",
    reviewList: [
      {
        author: "Yasmine B.",
        rating: 4,
        text: "Infinix en bon état, vendeur réactif sur le chat.",
        meta: "Il y a 1 semaine · achat sécurisé",
      },
    ],
  },
  "nadege": {
    id: "nadege",
    name: "Nadège S.",
    initials: "NS",
    rating: "4,7",
    reviews: 43,
    sales: 31,
    responseTime: "~1 h",
    memberSince: "février 2025",
    reviewList: [
      {
        author: "Serge K.",
        rating: 5,
        text: "Redmi impeccable, batterie à 98 %. Remise à Calavi sans souci.",
        meta: "Il y a 6 jours · achat sécurisé",
      },
    ],
  },
};

export const LISTINGS: Listing[] = [
  {
    id: "iphone-12",
    title: "iPhone 12",
    sub: "128 Go · Très bon état",
    price: 185000,
    area: "Fidjrossè",
    brand: "Apple",
    model: "iPhone 12",
    storage: "128 Go",
    cond: "Très bon état",
    batt: "87 %",
    imei: true,
    img: unsplash("photo-1592750475338-74b7b21085ab"),
    sellerId: "jean-marc",
    publishedAgo: "il y a 2 jours",
  },
  {
    id: "tecno-camon-20",
    title: "Tecno Camon 20",
    sub: "256 Go · Comme neuf",
    price: 95000,
    area: "Godomey",
    brand: "Tecno",
    model: "Camon 20",
    storage: "256 Go",
    cond: "Comme neuf",
    batt: "96 %",
    imei: true,
    img: unsplash("photo-1511707171634-5f897ff02aa9"),
    sellerId: "fifa-tel",
    publishedAgo: "il y a 1 jour",
  },
  {
    id: "galaxy-a54",
    title: "Samsung Galaxy A54",
    sub: "128 Go · Bon état",
    price: 140000,
    area: "Cadjèhoun",
    brand: "Samsung",
    model: "Galaxy A54",
    storage: "128 Go",
    cond: "Bon état",
    batt: "82 %",
    imei: true,
    img: unsplash("photo-1610945265064-0e34e5519bbf"),
    sellerId: "estelle",
    publishedAgo: "il y a 4 jours",
  },
  {
    id: "infinix-note-30",
    title: "Infinix Note 30",
    sub: "128 Go · Bon état",
    price: 78000,
    area: "Akpakpa",
    brand: "Infinix",
    model: "Note 30",
    storage: "128 Go",
    cond: "Bon état",
    batt: "90 %",
    imei: false,
    img: unsplash("photo-1580910051074-3eb694886505"),
    sellerId: "rodrigue",
    publishedAgo: "il y a 3 jours",
  },
  {
    id: "iphone-13-pro",
    title: "iPhone 13 Pro",
    sub: "256 Go · Très bon état",
    price: 320000,
    area: "Haie Vive",
    brand: "Apple",
    model: "iPhone 13 Pro",
    storage: "256 Go",
    cond: "Très bon état",
    batt: "89 %",
    imei: true,
    img: unsplash("photo-1632661674596-df8be070a5c5"),
    sellerId: "fifa-tel",
    publishedAgo: "il y a 5 jours",
  },
  {
    id: "redmi-note-12",
    title: "Redmi Note 12",
    sub: "128 Go · Comme neuf",
    price: 82000,
    area: "Calavi Kpota",
    brand: "Xiaomi",
    model: "Redmi Note 12",
    storage: "128 Go",
    cond: "Comme neuf",
    batt: "98 %",
    imei: true,
    img: unsplash("photo-1598327105666-5b89351aff97"),
    sellerId: "nadege",
    publishedAgo: "il y a 2 jours",
  },
];

export const FILTER_CHIPS = ["Tout", "Marque", "Prix", "État", "Quartier"];

export const CONDITIONS: Condition[] = [
  "Comme neuf",
  "Très bon état",
  "Bon état",
  "À réparer",
];

export interface ChatMessage {
  fromMe: boolean;
  text: string;
}

export const BASE_CHAT: ChatMessage[] = [
  { fromMe: false, text: "Bonjour ! Oui le téléphone est toujours disponible." },
  { fromMe: true, text: "Super. La batterie tient bien la journée ?" },
  {
    fromMe: false,
    text: "Oui, 87 % de capacité. Je peux te montrer le réglage batterie à la remise.",
  },
  { fromMe: true, text: "Parfait, je passe par le paiement sécurisé alors." },
];

export function getListing(id: string): Listing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export function getSeller(id: string): Seller | undefined {
  return SELLERS[id];
}

export function listingsBySeller(sellerId: string): Listing[] {
  return LISTINGS.filter((l) => l.sellerId === sellerId);
}
