import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Gauge,
  Paperclip,
  Phone,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CropMarks, InkBar } from "@/components/PrintMarks";
import heroPress from "@/assets/hero-press.jpg";
import saoLuis from "@/assets/sao-luis.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { brl, categorySwatch, minPrice, products } from "@/lib/products";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FortGraf — Gráfica e Editora em São Luís (MA)" },
      {
        name: "description",
        content:
          "Gráfica em São Luís do Maranhão: impressão offset e digital, comunicação visual, fachadas e adesivação. Produção em até 2 dias úteis. (98) 3222-7139.",
      },
      { property: "og:title", content: "FortGraf — Gráfica e Editora em São Luís (MA)" },
      {
        property: "og:description",
        content:
          "Gráfica em São Luís do Maranhão: impressão offset e digital, comunicação visual, fachadas e adesivação. Produção em até 2 dias úteis. (98) 3222-7139.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* Estilos compartilhados com /produtos — identidade de prova de impressão. */
const kicker = "font-mono text-[0.7rem] uppercase tracking-[0.3em] text-ink-k/70";
const h2Class = "font-display text-3xl uppercase leading-[0.95] text-ink-k sm:text-5xl";
const btnGhost =
  "press inline-flex items-center gap-2 border border-ink-k bg-transparent px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-k transition-colors hover:border-ink-red hover:bg-ink-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red";
const btnSolid =
  "press inline-flex items-center gap-2 border border-ink-k bg-ink-k px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink-red hover:border-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red";
const btnPaper =
  "press inline-flex items-center gap-2 border border-paper bg-paper px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-k transition-colors hover:border-ink-red hover:bg-ink-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";
const fieldLabel = "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-k/60";
const fieldInput =
  "mt-2 w-full border border-ink-k bg-transparent px-4 py-3 text-sm text-ink-k outline-none transition-colors focus:border-ink-red";

const helpCards = [
  { title: "Impressão Digital", text: "Tiragens curtas com qualidade offset e prazo curto." },
  { title: "Comunicação Visual", text: "Projetos que colocam sua marca em evidência na rua." },
  { title: "Fachadas", text: "Letras caixa, ACM, lonas e luminosos sob medida." },
  { title: "Materiais de Campanha", text: "Panfletos, faixas, bandeiras e adesivos em volume." },
];

const pillars = [
  {
    icon: Compass,
    title: "Objetivos",
    text: "Atender pequenas, médias e grandes empresas com o mesmo padrão de acabamento, do cartão de visita à fachada completa.",
  },
  {
    icon: Target,
    title: "Metas",
    text: "Reduzir prazos sem abrir mão da qualidade: parque gráfico próprio, produção em até 2 dias úteis e conferência de cor em todo pedido.",
  },
  {
    icon: Gauge,
    title: "Diferencial",
    text: "Estrutura de indústria com atendimento de gráfica de bairro — mais capacidade de impressão pelo menor custo do Maranhão.",
  },
];

const partners = [
  "Construtora Marajó",
  "Rede Bequimão",
  "Colégio São José",
  "Praia Grande Turismo",
  "Supermix Distribuidora",
  "Instituto Timbira",
  "Clínica Litoral",
  "Amazônia Alimentos",
];

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <SiteHeader />
      <main className="flex-1 bg-paper">
        <Hero />
        <CitySection />
        <VisualCommunication />
        <Pillars />
        <HelpSection />
        <StoreSection />
        <PartnersSection />
        <QuoteSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-k">
      <img
        src={heroPress}
        alt="Operário da FortGraf operando máquina de impressão offset"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="grid-texture absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/70">
            Gráfica e Editora · São Luís — MA
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-paper sm:text-6xl">
            Produção em até
            <span className="block text-ink-y">2 dias úteis</span>
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-paper/70">
            Grandes e pequenos formatos
          </p>

          <div className="mt-9 inline-flex flex-wrap items-center gap-4 border border-paper/40 bg-black/30 p-4 backdrop-blur-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink-y">
              <Phone className="h-5 w-5 text-ink-k" />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-paper/70">
                Dúvidas e orçamentos
              </p>
              <a
                href="tel:+559832227139"
                className="font-display text-2xl text-paper hover:text-ink-y"
              >
                (98) 3222-7139
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/produtos" className={btnPaper}>
              Comprar online <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="#orcamento"
              className="press inline-flex items-center gap-2 border border-paper/60 px-5 py-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:border-ink-red hover:bg-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Fazer orçamento
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden items-center justify-end lg:flex"
        >
          <div className="relative border border-ink-k bg-paper px-10 py-8">
            <CropMarks />
            <Logo size="lg" />
            <InkBar className="absolute inset-x-0 bottom-0 w-full" />
          </div>
        </motion.div>
      </div>
      <InkBar className="w-full" />
    </section>
  );
}

