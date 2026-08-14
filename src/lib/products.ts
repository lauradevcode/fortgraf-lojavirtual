import cartao from "@/assets/prod-cartao.jpg";
import banner from "@/assets/prod-banner.jpg";
import envelope from "@/assets/prod-envelope.jpg";
import convite from "@/assets/prod-convite.jpg";
import catalogo from "@/assets/prod-catalogo.jpg";
import adesivo from "@/assets/prod-adesivo.jpg";
import carimbo from "@/assets/prod-carimbo.jpg";
import talao from "@/assets/prod-talao.jpg";
import folder from "@/assets/prod-folder.jpg";
import panfleto from "@/assets/prod-panfleto.jpg";
import caneca from "@/assets/prod-caneca.jpg";
import camiseta from "@/assets/prod-camiseta.jpg";
import faixa from "@/assets/prod-faixa.jpg";
import agenda from "@/assets/prod-agenda.jpg";
import cracha from "@/assets/prod-cracha.jpg";

export type VariantOption = {
  id: string;
  name: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  category: "Papelaria" | "Comunicação Visual" | "Editorial" | "Escritório" | "Brindes";
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
  {
    id: "talao-de-pedido",
    name: "Talão de Pedido",
    category: "Escritório",
    image: talao,
    short: "Autocopiativo 2 ou 3 vias, numeração sequencial.",
    description:
      "Talão de pedido, recibo ou ordem de serviço em papel autocopiativo com numeração sequencial e blocagem com capa dura. Impressão em 1 cor no formato 1/3 de ofício ou A5. Preço por talão de 100 jogos.",
    unitLabel: "talão de 100 jogos",
    unitSuffix: "talão(ões)",
    minQty: 1,
    step: 1,
    variantLabel: "Vias e formato",
    variants: [
      { id: "2vias-a5", name: "2 vias — A5, 1 cor", price: 64.0 },
      { id: "3vias-a5", name: "3 vias — A5, 1 cor", price: 88.0 },
      { id: "3vias-oficio", name: "3 vias — 1/3 ofício, 2 cores", price: 112.0 },
    ],
  },
  {
    id: "folder",
    name: "Folder Dobrado",
    category: "Editorial",
    image: folder,
    short: "A4 com dobra dupla ou tríptico, 4x4 cores.",
    description:
      "Folder institucional impresso 4x4 cores em couché 150g ou 170g, com dobra dupla paralela ou tríptico. Vinco aplicado em máquina para dobra sem quebra de tinta. Preço por unidade, tiragem mínima de 250.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 250,
    step: 50,
    variantLabel: "Papel e dobra",
    variants: [
      { id: "c150-2dobras", name: "Couché 150g — 2 dobras", price: 1.45 },
      { id: "c170-triptico", name: "Couché 170g — tríptico", price: 1.98 },
      { id: "c250-laminado", name: "Couché 250g — laminação fosca", price: 3.1 },
    ],
  },
  {
    id: "panfleto",
    name: "Panfleto / Flyer",
    category: "Papelaria",
    image: panfleto,
    short: "A5 ou A6, 4x0 ou 4x4 cores, pacote de 1.000.",
    description:
      "Panfleto para divulgação e campanha, impresso em couché 90g ou 115g. Corte reto em guilhotina industrial e conferência de cor por prova digital. Preço por pacote de 1.000 unidades.",
    unitLabel: "pacote de 1.000 un.",
    unitSuffix: "pacote(s)",
    minQty: 1,
    step: 1,
    variantLabel: "Formato e cores",
    variants: [
      { id: "a6-4x0", name: "A6 10x15cm — couché 90g, 4x0", price: 129.0 },
      { id: "a5-4x0", name: "A5 15x21cm — couché 90g, 4x0", price: 189.0 },
      { id: "a5-4x4", name: "A5 15x21cm — couché 115g, 4x4", price: 249.0 },
    ],
  },
  {
    id: "caneca-personalizada",
    name: "Caneca Personalizada",
    category: "Brindes",
    image: caneca,
    short: "Sublimação em cerâmica 325ml. Preço por unidade.",
    description:
      "Caneca de cerâmica 325ml com impressão por sublimação, tinta curada a 180°C — resistente a lava-louças. Disponível branca, com interior colorido ou mágica. Preço por unidade, pedido mínimo de 6.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 6,
    step: 1,
    variantLabel: "Modelo",
    variants: [
      { id: "branca", name: "Cerâmica branca 325ml", price: 32.9 },
      { id: "interior", name: "Interior e alça coloridos", price: 39.9 },
      { id: "magica", name: "Caneca mágica (revela com calor)", price: 54.9 },
    ],
  },
  {
    id: "camiseta-dtf",
    name: "Camiseta DTF",
    category: "Brindes",
    image: camiseta,
    short: "Transfer DTF em malha, cores ilimitadas.",
    description:
      "Camiseta personalizada com transfer DTF aplicado a quente: cores ilimitadas, sem limite de detalhe e boa resistência à lavagem. Malha 30.1 penteada ou dry fit, tamanhos P ao GG. Preço por unidade, mínimo de 10.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 10,
    step: 1,
    variantLabel: "Malha e área de impressão",
    variants: [
      { id: "algodao-a5", name: "Algodão 30.1 — estampa A5 (1 lado)", price: 42.9 },
      { id: "algodao-a4", name: "Algodão 30.1 — estampa A4 (1 lado)", price: 52.9 },
      { id: "dry-a4", name: "Dry fit — estampa A4 frente e costas", price: 68.9 },
    ],
  },
  {
    id: "faixa-testeira",
    name: "Faixa / Testeira",
    category: "Comunicação Visual",
    image: faixa,
    short: "Lona ou vinil para fachada e vitrine. Preço por m².",
    description:
      "Faixa de campanha ou testeira de fachada impressa em lona 440g ou vinil adesivo, com acabamento em bainha e ilhoses ou aplicação direta. Instalação sob consulta. Preço por metro quadrado.",
    unitLabel: "m²",
    unitSuffix: "m²",
    minQty: 1,
    step: 1,
    variantLabel: "Material e acabamento",
    variants: [
      { id: "lona-bainha", name: "Lona 440g — bainha e ilhoses", price: 84.9 },
      { id: "vinil-fachada", name: "Vinil adesivo — aplicação em ACM/vidro", price: 109.9 },
      { id: "lona-reforcada", name: "Lona reforçada com tubo e corda", price: 134.9 },
    ],
  },
  {
    id: "agenda-personalizada",
    name: "Agenda Personalizada",
    category: "Brindes",
    image: agenda,
    short: "Capa dura com sua marca + block notes. Por unidade.",
    description:
      "Agenda com capa dura personalizada, miolo diário ou semanal em offset 90g, wire-o ou lombada costurada e elástico. Opção com block notes de brinde. Preço por unidade, mínimo de 25.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 25,
    step: 5,
    variantLabel: "Miolo e acabamento",
    variants: [
      { id: "semanal-wireo", name: "Semanal — wire-o, capa dura", price: 38.9 },
      { id: "diaria-costurada", name: "Diária — lombada costurada", price: 52.9 },
      { id: "diaria-block", name: "Diária + block notes personalizado", price: 64.9 },
    ],
  },
  {
    id: "cracha",
    name: "Crachá PVC",
    category: "Escritório",
    image: cracha,
    short: "PVC 0,76mm com cordão e presilha. Por unidade.",
    description:
      "Crachá em PVC 0,76mm impresso em 4x4 cores, com opção de código de barras, QR code e numeração variável. Cordão sublimado e presilha jacaré inclusos. Preço por unidade, mínimo de 10.",
    unitLabel: "unidade",
    unitSuffix: "un.",
    minQty: 10,
    step: 5,
    variantLabel: "Configuração",
    variants: [
      { id: "frente", name: "Frente 4x0 — cordão liso", price: 14.9 },
      { id: "frente-verso", name: "Frente e verso 4x4 — cordão liso", price: 18.9 },
      { id: "variavel", name: "Frente e verso + dado variável e QR", price: 24.9 },
    ],
  },
];

export const categories = [
  "Todos",
  "Papelaria",
  "Comunicação Visual",
  "Editorial",
  "Escritório",
  "Brindes",
] as const;

/** Cor de "amostra de tinta" usada nos chips de filtro. */
export const categorySwatch: Record<string, string> = {
  Todos: "var(--ink-k)",
  Papelaria: "var(--ink-c)",
  "Comunicação Visual": "var(--ink-m)",
  Editorial: "var(--ink-y)",
  Escritório: "var(--ink-red)",
  Brindes: "var(--ink-c)",
};

/** Ordem de "mais vendidos" (curada, sem backend). */
const salesRank = [
  "cartao-de-visita",
  "banner",
  "panfleto",
  "adesivo",
  "carimbo",
  "camiseta-dtf",
  "folder",
  "envelope-personalizado",
  "talao-de-pedido",
  "caneca-personalizada",
  "convite-personalizado",
  "cracha",
  "faixa-testeira",
  "catalogo",
  "agenda-personalizada",
];

export function salesScore(p: Product) {
  const i = salesRank.indexOf(p.id);
  return i === -1 ? salesRank.length : i;
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function minPrice(p: Product) {
  return Math.min(...p.variants.map((v) => v.price));
}

export function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
