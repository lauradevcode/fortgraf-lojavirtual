import { Link, createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, ShieldCheck, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useCart } from "@/lib/cart";
import { brl, getProduct } from "@/lib/products";

export const Route = createFileRoute("/produtos/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Produto indisponível | FortGraf" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — preço e opções | FortGraf` },
        { name: "description", content: product.short },
        { property: "og:title", content: `${product.name} | FortGraf Gráfica` },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { product } = Route.useLoaderData();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [variantId, setVariantId] = useState(product.variants[0]!.id);
  const [qty, setQty] = useState(product.minQty);

  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0]!;
  const totalQty = Math.max(product.minQty, qty || product.minQty);
  const total = variant.price * totalQty;

  function handleAdd() {
    addItem({
      productId: product.id,
      productName: product.name,
      image: product.image,
      variantId: variant.id,
      variantName: variant.name,
      unitPrice: variant.price,
      unitSuffix: product.unitSuffix,
      minQty: product.minQty,
      step: product.step,
      qty: totalQty,
    });
    toast.success("Item adicionado ao carrinho", { description: `${product.name} — ${variant.name}` });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6">
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para a loja
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src={product.image}
              alt={product.name}
              width={900}
              height={700}
              className="w-full border border-border object-cover"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 border border-border p-4 text-sm">
                <Clock className="h-5 w-5 shrink-0 text-cmyk-c" />
                <span>Produção em até 2 dias úteis</span>
              </div>
              <div className="flex items-center gap-3 border border-border p-4 text-sm">
                <ShieldCheck className="h-5 w-5 shrink-0 text-cmyk-m" />
                <span>Prova digital antes de imprimir</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
              {product.category}
            </span>
            <h1 className="mt-2 text-3xl uppercase sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="mt-8">
              <label
                htmlFor="variant"
                className="text-xs font-bold uppercase tracking-widest text-foreground"
              >
                {product.variantLabel}
              </label>
              <select
                id="variant"
                value={variantId}
                onChange={(e) => setVariantId(e.target.value)}
                className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm font-semibold outline-none focus:border-primary"
              >
                {product.variants.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} — {brl(v.price)} / {product.unitSuffix}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="qty"
                className="text-xs font-bold uppercase tracking-widest text-foreground"
              >
                Quantidade ({product.unitSuffix})
              </label>
              <input
                id="qty"
                type="number"
                min={product.minQty}
                step={product.step}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm font-semibold outline-none focus:border-primary"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Pedido mínimo: {product.minQty} {product.unitSuffix}
              </p>
            </div>

            <div className="mt-8 border border-border bg-muted/40 p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
                    Total estimado
                  </p>
                  <p className="font-display text-4xl text-primary">{brl(total)}</p>
                </div>
                <p className="text-right text-xs text-muted-foreground">
                  {totalQty} {product.unitSuffix} × {brl(variant.price)}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  <ShoppingCart className="h-4 w-4" /> Adicionar ao carrinho
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleAdd();
                    navigate({ to: "/carrinho" });
                  }}
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-foreground px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
                >
                  <Check className="h-4 w-4" /> Comprar agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