function CitySection() {
  return (
    <section id="servicos" className="relative isolate border-b border-ink-k/80">
      <img
        src={saoLuis}
        alt="Vista aérea da cidade de São Luís, no Maranhão"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-k/80" />
      <Reveal className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/70">
          Parque gráfico próprio
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-paper sm:text-5xl">
          Gráfica em São Luís é aqui!
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-paper/75">
          Somos reconhecidos na capital maranhense pela experiência de mais de duas décadas e pela
          capacidade de impressão: do pequeno formato ao grande formato, com equipe própria de produção,
          acabamento e instalação.
        </p>
        <a href="#orcamento" className={`${btnPaper} mt-9`}>
          Fale conosco <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </Reveal>
    </section>
  );
}

function VisualCommunication() {
  const stats = [
    { value: 147, prefix: "+", label: "Clientes satisfeitos" },
    { value: 271, prefix: "+", label: "Projetos entregues" },
    { value: 22, prefix: "", label: "Anos de experiência" },
  ];

  return (
    <section className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className={kicker}>Comunicação visual</p>
          <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink-k sm:text-4xl">
            Surpreenda seu público e eleve o valor da sua marca com projetos diferenciados
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-k/70">
            Trabalhamos com impressão digital de alta resolução, fachadas em ACM e letras caixa,
            adesivação de vitrines e frotas, painéis, totens e sinalização interna. Cada projeto passa
            por medição no local, prova de cor e instalação feita pela nossa equipe — para que o
            resultado impresso seja exatamente o que foi aprovado.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div key={s.label} className="border-t-4 pt-3" style={{ borderTopColor: [ "var(--ink-c)", "var(--ink-m)", "var(--ink-y)" ][i] }}>
                <dt className="font-display text-3xl text-ink-k">
                  <CountUp value={s.value} prefix={s.prefix} />
                </dt>
                <dd className={`mt-1 ${fieldLabel}`}>{s.label}</dd>
              </div>
            ))}
          </dl>

          <a href="#orcamento" className={`${btnSolid} mt-10`}>
            Fale conosco <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[team1, team2, team3, team4].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Equipe FortGraf em produção gráfica e comunicação visual"
              loading="lazy"
              width={800}
              height={800}
              className={`h-40 w-full border border-ink-k/60 object-cover sm:h-56 ${i % 3 === 0 ? "sm:h-64" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const inks = ["var(--ink-c)", "var(--ink-m)", "var(--ink-y)"];
  return (
    <section className="border-y border-ink-k/80 bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.12} className="h-full">
            <div className="registration-shift relative flex h-full flex-col items-center border border-ink-k bg-paper p-8 text-center">
              <CropMarks />
              <motion.span
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className="grid h-16 w-16 place-items-center border border-ink-k"
                style={{ background: inks[i] }}
              >
                <Icon className={`h-7 w-7 ${i === 2 ? "text-ink-k" : "text-white"}`} />
              </motion.span>
              <h3 className="reg-layer mt-6 font-display text-xl uppercase text-ink-k">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-k/70">{text}</p>
              <InkBar className="absolute inset-x-0 bottom-0 w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="bg-ink-k py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.3em] text-paper/70">
          Serviços / especificação
        </p>
        <h2 className="mt-3 text-center font-display text-3xl uppercase leading-[0.95] text-paper sm:text-5xl">
          Como podemos te ajudar?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helpCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full min-w-0">
              <a
                href="#orcamento"
                className="registration-shift group relative flex h-full min-w-0 flex-col border border-paper/30 bg-paper p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
              >
                <CropMarks />
                <span
                  className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-ink-k/60"
                >
                  <span
                    aria-hidden
                    className="h-2 w-2"
                    style={{
                      background: ["var(--ink-c)", "var(--ink-m)", "var(--ink-y)", "var(--ink-k)"][i],
                    }}
                  />
                  Serviço
                </span>
                <h3 className="reg-layer mt-2 font-display text-lg uppercase leading-tight text-ink-k">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-k/70">{c.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-ink-red">
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <InkBar className="absolute inset-x-0 bottom-0 w-full" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreSection() {
  return (
    <section id="produtos" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className={kicker}>Loja online</p>
            <h2 className={`mt-3 ${h2Class}`}>Nossos produtos</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-k/70">
              Escolha o produto, defina papel, material ou tamanho, veja o preço na hora e finalize o
              pedido. Tudo online, sem esperar retorno de orçamento.
            </p>
          </div>
          <Link to="/produtos" className={`${btnSolid} shrink-0`}>
            Ver a loja completa <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.07} className="h-full min-w-0">
              <Link
                to="/produtos/$id"
                params={{ id: p.id }}
                className="registration-shift group relative flex h-full min-w-0 flex-col border border-ink-k bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-red"
              >
                <CropMarks />
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="h-36 w-full border-b border-ink-k/60 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col p-4">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-ink-k/60">
                    <span
                      aria-hidden
                      className="h-2 w-2"
                      style={{ background: categorySwatch[p.category] ?? "var(--ink-k)" }}
                    />
                    {p.category}
                  </span>
                  <h3 className="reg-layer mt-2 font-display text-base uppercase leading-tight text-ink-k">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-k/50">
                    A partir de
                  </p>
                  <p className="mt-1 inline-block self-start rounded-sm bg-ink-red px-2 py-1 font-mono text-sm font-bold text-white">
                    {brl(minPrice(p))}
                  </p>
                </div>
                <InkBar className="w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="parceiros" className="border-y border-ink-k/80 bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className={kicker}>Confiança</p>
        <h2 className={`mt-3 ${h2Class}`}>Nossos parceiros</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-k/70">
          Empresas, escolas, construtoras e instituições que contam com a FortGraf para materiais
          recorrentes, campanhas e projetos de comunicação visual em todo o Maranhão.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-ink-k bg-ink-k/20 sm:grid-cols-4">
          {partners.map((name) => (
            <div
              key={name}
              className="grid h-24 place-items-center bg-paper px-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-k/70 transition-colors hover:bg-ink-k hover:text-paper"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [fileName, setFileName] = useState("");

  return (
    <section id="orcamento" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className={kicker}>Orçamento personalizado</p>
          <h2 className={`mt-3 ${h2Class}`}>Faça seu orçamento agora</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-k/70">
            Para grandes volumes, projetos especiais ou artes que precisam de análise técnica, envie os
            detalhes e o arquivo. Nossa equipe responde com prazo e valor fechado.
          </p>
          <p className="mt-6 inline-block bg-ink-y px-4 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink-k">
            Ganhe 10% de desconto no seu orçamento
          </p>
          <p className="mt-6 text-sm text-ink-k/70">
            Pedidos padronizados?{" "}
            <Link to="/produtos" className="font-bold text-ink-red hover:underline">
              Compre direto na loja online
            </Link>
            .
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Solicitação enviada!", {
              description: "Nossa equipe responde em até 1 dia útil com prazo e valor.",
            });
            e.currentTarget.reset();
            setFileName("");
          }}
          className="relative border border-ink-k bg-paper p-6 sm:p-8"
        >
          <CropMarks />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="q-name" className={fieldLabel}>
                Nome
              </label>
              <input id="q-name" name="name" required maxLength={100} className={fieldInput} />
            </div>
            <div>
              <label htmlFor="q-email" className={fieldLabel}>
                E-mail
              </label>
              <input
                id="q-email"
                name="email"
                type="email"
                required
                maxLength={255}
                className={fieldInput}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="q-phone" className={fieldLabel}>
              Telefone / WhatsApp
            </label>
            <input
              id="q-phone"
              name="phone"
              type="tel"
              required
              maxLength={20}
              placeholder="(98) 90000-0000"
              className={fieldInput}
            />
          </div>

          <div className="mt-5">
            <span className={fieldLabel}>Anexo de arquivo</span>
            <label
              htmlFor="q-file"
              className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-ink-k/60 px-4 py-4 text-sm text-ink-k/60 transition-colors hover:border-ink-red"
            >
              <Paperclip className="h-4 w-4 shrink-0" />
              <span className="min-w-0 truncate">
                {fileName || "Anexe a arte, PDF ou referência (até 20MB)"}
              </span>
            </label>
            <input
              id="q-file"
              name="file"
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="q-message" className={fieldLabel}>
              Mensagem
            </label>
            <textarea
              id="q-message"
              name="message"
              rows={4}
              maxLength={1000}
              className={fieldInput}
            />
          </div>

          <button type="submit" className={`${btnGhost} mt-7 w-full justify-center`}>
            Enviar <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <InkBar className="absolute inset-x-0 bottom-0 w-full" />
        </form>
      </div>
    </section>
  );
}
