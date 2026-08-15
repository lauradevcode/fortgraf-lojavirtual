import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import { InkBar } from "@/components/PrintMarks";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Página Inicial", to: "/" as const },
  { label: "Serviços", to: "/" as const, hash: "servicos" },
  { label: "Produtos", to: "/produtos" as const },
  { label: "Parceiros", to: "/" as const, hash: "parceiros" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-k/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0" aria-label="FortGraf — página inicial">
          <Logo />
        </Link>

        <div className="flex items-center gap-1 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-k/80 transition-colors hover:text-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/carrinho"
            className="press relative inline-flex h-10 items-center gap-2 border border-ink-k bg-ink-k px-4 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:border-ink-red hover:bg-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
          >
            <ShoppingCart className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Carrinho</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink-red font-mono text-[0.6rem] font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 shrink-0 place-items-center border border-ink-k text-ink-k lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-k/60 bg-paper px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              onClick={() => setOpen(false)}
              className="block border-b border-ink-k/20 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-k"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <InkBar className="w-full" />
    </header>
  );
}
