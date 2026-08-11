import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/Logo";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Página Inicial", to: "/", hash: undefined },
  { label: "Serviços", to: "/", hash: "servicos" },
  { label: "Produtos", to: "/produtos", hash: undefined },
  { label: "Parceiros", to: "/", hash: "parceiros" },
];

export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0" aria-label="FortGraf — página inicial">
          <Logo />
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className="rounded-sm px-3 py-2 text-sm font-bold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/carrinho"
            className="relative inline-flex h-10 items-center gap-2 rounded-sm bg-primary px-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">Carrinho</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-cmyk-m text-[0.65rem] font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-bold uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
