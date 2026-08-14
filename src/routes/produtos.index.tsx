import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { CropMarks, InkBar } from "@/components/PrintMarks";
import { SiteHeader } from "@/components/SiteHeader";
import { brl, categories, categorySwatch, minPrice, products, salesScore } from "@/lib/products";

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

type Sort = "vendidos" | "preco";

function ProdutosPage() {
  const [category, setCategory] = useState<string>("Todos");
  const [sort, setSort] = useState<Sort>("vendidos");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products
      .filter((p) => (category === "Todos" ? true : p.category === category))
      .filter((p) =>
        term ? `${p.name} ${p.short} ${p.category}`.toLowerCase().includes(term) : true,
      )
      .sort((a, b) =>
        sort === "preco" ? minPrice(a) - minPrice(b) : salesScore(a) - salesScore(b),
      );
  }, [category, sort, q]);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <SiteHeader />

      <main className="flex-1 bg-paper">
        <div className="relative border-b border-ink-k/80 bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-ink-k/70">
              Ficha técnica / catálogo
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl uppercase leading-[0.95] text-ink-k sm:text-5xl">
              Produtos gráficos com preço na hora
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-k/70">
              Escolha papel, material ou tamanho, defina a quantidade e o preço é recalculado.
              Produção em até 2 dias úteis.
            </p>
          </div>
          <InkBar className="w-full" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          {/* Filtros: chips estilo amostra de tinta */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={`press inline-flex items-center gap-2 border border-ink-k px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red ${
                    active ? "bg-ink-k text-paper" : "bg-transparent text-ink-k hover:bg-ink-k/5"
                  }`}
                >
                  <span
                    aria-hidden
                    className="h-3 w-3 border border-ink-k/40"
                    style={{ background: categorySwatch[c] ?? "var(--ink-k)" }}
                  />
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex w-full items-center gap-2 border border-ink-k bg-transparent px-3 py-2 sm:max-w-xs">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-k/60">
                Buscar
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="cartão, banner..."
                className="w-full bg-transparent font-mono text-xs text-ink-k outline-none placeholder:text-ink-k/40"
              />
            </label>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-k/60">
                Ordenar
              </span>
              {(
                [
                  ["vendidos", "Mais vendidos"],
                  ["preco", "Menor preço"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSort(value)}
                  aria-pressed={sort === value}
                  className={`border border-ink-k px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red ${
                    sort === value ? "bg-ink-k text-paper" : "text-ink-k hover:bg-ink-k/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-k/50">
              {list.length} itens
            </span>
            <span className="h-px flex-1 bg-ink-k/20" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 6) * 0.05}>
                <article className="registration-shift group relative flex h-full min-w-0 flex-col border border-ink-k bg-paper">
                  <CropMarks />
                  <Link
                    to="/produtos/$id"
                    params={{ id: p.id }}
                    className="reg-layer block overflow-hidden border-b border-ink-k/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={900}
                      height={700}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-ink-k/60">
                      <span
                        aria-hidden
                        className="h-2 w-2"
                        style={{ background: categorySwatch[p.category] ?? "var(--ink-k)" }}
                      />
                      {p.category}
                    </span>
                    <h2 className="reg-layer mt-2 font-display text-lg uppercase leading-tight text-ink-k">
                      {p.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-k/70">{p.short}</p>

                    <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-k/50">
                          A partir de
                        </p>
                        <p className="mt-1 inline-block rounded-sm bg-ink-red px-2 py-1 font-mono text-base font-bold text-white">
                          {brl(minPrice(p))}
                        </p>
                        <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-k/50">
                          / {p.unitLabel}
                        </p>
                      </div>
                      <Link
                        to="/produtos/$id"
                        params={{ id: p.id }}
                        className="press inline-flex items-center gap-2 border border-ink-k bg-transparent px-4 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-k transition-colors hover:border-ink-red hover:bg-ink-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
                      >
                        Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <InkBar className="w-full" />
                </article>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-10 font-mono text-sm uppercase tracking-widest text-ink-k/60">
              Nenhum produto encontrado.
            </p>
          )}

          <div className="mt-14 flex flex-col items-start gap-3 border border-ink-k p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg uppercase text-ink-k">
              Precisa de um formato fora da tabela?
            </p>
            <Link
              to="/"
              hash="orcamento"
              className="press border border-ink-k bg-ink-k px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-ink-red"
            >
              Pedir orçamento
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
