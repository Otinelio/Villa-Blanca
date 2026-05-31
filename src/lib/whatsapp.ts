import { SITE } from "./config";

export interface CartLine {
  name: string;
  qty: number;
  price: number;
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function fcfa(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
}

export function buildOrderMessage(opts: {
  lines: CartLine[];
  total: number;
  mode: "Livraison" | "Sur place";
  name: string;
}) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Nouvelle commande :",
    ...opts.lines.map((l) => `${l.name} x${l.qty} — ${fcfa(l.price * l.qty)}`),
    "",
    `Total : ${fcfa(opts.total)}`,
    `Type : ${opts.mode}`,
    `Nom : ${opts.name || "—"}`,
  ].join("\n");
}

export function buildTableReservation(d: {
  date: string;
  heure: string;
  couverts: number;
  nom: string;
  tel: string;
  notes?: string;
}) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Réservation de table :",
    `Date : ${d.date}`,
    `Heure : ${d.heure}`,
    `Couverts : ${d.couverts}`,
    `Nom : ${d.nom}`,
    `Téléphone : ${d.tel}`,
    d.notes ? `Notes : ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildRoomReservation(d: {
  nom: string;
  email: string;
  tel: string;
  type: string;
  arrivee: string;
  depart: string;
  personnes: number;
  notes?: string;
}) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Réservation de chambre :",
    `Type : ${d.type}`,
    `Arrivée : ${d.arrivee}`,
    `Départ : ${d.depart}`,
    `Personnes : ${d.personnes}`,
    `Nom : ${d.nom}`,
    `Email : ${d.email}`,
    `Téléphone : ${d.tel}`,
    d.notes ? `Notes : ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildPackInquiry(d: {
  pack: string;
  date?: string;
  personnes?: number;
  budget?: string;
  notes?: string;
}) {
  return [
    "Bonjour Villa Blanca,",
    "",
    `Demande : ${d.pack}`,
    d.date ? `Date souhaitée : ${d.date}` : "",
    d.personnes ? `Nombre de personnes : ${d.personnes}` : "",
    d.budget ? `Budget estimé : ${d.budget}` : "",
    d.notes ? `Demandes particulières : ${d.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildContactMessage(d: {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}) {
  return [
    "Bonjour Villa Blanca,",
    "",
    `Sujet : ${d.sujet}`,
    `Nom : ${d.nom}`,
    `Email : ${d.email}`,
    "",
    d.message,
  ].join("\n");
}
