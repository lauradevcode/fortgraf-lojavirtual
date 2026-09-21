import lona from "@/assets/prod-faixa.jpg";
import banner from "@/assets/prod-banner.jpg";
import adesivo from "@/assets/prod-adesivo.jpg";
import etiqueta from "@/assets/prod-etiqueta-vinil.jpg";
import cavalete from "@/assets/prod-cavalete.jpg";
import toldo from "@/assets/prod-toldo-cortina.jpg";

export type VariantOption = {
  id: string;
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: "Comunicação Visual";
  sales?: number;
  image: string;
  short: string;
  description: string;
  unitLabel: string;
  unitSuffix: string;
  minQty: number;
  step: number;
  variantLabel: string;
  variants: VariantOption[];
};

export const products: Product[] = [
  {
    id: "impressao-lona-440g",
    name: "Impressão de Lona 440g",
    category: "Comunicação Visual",
    image: lona,
    short: "Impressão resistente para fachadas, eventos e divulgação.",
    description: "Impressão digital em lona 440g para uso interno ou externo. Produção sob medida, com acabamento definido conforme a instalação e o projeto.",
    unitLabel: "m²",
    unitSuffix: "m²",
    minQty: 1,
    step: 1,
    variantLabel: "Acabamento",
    variants: [
      { id: "sem-acabamento", name: "Sem acabamento", price: 0 },
      { id: "ilhose", name: "Com ilhoses", price: 0 },
      { id: "bastao", name: "Com bastão e corda", price: 0 },
    ],
  },
  {
    id: "banner",
    name: "Banner",
    category: "Comunicação Visual",
    image: banner,
    short: "Banner personalizado para lojas, eventos e campanhas.",
    description: "Banner impresso em alta resolução, produzido nas medidas do seu projeto e com opções de acabamento para exposição.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 1,
    step: 1,
    variantLabel: "Formato",
    variants: [
      { id: "60x90", name: "60 × 90 cm", price: 0 },
      { id: "80x120", name: "80 × 120 cm", price: 0 },
      { id: "sob-medida", name: "Medida personalizada", price: 0 },
    ],
  },
  {
    id: "adesivo",
    name: "Adesivo",
    category: "Comunicação Visual",
    image: adesivo,
    short: "Impressão de adesivo para vitrines, placas e superfícies.",
    description: "Adesivo impresso em alta definição para identificação, decoração, vitrines e comunicação de lojas. Consulte materiais e recortes disponíveis.",
    unitLabel: "m²",
    unitSuffix: "m²",
    minQty: 1,
    step: 1,
    variantLabel: "Material",
    variants: [
      { id: "brilho", name: "Vinil brilho", price: 0 },
      { id: "fosco", name: "Vinil fosco", price: 0 },
      { id: "transparente", name: "Vinil transparente", price: 0 },
    ],
  },
  {
    id: "etiqueta-vinil",
    name: "Etiqueta em Vinil",
    category: "Comunicação Visual",
    image: etiqueta,
    short: "Etiquetas resistentes em formatos e medidas personalizadas.",
    description: "Etiquetas em vinil impressas e recortadas para produtos, embalagens e identificação. Formato, tamanho e quantidade feitos sob medida.",
    unitLabel: "pedido",
    unitSuffix: "pedido(s)",
    minQty: 1,
    step: 1,
    variantLabel: "Acabamento",
    variants: [
      { id: "brilho", name: "Vinil brilho", price: 0 },
      { id: "fosco", name: "Vinil fosco", price: 0 },
      { id: "recorte", name: "Vinil com recorte especial", price: 0 },
    ],
  },
  {
    id: "cavalete",
    name: "Cavalete",
    category: "Comunicação Visual",
    image: cavalete,
    short: "Sinalização móvel para calçadas, lojas e eventos.",
    description: "Cavalete personalizado para comunicação promocional e sinalização. Produção sob medida conforme ambiente, arte e necessidade de uso.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 1,
    step: 1,
    variantLabel: "Modelo",
    variants: [
      { id: "uma-face", name: "Uma face", price: 0 },
      { id: "duas-faces", name: "Duas faces", price: 0 },
      { id: "sob-medida", name: "Projeto sob medida", price: 0 },
    ],
  },
  {
    id: "toldo-cortina",
    name: "Toldo Cortina",
    category: "Comunicação Visual",
    image: toldo,
    short: "Proteção e comunicação visual para fachadas comerciais.",
    description: "Toldo cortina personalizado para lojas e áreas comerciais, com impressão e estrutura dimensionadas para cada instalação.",
    unitLabel: "projeto",
    unitSuffix: "projeto(s)",
    minQty: 1,
    step: 1,
    variantLabel: "Configuração",
    variants: [
      { id: "manual", name: "Acionamento manual", price: 0 },
      { id: "personalizado", name: "Projeto personalizado", price: 0 },
    ],
  },
];

export const categories = ["Todos", "Comunicação Visual"] as const;

export const categorySwatch: Record<string, string> = {
  Todos: "var(--ink-k)",
  "Comunicação Visual": "var(--ink-c)",
};

const salesRank = ["impressao-lona-440g", "banner", "adesivo", "etiqueta-vinil", "cavalete", "toldo-cortina"];

export function salesScore(p: Product) {
  const index = salesRank.indexOf(p.id);
  return index === -1 ? salesRank.length : index;
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function minPrice(p: Product) {
  return Math.min(...p.variants.map((variant) => variant.price));
}

export function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}