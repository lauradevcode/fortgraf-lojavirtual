import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useCart, type Order } from "@/lib/cart";
import { brl } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar pedido | FortGraf Gráfica São Luís" },
      {
        name: "description",
        content:
          "Informe seus dados de contato e confirme seu pedido gráfico. A FortGraf responde por WhatsApp ou e-mail.",
      },
      { property: "og:title", content: "Finalizar pedido | FortGraf" },
      {
        property: "og:description",
        content: "Confirme seu pedido de impressão com a FortGraf em São Luís (MA).",
      },
    ],
  }),
  component: CheckoutPage,
});

const schema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().min(10, "Informe um telefone/WhatsApp válido").max(20),
  address: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(1000).optional(),
});

function CheckoutPage() {
  const { items, total, placeOrder } = useCart();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState<Order | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      address: form.get("address"),
      notes: form.get("notes"),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    const order = placeOrder({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      address: parsed.data.address ?? "",
      notes: parsed.data.notes ?? "",
    });
    setConfirmed(order);
  }

  if (confirmed) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-20 sm:px-6">
          <div className="border border-border bg-card p-8 text-center sm:p-12">
            <CheckCircle2 className="mx-auto h-14 w-14 text-cmyk-c" />
            <h1 className="mt-6 text-3xl uppercase">Pedido recebido!</h1>
            <p className="mt-3 font-display text-2xl text-primary">Nº do pedido: #{confirmed.number}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Entraremos em contato pelo WhatsApp/e-mail informado ({confirmed.phone} ·{" "}
              {confirmed.email}) para confirmar arquivos e prazo de produção.
            </p>

            <ul className="mt-8 divide-y divide-border border-y border-border text-left text-sm">
              {confirmed.items.map((item) => (
                <li key={item.key} className="flex justify-between gap-3 py-3">
                  <span className="min-w-0">
                    {item.qty} {item.unitSuffix} — {item.productName}
                    <span className="block text-xs text-muted-foreground">{item.variantName}</span>
                  </span>
                  <span className="shrink-0 font-semibold">{brl(item.unitPrice * item.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-bold uppercase">Total</span>
              <span className="font-display text-2xl text-primary">{brl(confirmed.total)}</span>
            </div>

            <Link
              to="/produtos"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Fazer novo pedido <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl uppercase sm:text-4xl">Finalizar pedido</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sem pagamento online: confirmamos valores, arquivos e forma de pagamento no atendimento.
        </p>

        {items.length === 0 ? (
          <div className="mt-10 border border-dashed border-border px-6 py-16 text-center">
            <p className="font-semibold">Não há itens no carrinho.</p>
            <Link
              to="/produtos"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
            >
              Ver produtos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <form onSubmit={handleSubmit} className="border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nome completo" name="name" error={errors["name"]} required />
                <Field label="E-mail" name="email" type="email" error={errors["email"]} required />
                <Field
                  label="Telefone / WhatsApp"
                  name="phone"
                  type="tel"
                  placeholder="(98) 90000-0000"
                  error={errors["phone"]}
                  required
                />
                <Field label="Endereço (opcional)" name="address" error={errors["address"]} />
              </div>

              <div className="mt-5">
                <label htmlFor="notes" className="text-xs font-bold uppercase tracking-widest">
                  Observações
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  maxLength={1000}
                  placeholder="Prazo desejado, detalhes da arte, referência de cor..."
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Confirmar pedido <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <aside className="h-fit border border-border bg-muted/40 p-6 lg:sticky lg:top-28">
              <h2 className="text-lg uppercase">Resumo do pedido</h2>
              <ul className="mt-4 divide-y divide-border text-sm">
                {items.map((item) => (
                  <li key={item.key} className="flex justify-between gap-3 py-3">
                    <span className="min-w-0">
                      {item.qty} {item.unitSuffix} — {item.productName}
                      <span className="block text-xs text-muted-foreground">{item.variantName}</span>
                    </span>
                    <span className="shrink-0 font-semibold">{brl(item.unitPrice * item.qty)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-bold uppercase">Total</span>
                <span className="font-display text-2xl text-primary">{brl(total)}</span>
              </div>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-widest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
