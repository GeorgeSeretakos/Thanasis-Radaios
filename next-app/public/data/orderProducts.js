// src/data/orderProducts.js
const U = {
  PIECE: "ΤΕΜΑΧΙΟ",
  SET: "ΣΕΤ",
};

const products = [
  { id: "ii-med-stand", desc: "miha bodytec II medical with stand", unit: U.PIECE, image: "/images/product/medical_2.jpg" },
  { id: "move-no-stand", desc: "miha bodytec m.ove (without stand)", unit: U.PIECE, image: "/images/product/medical_1.webp" },
  { id: "ibody-connect-bt", desc: "set IBODY connect wireless (BLUETOOTH)", unit: U.SET, image: "/images/products/ibody-connect-bt.webp" },
  { id: "move", desc: "miha bodytec m.ove", unit: U.PIECE, image: "/images/product/workstation_1.jpg" },
  { id: "travel-station", desc: "travel station m.ove", unit: U.PIECE, image: "/images/product/travelstation_4.jpg" },
  { id: "workstation", desc: "workstation", unit: U.PIECE, image: "/images/product/workstation_4.png" },

  { id: "vest-1", desc: "electrode vest I BODY 1", unit: U.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-2", desc: "electrode vest I BODY 2", unit: U.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-3", desc: "electrode vest I BODY 3", unit: U.PIECE, image: "/images/equipment/vest_1.png" },
  { id: "vest-v1", desc: "electrode vest I BODY V1", unit: U.PIECE, image: "/images/equipment/vest_5.png" },
  { id: "vest-v2", desc: "electrode vest I BODY V2", unit: U.PIECE, image: "/images/equipment/vest_5.png" },

  { id: "strap-flex-1", desc: "new I BODY STRAP flex size 1", unit: U.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-2", desc: "new I BODY STRAP flex size 2", unit: U.PIECE, image: "/images/equipment/strap_2.jpg" },
  { id: "strap-flex-3", desc: "new I BODY STRAP flex size 3", unit: U.PIECE, image: "/images/equipment/strap_2.jpg" },

  { id: "belt-flex-1", desc: "I BODY BELT flex SIZE 1", unit: U.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-2", desc: "I BODY BELT flex SIZE 2", unit: U.PIECE, image: "/images/equipment/belt_2.png" },
  { id: "belt-flex-3", desc: "I BODY BELT flex SIZE 3", unit: U.PIECE, image: "/images/equipment/belt_2.png" },

  { id: "connect-cable", desc: "I BODY CONNECT cable", unit: U.PIECE, image: "/images/equipment/cable_5.png" },
  { id: "ext-v2-20cm", desc: "extension for I BODY V2 (20cm)", unit: U.PIECE, image: "/images/equipment/extension.png" },

  { id: "cable-set-6", desc: "IBODY CABLE SET (6 pieces)", unit: U.SET, image: "/images/equipment/cable_6.png" },
  { id: "cable-set-s1", desc: "IBODY CABLE SET SIZE 1 (2 pieces)", unit: U.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s2", desc: "IBODY CABLE SET SIZE 2 (2 pieces)", unit: U.SET, image: "/images/equipment/cable_7.png" },
  { id: "cable-set-s3", desc: "IBODY CABLE SET SIZE 3 (2 pieces)", unit: U.SET, image: "/images/equipment/cable_7.png" },

  { id: "pump", desc: "miha bodytecPUMP ATOMISER", unit: U.PIECE, image: "/images/equipment/pump.png" },

  { id: "underwear-xs", desc: "SET UNDERWEAR XS", unit: U.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-s", desc: "SET UNDERWEAR S", unit: U.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-m", desc: "SET UNDERWEAR M", unit: U.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-l", desc: "SET UNDERWEAR L", unit: U.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xl", desc: "SET UNDERWEAR XL", unit: U.SET, image: "/images/equipment/underwear_14.png" },
  { id: "underwear-xxl", desc: "SET UNDERWEAR ΧXL", unit: U.SET, image: "/images/equipment/underwear_14.png" },

  { id: "card-ii", desc: "TRANSPONDER CARD for miha bodytec II", unit: U.PIECE, image: "/images/equipment/cards_3.png" },
  { id: "warranty-2y", desc: "EXTENSION WARRANTY 2 YEARS FOR NEW DEVICE", unit: U.PIECE, image: "/logo/4.png" },

  { id: "lining-vest", desc: "I BODY LINING VEST (inside part)", unit: U.PIECE, image: "/logo/4.png" },
  { id: "vest-shell", desc: "I BODY VEST SHELL (outside part)", unit: U.PIECE, image: "/logo/4.png" },

  { id: "power-cable", desc: "POWER SUPPLY CABLE (ΚΑΛΩΔΙΟ ΡΕΥΜΑΤΟΣ ΣΥΣΚΕΥΗΣ)", unit: U.PIECE, image: "/logo/4.png" },
  { id: "pump-spare", desc: "miha bodytecPUMP ATOMISER ΑΝΤΑΛΛΑΚΤΙΚΟ", unit: U.PIECE, image: "/logo/4.png" },
];

export default products;
