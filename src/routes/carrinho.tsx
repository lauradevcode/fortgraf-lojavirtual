import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useCart } from "@/lib/cart";
import { brl } from "@/lib/products";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title: "Carrinho de pedidos | FortGraf Gráfica São Luís" },
      {
        name: "description",
        content:
          "Revise os itens do seu pedido gráfico, ajuste quantidades e finalize com a FortGraf em São Luís (MA).",
      },
      { property: "og:title", content: "Carrinho de pedidos | FortGraf" },
      {
        property: "og:description",
        content: "Revise seu pedido de impressão e finalize com a FortGraf.",
      },
    ],
  }),
  component: CarrinhoPage,
});

function CarrinhoPage() {
  const { items, total, setQty, removeItem } = useCart();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl uppercase sm:text-4xl">Seu carrinho</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pedidos padronizados. Para grandes volumes ou artes especiais, use o formulário de orçamento.
        </p>

        {items.length === 0 ? (
          <div className="mt-10 border border-dashed border-border px-6 py-16 text-center">
            <ShoppingCart className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-4 font-semibold">Seu carrinho está vazio.</p>
            <Link
              to="/produtos"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Ver produtos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="border border-border bg-card p-4 sm:p-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                    <img
                      src={item.image}
                      alt={item.productName}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 object-cover sm:h-24 sm:w-24"
                    />
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h2 className="truncate text-base font-bold uppercase">{item.productName}</h2>
                          <p className="mt-1 text-sm text-muted-foreground">{item.variantName}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {brl(item.unitPrice)} / {item.unitSuffix}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          aria-label={`Remover ${item.productName}`}
                          className="shrink-0 p-2 text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            aria-label="Diminuir quantidade"
                            onClick={() => setQty(item.key, item.qty - item.step)}
                            className="grid h-9 w-9 place-items-center hover:bg-muted"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            min={item.minQty}
                            step={item.step}
                            value={item.qty}
                            onChange={(e) => setQty(item.key, Number(e.target.value) || item.minQty)}
                            className="h-9 w-20 border-x border-border text-center text-sm font-semibold outline-none"
                          />
                          <button
                            type="button"
                            aria-label="Aumentar quantidade"
                            onClick={() => setQty(item.key, item.qty + item.step)}
                            className="grid h-9 w-9 place-items-center hover:bg-muted"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="font-display text-lg text-primary">
                          {brl(item.unitPrice * item.qty)}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit border border-border bg-muted/40 p-6 lg:sticky lg:top-28">
              <h2 className="text-lg uppercase">Resumo</h2>
              <dl className="mt-4 space-y-2 text-sm">
                {items.map((item) => (
                  <div key={item.key} className="flex justify-between gap-3">
                    <dt className="min-w-0 truncate text-muted-foreground">
                      {item.qty} × {item.productName}
                    </dt>
                    <dd className="shrink-0 font-semibold">{brl(item.unitPrice * item.qty)}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-bold uppercase">Total</span>
                <span className="font-display text-2xl text-primary">{brl(total)}</span>
              </div>
              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Finalizar pedido <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/produtos"
                className="mt-3 block text-center text-xs font-bold uppercase tracking-wide text-muted-foreground hover:text-primary"
              >
                Continuar comprando
              </Link>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
