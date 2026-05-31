const ROOMS = [
  {
    id: "standard",
    name: "Chambre Standard",
    price: 25e3,
    amenities: ["Climatisation", "WiFi gratuit", "TV", "Salle de bain privée"],
    image: "/images/item-standard.jpg"
  },
  {
    id: "superieure",
    name: "Chambre Supérieure",
    price: 35e3,
    amenities: ["Climatisation", "WiFi gratuit", "TV", "Mini-bar", "Vue jardin"],
    image: "/images/item-superieure.jpg"
  },
  {
    id: "suite",
    name: "Suite Junior",
    price: 55e3,
    amenities: ["Salon séparé", "Climatisation", "WiFi gratuit", "TV", "Mini-bar", "Vue panoramique"],
    image: "/images/item-suite.jpg"
  }
];
export {
  ROOMS as R
};
