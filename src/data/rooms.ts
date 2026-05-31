export interface Room {
  id: string;
  name: string;
  price: number;
  amenities: string[];
  image: string;
}

export const ROOMS: Room[] = [
  {
    id: "standard",
    name: "Chambre Standard",
    price: 25000,
    amenities: ["Climatisation", "WiFi gratuit", "TV", "Salle de bain privée"],
    image: "/images/item-standard.jpg",
  },
  {
    id: "superieure",
    name: "Chambre Supérieure",
    price: 35000,
    amenities: ["Climatisation", "WiFi gratuit", "TV", "Mini-bar", "Vue jardin"],
    image: "/images/item-superieure.jpg",
  },
  {
    id: "suite",
    name: "Suite Junior",
    price: 55000,
    amenities: ["Salon séparé", "Climatisation", "WiFi gratuit", "TV", "Mini-bar", "Vue panoramique"],
    image: "/images/item-suite.jpg",
  },
];
