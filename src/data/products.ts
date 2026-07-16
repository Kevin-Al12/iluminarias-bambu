export type ProductCategory = "colgantes" | "rieles" | "apliques";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bulbCount: number;
  category: ProductCategory;
  /** Precio estimado de referencia en pesos dominicanos (RD$). Ajusta estos valores a tus precios reales antes de publicar. */
  price: number;
  /** Entornos donde luce mejor esta lámpara (terraza, villa, comedor, etc.), mostrados como etiquetas en la ficha. */
  environments: string[];
  images: { src: string; alt: string }[];
};

export const categoryLabels: Record<ProductCategory, string> = {
  colgantes: "Lámparas colgantes",
  rieles: "Rieles de luces",
  apliques: "Apliques de pared",
};

export const products: Product[] = [
  {
    slug: "trio-aro-rustico",
    name: "Trío Aro Rústico",
    tagline: "3 luces · colgante",
    description:
      "Lámpara colgante con tres pantallas cilíndricas de bambú natural y cuerda de yute trenzada. Ideal para pérgolas, terrazas y porches techados.",
    bulbCount: 3,
    category: "colgantes",
    price: 4500,
    environments: ["Terraza", "Pérgola", "Comedor"],
    images: [
      { src: "/images/products/trio-aro-rustico-1.jpeg", alt: "Lámpara colgante Trío Aro Rústico instalada en terraza con techo de policarbonato" },
      { src: "/images/products/trio-aro-rustico-2.jpeg", alt: "Trío Aro Rústico, vista de cerca de las tres pantallas de bambú encendidas" },
      { src: "/images/products/trio-aro-rustico-3.jpeg", alt: "Trío Aro Rústico instalado en techo de madera, vista general con columna" },
      { src: "/images/products/trio-aro-rustico-4.jpeg", alt: "Trío Aro Rústico, vista frontal con acabado oscuro y cuerda de yute" },
      { src: "/images/products/trio-aro-rustico-5.jpeg", alt: "Trío Aro Rústico instalado sobre mesa de comedor de bambú" },
    ],
  },
  {
    slug: "duo-jaula-bambu",
    name: "Dúo Jaula de Bambú",
    tagline: "2 luces · colgante",
    description:
      "Par de pantallas tipo jaula hechas con listones finos de bambú sobre base circular de madera, unidas con gruesa cuerda de cáñamo.",
    bulbCount: 2,
    category: "colgantes",
    price: 3200,
    environments: ["Terraza", "Balcón"],
    images: [
      { src: "/images/products/duo-jaula-bambu-1.jpeg", alt: "Dúo Jaula de Bambú instalado en techo, vista desde abajo" },
      { src: "/images/products/duo-jaula-bambu-2.jpeg", alt: "Dúo Jaula de Bambú, foto de producto con bombillos encendidos" },
      { src: "/images/products/duo-jaula-bambu-3.jpeg", alt: "Dúo Jaula de Bambú, foto de producto de las dos pantallas sobre mesa de trabajo" },
    ],
  },
  {
    slug: "cuarteto-barril-yute",
    name: "Cuarteto Barril Yute",
    tagline: "4 luces · colgante",
    description:
      "Set de cuatro pantallas cilíndricas de bambú envueltas en cuerda de yute, perfecto para iluminar mesas largas o islas de cocina.",
    bulbCount: 4,
    category: "colgantes",
    price: 5800,
    environments: ["Comedor", "Cocina", "Pérgola"],
    images: [
      { src: "/images/products/cuarteto-barril-yute-1.jpeg", alt: "Cuarteto Barril Yute, foto de producto con cuatro bombillos" },
      { src: "/images/products/cuarteto-barril-yute-2.jpeg", alt: "Cuarteto Barril Yute instalado bajo viga de pérgola, vista desde abajo" },
      { src: "/images/products/cuarteto-barril-yute-3.jpeg", alt: "Cuarteto Barril Yute instalado en techo con roseta decorativa, sala de estar" },
    ],
  },
  {
    slug: "farol-persiana",
    name: "Farol Persiana",
    tagline: "1 luz · colgante",
    description:
      "Farol colgante de listones verticales de bambú tipo persiana, con acabado en caoba. Emite una luz cálida y tenue, ideal como acento decorativo.",
    bulbCount: 1,
    category: "colgantes",
    price: 2600,
    environments: ["Restaurante", "Bar", "Interior"],
    images: [
      { src: "/images/products/farol-persiana-1.jpeg", alt: "Farol Persiana de bambú instalado en techo exterior" },
      { src: "/images/products/farol-persiana-2.jpeg", alt: "Farol Persiana instalado en salón tipo bar con paredes oscuras" },
    ],
  },
  {
    slug: "aplique-pared-bambu",
    name: "Aplique Brazo Bambú",
    tagline: "1 luz · aplique de pared",
    description:
      "Aplique de pared con brazo de bambú y borla de yute tejida a mano. Perfecto para pasillos, entradas y balcones.",
    bulbCount: 1,
    category: "apliques",
    price: 1900,
    environments: ["Balcón", "Entrada", "Pasillo"],
    images: [
      { src: "/images/products/aplique-pared-1.jpeg", alt: "Aplique de pared de bambú con borla de yute" },
    ],
  },
  {
    slug: "riel-comedor-5luces",
    name: "Riel Comedor 5 Luces",
    tagline: "5 luces · riel",
    description:
      "Riel lineal de bambú con cinco luces colgantes de cuerda ajustable. Diseñado para lucir sobre mesas de comedor largas.",
    bulbCount: 5,
    category: "rieles",
    price: 7900,
    environments: ["Comedor"],
    images: [
      { src: "/images/products/riel-comedor-5luces-1.jpeg", alt: "Riel Comedor 5 Luces instalado sobre mesa de comedor de bambú" },
    ],
  },
  {
    slug: "riel-direccional-5luces",
    name: "Riel Direccional Bambú",
    tagline: "5 luces · riel orientable",
    description:
      "Riel de bambú con cabezales orientables, cada uno en tramos de caña maciza. Ideal para cocinas, spas, salones y negocios.",
    bulbCount: 5,
    category: "rieles",
    price: 7400,
    environments: ["Cocina", "Salón", "Spa"],
    images: [
      { src: "/images/products/riel-direccional-1.jpeg", alt: "Riel Direccional Bambú instalado en salón decorado con plantas" },
      { src: "/images/products/riel-direccional-2.jpeg", alt: "Riel Direccional Bambú, foto de producto de día" },
      { src: "/images/products/riel-direccional-3.jpeg", alt: "Riel Direccional Bambú instalado sobre isla de cocina moderna" },
      { src: "/images/products/riel-direccional-4.jpeg", alt: "Riel Direccional Bambú instalado en techo de madera rústico" },
    ],
  },
  {
    slug: "riel-gazebo-9luces",
    name: "Riel Gazebo 9 Luces",
    tagline: "9 luces · riel statement",
    description:
      "Nuestra pieza más imponente: riel de bambú macizo con nueve bombillos colgantes de cuerda de yute. Diseñada para gazebos, ranchos y grandes espacios techados.",
    bulbCount: 9,
    category: "rieles",
    price: 12500,
    environments: ["Gazebo", "Rancho", "Villa"],
    images: [
      { src: "/images/products/riel-gazebo-9luces-1.jpeg", alt: "Riel Gazebo 9 Luces instalado en gazebo de madera, vista general" },
      { src: "/images/products/riel-gazebo-9luces-2.jpeg", alt: "Riel Gazebo 9 Luces instalado en gazebo, vista nocturna encendida" },
      { src: "/images/products/riel-gazebo-9luces-3.jpeg", alt: "Riel Gazebo 9 Luces instalado en pérgola, bombillos colgantes de cuerda" },
    ],
  },
  {
    slug: "riel-techo-3luces",
    name: "Riel Techo 3 Luces",
    tagline: "3 luces · riel compacto",
    description:
      "Versión compacta de nuestro riel de bambú, con tres bombillos colgantes. Perfecta para porches, kioscos y espacios pequeños techados.",
    bulbCount: 3,
    category: "rieles",
    price: 4400,
    environments: ["Porche", "Kiosco"],
    images: [
      { src: "/images/products/riel-techo-3luces-1.jpeg", alt: "Riel Techo 3 Luces instalado en kiosco con techo de zinc, vista nocturna" },
    ],
  },
  {
    slug: "trio-conico",
    name: "Trío Cónico Elegante",
    tagline: "3 luces · colgante",
    description:
      "Tres pantallas cónicas de bambú con acabado pulido y base circular de madera. Un diseño minimalista que combina con interiores modernos.",
    bulbCount: 3,
    category: "colgantes",
    price: 5000,
    environments: ["Salón", "Interior"],
    images: [
      { src: "/images/products/trio-conico-1.jpeg", alt: "Trío Cónico Elegante instalado en techo blanco" },
    ],
  },
  {
    slug: "trio-yute-premium",
    name: "Trío Yute Premium",
    tagline: "3 luces · colgante premium",
    description:
      "Acabado premium con banda de arpillera natural tejida a mano sobre bambú tornado. Ideal para cabañas, restaurantes y espacios boutique.",
    bulbCount: 3,
    category: "colgantes",
    price: 5600,
    environments: ["Restaurante", "Cabaña", "Boutique"],
    images: [
      { src: "/images/products/trio-yute-premium-1.jpeg", alt: "Trío Yute Premium, foto de estudio sobre pared de madera oscura" },
    ],
  },
  {
    slug: "trio-bombillo-vintage",
    name: "Trío Bombillo Vintage",
    tagline: "3 luces · colgante",
    description:
      "Tres bombillos Edison expuestos, suspendidos con cuerda de cáñamo desde un cabezal de madera maciza. Un diseño minimalista que resalta la calidez del filamento, sin pantallas.",
    bulbCount: 3,
    category: "colgantes",
    price: 4200,
    environments: ["Terraza", "Pérgola"],
    images: [
      { src: "/images/products/trio-bombillo-vintage-1.jpeg", alt: "Trío Bombillo Vintage instalado en pérgola de madera, tres bombillos Edison expuestos" },
    ],
  },
  {
    slug: "farol-jaula-bambu",
    name: "Farol Jaula de Bambú",
    tagline: "1 luz · colgante",
    description:
      "Farol colgante individual con pantalla tipo jaula de listones de bambú y cuerda de yute. La versión compacta de nuestro Dúo Jaula, ideal para rincones, pasillos y mesas auxiliares.",
    bulbCount: 1,
    category: "colgantes",
    price: 2100,
    environments: ["Interior", "Balcón", "Pasillo"],
    images: [
      { src: "/images/products/farol-jaula-bambu-1.jpeg", alt: "Farol Jaula de Bambú instalado en techo con roseta decorativa" },
      { src: "/images/products/farol-jaula-bambu-2.jpeg", alt: "Farol Jaula de Bambú instalado en techo con base negra, junto a ventana con rejas" },
    ],
  },
  {
    slug: "aplique-spot-bambu",
    name: "Aplique Spot Bambú",
    tagline: "1 luz · aplique de pared",
    description:
      "Aplique compacto de pared con cuerpo de bambú envuelto en cuerda de yute. Un foco discreto y cálido, perfecto para columnas, pérgolas y entradas.",
    bulbCount: 1,
    category: "apliques",
    price: 1500,
    environments: ["Gazebo", "Exterior", "Villa"],
    images: [
      { src: "/images/products/aplique-spot-bambu-1.jpg", alt: "Aplique Spot Bambú instalado en columna de gazebo" },
      { src: "/images/products/aplique-spot-bambu-2.jpg", alt: "Aplique Spot Bambú, vista de cerca encendido sobre columna de madera" },
      { src: "/images/products/aplique-spot-bambu-3.jpg", alt: "Aplique Spot Bambú, par instalado simétricamente en gazebo" },
    ],
  },
];
