// public/data/orderProducts.js

const U_el = { PIECE: "ΤΕΜΑΧΙΟ", SET: "ΣΕΤ" };
const U_en = { PIECE: "PIECE", SET: "SET" };

/* ---------------- EL (Greek) ---------------- */
export const products_el = [
  { id: "ii-med-stand", desc: "miha bodytec II medical με βάση", unit: U_el.PIECE, image: "/images/product/medical_2.jpg" },
  { id: "move-no-stand", desc: "miha bodytec m.ove (χωρίς βάση)", unit: U_el.PIECE, image: "/images/product/medical_1.webp" },
  { id: "ibody-connect-bt", desc: "Σετ i-body® connect wireless (Bluetooth)", unit: U_el.SET, image: "/images/equipment/connect_4.jpg" },
  { id: "move", desc: "miha bodytec m.ove", unit: U_el.PIECE, image: "/images/product/workstation_1.jpg" },
  { id: "travel-station", desc: "Travelstation m.ove", unit: U_el.PIECE, image: "/images/product/travelstation_4.jpg" },
  { id: "workstation", desc: "Workstation m.ove", unit: U_el.PIECE, image: "/images/product/workstation_4.png" },

  { id: "vest-1", desc: "i-body® γιλέκο 1", unit: U_el.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-2", desc: "i-body® γιλέκο 2", unit: U_el.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-3", desc: "i-body® γιλέκο 3", unit: U_el.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-v1", desc: "i-body® γιλέκο V1", unit: U_el.PIECE, image: "/images/equipment/vest_5.png" },
  { id: "vest-v2", desc: "i-body® γιλέκο V2", unit: U_el.PIECE, image: "/images/equipment/vest_5.png" },

  { id: "strap-flex-1", desc: "i-body® strap flex μέγεθος 1 (νέο)", unit: U_el.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-2", desc: "i-body® strap flex μέγεθος 2 (νέο)", unit: U_el.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-3", desc: "i-body® strap flex μέγεθος 3 (νέο)", unit: U_el.PIECE, image: "/images/equipment/strap_2.jpg" },

  { id: "belt-flex-1", desc: "i-body® belt flex μέγεθος 1", unit: U_el.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-2", desc: "i-body® belt flex μέγεθος 2", unit: U_el.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-3", desc: "i-body® belt flex μέγεθος 3", unit: U_el.PIECE, image: "/images/equipment/belt_2.png" },

  { id: "connect-cable", desc: "i-body® connect καλώδιο", unit: U_el.PIECE, image: "/images/equipment/cable_5.png" },
  { id: "ext-v2-20cm", desc: "Επέκταση για i-body® V2 (20 cm)", unit: U_el.PIECE, image: "/images/equipment/extension.png" },

  { id: "cable-set-6", desc: "Σετ καλωδίων i-body® (6 τεμάχια)", unit: U_el.SET, image: "/images/equipment/cable_6.png" },
  { id: "cable-set-s1", desc: "Σετ καλωδίων i-body® μέγεθος 1 (2 τεμ.)", unit: U_el.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s2", desc: "Σετ καλωδίων i-body® μέγεθος 2 (2 τεμ.)", unit: U_el.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s3", desc: "Σετ καλωδίων i-body® μέγεθος 3 (2 τεμ.)", unit: U_el.SET, image: "/images/equipment/cable_7.png" },

  { id: "pump", desc: "miha bodytec PUMP Atomiser", unit: U_el.PIECE, image: "/images/equipment/pump.png" },

  { id: "underwear-xs", desc: "Σετ functional underwear XS", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-s", desc: "Σετ functional underwear S", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-m", desc: "Σετ functional underwear M", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-l", desc: "Σετ functional underwear L", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xl", desc: "Σετ functional underwear XL", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xxl", desc: "Σετ functional underwear XXL", unit: U_el.SET, image: "/images/equipment/underwear_14.png" },

  { id: "card-ii", desc: "Κάρτα transponder για miha bodytec II", unit: U_el.PIECE, image: "/images/equipment/cards_3.png" },
  { id: "warranty-2y", desc: "Επέκταση εγγύησης 2 ετών για νέο μηχάνημα", unit: U_el.PIECE, image: "/logo/4.png" },

  { id: "lining-vest", desc: "i-body® lining vest (εσωτερικό τμήμα)", unit: U_el.PIECE, image: "/logo/4.png" },
  { id: "vest-shell", desc: "i-body® vest shell (εξωτερικό τμήμα)", unit: U_el.PIECE, image: "/logo/4.png" },

  { id: "power-cable", desc: "Καλώδιο τροφοδοσίας συσκευής", unit: U_el.PIECE, image: "/logo/4.png" },
  { id: "pump-spare", desc: "miha bodytec PUMP Atomiser — ανταλλακτικό", unit: U_el.PIECE, image: "/logo/4.png" },
];

/* ---------------- EN (English) ---------------- */
export const products_en = [
  { id: "ii-med-stand", desc: "miha bodytec II medical with stand", unit: U_en.PIECE, image: "/images/product/medical_2.jpg" },
  { id: "move-no-stand", desc: "miha bodytec m.ove (without stand)", unit: U_en.PIECE, image: "/images/product/medical_1.webp" },
  { id: "ibody-connect-bt", desc: "i-body® connect wireless set (Bluetooth)", unit: U_en.SET, image: "/images/equipment/connect_4.jpg" },
  { id: "move", desc: "miha bodytec m.ove", unit: U_en.PIECE, image: "/images/product/workstation_1.jpg" },
  { id: "travel-station", desc: "Travelstation m.ove", unit: U_en.PIECE, image: "/images/product/travelstation_4.jpg" },
  { id: "workstation", desc: "Workstation m.ove", unit: U_en.PIECE, image: "/images/product/workstation_4.png" },

  { id: "vest-1", desc: "i-body® electrode vest 1", unit: U_en.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-2", desc: "i-body® electrode vest 2", unit: U_en.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-3", desc: "i-body® electrode vest 3", unit: U_en.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-v1", desc: "i-body® electrode vest V1", unit: U_en.PIECE, image: "/images/equipment/vest_5.png" },
  { id: "vest-v2", desc: "i-body® electrode vest V2", unit: U_en.PIECE, image: "/images/equipment/vest_5.png" },

  { id: "strap-flex-1", desc: "i-body® strap flex size 1 (new)", unit: U_en.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-2", desc: "i-body® strap flex size 2 (new)", unit: U_en.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-3", desc: "i-body® strap flex size 3 (new)", unit: U_en.PIECE, image: "/images/equipment/strap_2.jpg" },

  { id: "belt-flex-1", desc: "i-body® belt flex size 1", unit: U_en.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-2", desc: "i-body® belt flex size 2", unit: U_en.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-3", desc: "i-body® belt flex size 3", unit: U_en.PIECE, image: "/images/equipment/belt_2.png" },

  { id: "connect-cable", desc: "i-body® CONNECT cable", unit: U_en.PIECE, image: "/images/equipment/cable_5.png" },
  { id: "ext-v2-20cm", desc: "Extension for i-body® V2 (20 cm)", unit: U_en.PIECE, image: "/images/equipment/extension.png" },

  { id: "cable-set-6", desc: "i-body® cable set (6 pieces)", unit: U_en.SET, image: "/images/equipment/cable_6.png" },
  { id: "cable-set-s1", desc: "i-body® cable set size 1 (2 pieces)", unit: U_en.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s2", desc: "i-body® cable set size 2 (2 pieces)", unit: U_en.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s3", desc: "i-body® cable set size 3 (2 pieces)", unit: U_en.SET, image: "/images/equipment/cable_7.png" },

  { id: "pump", desc: "miha bodytec PUMP Atomiser", unit: U_en.PIECE, image: "/images/equipment/pump.png" },

  { id: "underwear-xs", desc: "Functional underwear set XS", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-s", desc: "Functional underwear set S", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-m", desc: "Functional underwear set M", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-l", desc: "Functional underwear set L", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xl", desc: "Functional underwear set XL", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xxl", desc: "Functional underwear set XXL", unit: U_en.SET, image: "/images/equipment/underwear_14.png" },

  { id: "card-ii", desc: "Transponder card for miha bodytec II", unit: U_en.PIECE, image: "/images/equipment/cards_3.png" },
  { id: "warranty-2y", desc: "2-year warranty extension for new device", unit: U_en.PIECE, image: "/logo/4.png" },

  { id: "lining-vest", desc: "i-body® lining vest (inside part)", unit: U_en.PIECE, image: "/logo/4.png" },
  { id: "vest-shell", desc: "i-body® vest shell (outside part)", unit: U_en.PIECE, image: "/logo/4.png" },

  { id: "power-cable", desc: "Power supply cable (device)", unit: U_en.PIECE, image: "/logo/4.png" },
  { id: "pump-spare", desc: "miha bodytec PUMP Atomiser — spare", unit: U_en.PIECE, image: "/logo/4.png" },
];
