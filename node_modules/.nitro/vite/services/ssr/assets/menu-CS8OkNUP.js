const CATEGORIES = [
  { id: "pizzas", label: "Pizzas" },
  { id: "grillades", label: "Grillades" },
  { id: "burgers", label: "Burgers" },
  { id: "accompagnements", label: "Accompagnements" },
  { id: "boissons", label: "Boissons" },
  { id: "desserts", label: "Desserts" }
];
const MENU = [
  // PIZZAS
  { id: "p-margherita", name: "Margherita Artisanale", description: "Tomate, mozzarella, basilic frais", price: 4500, category: "pizzas", badge: "Bestseller", image: "/images/item-pizzas.jpg" },
  { id: "p-villa", name: "Villa Blanca Spéciale", description: "Poulet grillé, poivrons, champignons, mozzarella", price: 6500, category: "pizzas", badge: "Chef's Choice", image: "/images/item-p-villa.jpg" },
  { id: "p-africaine", name: "Africaine", description: "Viande de boeuf épicée, oignons caramélisés, sauce pimentée", price: 6e3, category: "pizzas", image: "/images/item-p-africaine.jpg" },
  { id: "p-4f", name: "4 Fromages", description: "Mozzarella, cheddar, parmesan, fromage de chèvre", price: 6500, category: "pizzas", image: "/images/item-p-4f.jpg" },
  { id: "p-veg", name: "Végétarienne", description: "Légumes frais de saison, huile d'olive, herbes", price: 5e3, category: "pizzas", image: "/images/item-p-veg.jpg" },
  { id: "p-diavola", name: "Diavola", description: "Chorizo, piments, tomate, mozzarella", price: 6e3, category: "pizzas", badge: "Nouveau", image: "/images/item-p-diavola.jpg" },
  { id: "p-calzone", name: "Calzone Maison", description: "Farcie poulet, jambon, mozzarella", price: 7e3, category: "pizzas", image: "/images/item-p-calzone.jpg" },
  // GRILLADES
  { id: "g-cote", name: "Côte de Boeuf (400g)", description: "Grillade au charbon de bois, sauce maison", price: 12e3, category: "grillades", badge: "Chef's Choice", image: "/images/item-g-cote.jpg" },
  { id: "g-poulet", name: "Poulet Grillé Entier", description: "Marinade maison, frites ou riz", price: 7500, category: "grillades", image: "/images/item-g-poulet.jpg" },
  { id: "g-brochettes", name: "Brochettes de Boeuf (6 pièces)", description: "Légumes grillés, sauce yaourt", price: 5500, category: "grillades", image: "/images/item-g-brochettes.jpg" },
  { id: "g-poisson", name: "Poisson Braisé", description: "Tilapia ou capitaine, légumes, attiéké ou riz", price: 6e3, category: "grillades", badge: "Bestseller", image: "/images/item-g-poisson.jpg" },
  { id: "g-mixte", name: "Plateau Mixte Grillades (2 pers.)", description: "Boeuf, poulet, brochettes, sauces", price: 15e3, category: "grillades", badge: "Bestseller", image: "/images/item-g-mixte.jpg" },
  { id: "g-agneau", name: "Côtelettes d'Agneau", description: "Herbes, citron, gratin dauphinois", price: 13e3, category: "grillades", image: "/images/item-g-agneau.jpg" },
  // BURGERS
  { id: "b-villa", name: "Burger Villa Blanca", description: "Double boeuf, cheddar, salade, tomate, sauce secrète", price: 5500, category: "burgers", badge: "Bestseller", image: "/images/item-b-villa.jpg" },
  { id: "b-poulet", name: "Burger Poulet Crispy", description: "Poulet pané, coleslaw, pickles", price: 5e3, category: "burgers", image: "/images/item-b-poulet.jpg" },
  { id: "b-veg", name: "Burger Végétalien", description: "Galette quinoa-légumes, avocat, tomates séchées", price: 4500, category: "burgers", image: "/images/item-b-veg.jpg" },
  { id: "b-smash", name: "Smash Burger", description: "Double smash boeuf, oignons caramélisés, cheddar fondu", price: 6e3, category: "burgers", badge: "Nouveau", image: "/images/item-b-smash.jpg" },
  // ACCOMPAGNEMENTS
  { id: "a-frites", name: "Frites Maison", description: "Pommes de terre fraîches", price: 1500, category: "accompagnements", image: "/images/item-a-frites.jpg" },
  { id: "a-salade", name: "Salade Verte", description: "Mesclun, vinaigrette maison", price: 1500, category: "accompagnements", image: "/images/item-a-salade.jpg" },
  { id: "a-riz", name: "Riz Pilaf", description: "Riz basmati aux épices douces", price: 1500, category: "accompagnements", image: "/images/item-a-riz.jpg" },
  { id: "a-attieke", name: "Attiéké", description: "Semoule de manioc traditionnelle", price: 1e3, category: "accompagnements", image: "/images/item-a-attieke.jpg" },
  { id: "a-gratin", name: "Gratin Dauphinois", description: "Crème, ail, fromage gratiné", price: 2e3, category: "accompagnements", image: "/images/item-a-gratin.jpg" },
  // BOISSONS
  { id: "d-jus", name: "Jus de Fruits Frais", description: "Mangue, bissap ou ananas", price: 1500, category: "boissons", image: "/images/item-d-jus.jpg" },
  { id: "d-eau", name: "Eau Minérale", description: "50cl", price: 500, category: "boissons", image: "/images/item-d-eau.jpg" },
  { id: "d-soda", name: "Sodas", description: "Coca, Fanta, Sprite", price: 500, category: "boissons", image: "/images/item-d-soda.jpg" },
  { id: "d-biere", name: "Bières", description: "Locales et importées", price: 2e3, category: "boissons", image: "/images/item-d-biere.jpg" },
  { id: "d-vin", name: "Vin (verre)", description: "Rouge, blanc, rosé", price: 3e3, category: "boissons", image: "/images/item-d-vin.jpg" },
  // DESSERTS
  { id: "ds-tiramisu", name: "Tiramisu Maison", description: "Recette traditionnelle italienne", price: 2500, category: "desserts", badge: "Chef's Choice", image: "/images/item-ds-tiramisu.jpg" },
  { id: "ds-fondant", name: "Fondant au Chocolat", description: "Coeur coulant chocolat noir", price: 2500, category: "desserts", image: "/images/item-ds-fondant.jpg" },
  { id: "ds-glace", name: "Glace Artisanale (2 boules)", description: "Vanille, chocolat, fraise", price: 2e3, category: "desserts", image: "/images/item-ds-glace.jpg" }
];
const FEATURED_IDS = ["p-margherita", "g-cote", "b-villa", "g-mixte"];
export {
  CATEGORIES as C,
  FEATURED_IDS as F,
  MENU as M
};
