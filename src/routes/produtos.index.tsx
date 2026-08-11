import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { brl, categories, minPrice, products } from "@/lib/products";

export const Route = createFileRoute("/produtos/")({
  head: () => ({
    meta: [
      { title: "Loja de produtos gráficos | FortGraf São Luís" },
      {
        name: "description",
        content:
          "Cartões de visita, banners, envelopes, convites, catálogos, adesivos e carimbos com preço e produção em até 2 dias úteis.",
      },
      { property: "og:title", content: "Loja de produtos gráficos | FortGraf" },
      {
        property: "og:description",
        content: "Peça online cartões, banners, adesivos e carimbos com a FortGraf em São Luís (MA).",
      },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const [category, setCategory] = useState<string>("Todos");
  const list = category === "Todos" ? products : products.filter((p) => p.category === category);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="diagonal-brand bg-navy">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cmyk-y">Loja FortGraf</p>
            <h1 className="mt-3 max-w-2xl text-3xl uppercase text-white sm:text-5xl">
              Nossos produtos, prontos para pedir
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/75">
              Escolha o produto, defina papel, material ou tamanho e a quantidade. O preço é calculado
              na hora, sem espera por orçamento.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Filter className="h-4 w-4" /> Categoria
            </span>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col border border-border bg-card transition-shadow hover:shadow-xl"
              >
                <Link
                  to="/produtos/$id"
                  params={{ id: p.id }}
                  className="block overflow-hidden bg-muted"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">
                    {p.category}
                  </span>
                  <h2 className="mt-2 text-xl uppercase">{p.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
                        A partir de
                      </p>
                      <p className="font-display text-2xl text-foreground">{brl(minPrice(p))}</p>
                      <p className="text-xs text-muted-foreground">/ {p.unitLabel}</p>
                    </div>
                    <Link
                      to="/produtos/$id"
                      params={{ id: p.id }}
                      className="inline-flex items-center gap-2 bg-foreground px-4 py-3 text-xs font-bold uppercase tracking-wide text-background transition-colors hover:bg-primary"
                    >
                      Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
