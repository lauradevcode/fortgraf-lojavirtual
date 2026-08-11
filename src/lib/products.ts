import cartao from "@/assets/prod-cartao.jpg";
import banner from "@/assets/prod-banner.jpg";
import envelope from "@/assets/prod-envelope.jpg";
import convite from "@/assets/prod-convite.jpg";
import catalogo from "@/assets/prod-catalogo.jpg";
import adesivo from "@/assets/prod-adesivo.jpg";
import carimbo from "@/assets/prod-carimbo.jpg";

export type VariantOption = {
  id: string;
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: "Papelaria" | "Comunicação Visual" | "Editorial" | "Escritório";
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
    id: "cartao-de-visita",
    name: "Cartão de Visita",
    category: "Papelaria",
    image: cartao,
    short: "4x4 cores, corte reto, pacote de 1.000 unidades.",
    description:
      "Cartão de visita 9x5cm impresso em 4x4 cores com alta definição. Produção em até 2 dias úteis, corte reto de precisão e conferência de cor por prova digital. Preço por pacote fechado de 1.000 unidades.",
    unitLabel: "pacote de 1.000 un.",
    unitSuffix: "pacote(s)",
    minQty: 1,
    step: 1,
    variantLabel: "Papel e acabamento",
    variants: [
      { id: "couche-300", name: "Couché 300g — sem acabamento", price: 149.9 },
      { id: "couche-300-verniz", name: "Couché 300g — verniz local frente", price: 219.9 },
      { id: "couche-350-laminado", name: "Couché 350g — laminação fosca", price: 279.9 },
    ],
  },
  {
    id: "banner",
    name: "Banner em Lona",
    category: "Comunicação Visual",
    image: banner,
    short: "Lona impressa em alta resolução, preço por m².",
    description:
      "Banner impresso em lona vinílica com tinta resistente a sol e chuva, acabamento com bastão, ilhoses e corda inclusos. Ideal para fachadas, eventos e campanhas. Preço calculado por metro quadrado.",
    unitLabel: "m²",
    unitSuffix: "m²",
    minQty: 1,
    step: 1,
    variantLabel: "Material / resolução",
    variants: [
      { id: "lona-280", name: "Lona 280g — 360 dpi (uso interno)", price: 59.9 },
      { id: "lona-440", name: "Lona 440g — 720 dpi (uso externo)", price: 89.9 },
      { id: "lona-blackout", name: "Lona blackout 500g — dupla face", price: 129.9 },
    ],
  },
  {
    id: "envelope-personalizado",
    name: "Envelope Personalizado",
    category: "Papelaria",
    image: envelope,
    short: "Impressão da marca em offset, pacote de 100 unidades.",
    description:
      "Envelope personalizado com a identidade visual da sua empresa, impressão offset em papel offset 90g ou sulfite. Disponível nos formatos ofício, saco e carta. Preço por pacote de 100 unidades.",
    unitLabel: "pacote de 100 un.",
    unitSuffix: "pacote(s)",
    minQty: 1,
    step: 1,
    variantLabel: "Formato",
    variants: [
      { id: "carta", name: "Carta 114x229mm — 1 cor", price: 98.0 },
      { id: "oficio", name: "Ofício 114x229mm — 4 cores", price: 139.0 },
      { id: "saco-a4", name: "Saco A4 240x340mm — 4 cores", price: 189.0 },
    ],
  },
  {
    id: "convite-personalizado",
    name: "Convite Personalizado",
    category: "Papelaria",
    image: convite,
    short: "Casamentos, formaturas e eventos. Preço por unidade.",
    description:
      "Convite impresso em papel de gramatura alta com opções de acabamento especial: hot stamping dourado, relevo seco ou laminação. Envelope incluso. Preço por unidade, pedido mínimo de 50 convites.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 50,
    step: 10,
    variantLabel: "Acabamento",
    variants: [
      { id: "simples", name: "Papel perolizado 250g — sem acabamento", price: 3.9 },
      { id: "hot-stamping", name: "Papel perolizado 250g — hot stamping dourado", price: 6.5 },
      { id: "relevo", name: "Papel texturizado 300g — relevo seco", price: 8.2 },
    ],
  },
  {
    id: "catalogo",
    name: "Catálogo / Revista",
    category: "Editorial",
    image: catalogo,
    short: "Miolo colorido com capa laminada. Preço por unidade.",
    description:
      "Catálogo A4 fechado com capa em couché 250g laminada e miolo em couché 115g, acabamento em grampo canoa ou lombada quadrada. Preço por unidade conforme o número de páginas, tiragem mínima de 100 exemplares.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 100,
    step: 50,
    variantLabel: "Número de páginas",
    variants: [
      { id: "p16", name: "16 páginas — grampo canoa", price: 7.4 },
      { id: "p32", name: "32 páginas — grampo canoa", price: 11.9 },
      { id: "p64", name: "64 páginas — lombada quadrada", price: 19.8 },
    ],
  },
  {
    id: "adesivo",
    name: "Adesivo",
    category: "Comunicação Visual",
    image: adesivo,
    short: "Vinil ou papel, recorte eletrônico. Preço por m².",
    description:
      "Adesivo impresso com recorte eletrônico para rotulagem, vitrines, frotas e adesivação de ambientes. Disponível em vinil brilho, vinil fosco e papel couché adesivo. Preço por metro quadrado impresso.",
    unitLabel: "m²",
    unitSuffix: "m²",
    minQty: 1,
    step: 1,
    variantLabel: "Material",
    variants: [
      { id: "papel", name: "Papel couché adesivo — uso interno", price: 69.9 },
      { id: "vinil-brilho", name: "Vinil brilho — uso externo", price: 99.9 },
      { id: "vinil-fosco", name: "Vinil fosco com laminação", price: 139.9 },
    ],
  },
  {
    id: "carimbo",
    name: "Carimbo",
    category: "Escritório",
    image: carimbo,
    short: "Automático ou de madeira. Preço por unidade.",
    description:
      "Carimbo personalizado com sua arte, produzido em até 24 horas. Modelos automáticos com almofada embutida ou tradicionais em madeira, com tinta preta, azul ou vermelha.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 1,
    step: 1,
    variantLabel: "Modelo e tamanho",
    variants: [
      { id: "auto-38x14", name: "Automático 38x14mm", price: 49.9 },
      { id: "auto-58x22", name: "Automático 58x22mm", price: 74.9 },
      { id: "madeira-60x40", name: "Madeira 60x40mm", price: 39.9 },
    ],
  },
];

export const categories = ["Todos", "Papelaria", "Comunicação Visual", "Editorial", "Escritório"] as const;

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function minPrice(p: Product) {
  return Math.min(...p.variants.map((v) => v.price));
}

export function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
