import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Gauge,
  Paperclip,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import heroPress from "@/assets/hero-press.jpg";
import saoLuis from "@/assets/sao-luis.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { brl, minPrice, products } from "@/lib/products";
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
    ],
  }),
  component: Home,
});

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
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
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
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={heroPress}
        alt="Operário da FortGraf operando máquina de impressão offset"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="diagonal-brand absolute inset-0" />
      <div className="grid-texture absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="inline-flex items-center gap-2 border-l-4 border-cmyk-y pl-3 text-xs font-bold uppercase tracking-[0.24em] text-white/85">
            Gráfica e Editora · São Luís — MA
          </p>
          <h1 className="mt-6 text-4xl uppercase leading-[0.95] text-white sm:text-6xl">
            Produção em até
            <span className="block text-cmyk-y">2 dias úteis</span>
          </h1>
          <p className="mt-5 font-display text-2xl uppercase text-white sm:text-3xl">
            GRANDES <span className="font-sans text-xl normal-case italic text-white/80">e pequenos</span>{" "}
            FORMATOS
          </p>

          <div className="mt-9 inline-flex flex-wrap items-center gap-4 border border-white/25 bg-black/25 p-4 backdrop-blur-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center bg-cmyk-y">
              <Phone className="h-5 w-5 text-black" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70">
                Dúvidas e orçamentos
              </p>
              <a href="tel:+559832227139" className="font-display text-2xl text-white hover:underline">
                (98) 3222-7139
              </a>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/produtos"
              className="press inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-cmyk-y"
            >
              Comprar online <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#orcamento"
              className="press inline-flex items-center gap-2 border border-white/60 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
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
          <div className="bg-white/95 px-10 py-8 shadow-2xl">
            <Logo size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CitySection() {
  return (
    <section id="servicos" className="relative isolate">
      <img
        src={saoLuis}
        alt="Vista aérea da cidade de São Luís, no Maranhão"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <Reveal className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-3xl uppercase text-white sm:text-5xl">Gráfica em São Luís é aqui!</h2>
        <p className="mt-5 text-base leading-relaxed text-white/80">
          Somos reconhecidos na capital maranhense pela experiência de mais de duas décadas e pela
          capacidade de impressão: do pequeno formato ao grande formato, com equipe própria de produção,
          acabamento e instalação.
        </p>
        <a
          href="#orcamento"
          className="press mt-9 inline-flex items-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Fale conosco <ArrowRight className="h-4 w-4" />
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
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="section-kicker">
            <Sparkles className="h-4 w-4" /> Comunicação visual
          </span>
          <h2 className="mt-4 text-3xl uppercase leading-tight sm:text-4xl">
            Surpreenda seu público e eleve o valor da sua marca com projetos diferenciados
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Trabalhamos com impressão digital de alta resolução, fachadas em ACM e letras caixa,
            adesivação de vitrines e frotas, painéis, totens e sinalização interna. Cada projeto passa
            por medição no local, prova de cor e instalação feita pela nossa equipe — para que o
            resultado impresso seja exatamente o que foi aprovado.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="border-t-4 border-primary pt-3">
                <dt className="font-display text-3xl text-foreground">
                  <CountUp value={s.value} prefix={s.prefix} />
                </dt>
                <dd className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#orcamento"
            className="press mt-10 inline-flex items-center gap-2 bg-foreground px-7 py-4 text-sm font-bold uppercase tracking-wide text-background transition-colors hover:bg-primary"
          >
            Fale conosco <ArrowRight className="h-4 w-4" />
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
              className={`h-40 w-full object-cover sm:h-56 ${i % 3 === 0 ? "sm:h-64" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-y border-border bg-muted/50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <div className="hover-lift h-full bg-card p-8 text-center shadow-sm">
              <motion.span
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                className={`mx-auto grid h-16 w-16 place-items-center ${
                  i === 0 ? "bg-cmyk-c" : i === 1 ? "bg-cmyk-m" : "bg-cmyk-y"
                }`}
              >
                <Icon className={`h-7 w-7 ${i === 2 ? "text-black" : "text-white"}`} />
              </motion.span>
              <h3 className="mt-6 text-xl uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl uppercase text-primary-foreground sm:text-4xl">
          Como podemos te ajudar?
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {helpCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
            <a
              href="#orcamento"
              className="hover-lift press group block h-full bg-white p-6"
            >
              <span className="block h-1 w-10 bg-cmyk-m transition-all group-hover:w-20" />
              <h3 className="mt-5 text-lg uppercase text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                Saiba mais
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
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
    <section id="produtos" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <span className="section-kicker">Loja online</span>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Nossos produtos</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Escolha o produto, defina papel, material ou tamanho, veja o preço na hora e finalize o
              pedido. Tudo online, sem esperar retorno de orçamento.
            </p>
          </div>
          <Link
            to="/produtos"
            className="inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Ver a loja completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.07} className="min-w-0">
            <Link
              to="/produtos/$id"
              params={{ id: p.id }}
              className="hover-lift press group flex gap-4 border border-border bg-card p-4 hover:border-primary"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={900}
                height={700}
                className="h-20 w-20 shrink-0 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="min-w-0">
                <h3 className="truncate text-base uppercase group-hover:text-primary">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">A partir de</p>
                <p className="font-display text-lg text-primary">{brl(minPrice(p))}</p>
              </div>
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
    <section id="parceiros" className="border-y border-border bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <span className="section-kicker">Confiança</span>
        <h2 className="mt-4 text-3xl uppercase sm:text-4xl">Nossos parceiros</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Empresas, escolas, construtoras e instituições que contam com a FortGraf para materiais
          recorrentes, campanhas e projetos de comunicação visual em todo o Maranhão.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
          {partners.map((name) => (
            <div
              key={name}
              className="grid h-24 place-items-center bg-card px-4 transition-transform hover:scale-[1.03] text-center text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
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
    <section id="orcamento" className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-kicker">Orçamento personalizado</span>
          <h2 className="mt-4 text-3xl uppercase leading-tight sm:text-4xl">
            Faça seu orçamento agora
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Para grandes volumes, projetos especiais ou artes que precisam de análise técnica, envie os
            detalhes e o arquivo. Nossa equipe responde com prazo e valor fechado.
          </p>
          <p className="mt-6 inline-block bg-cmyk-y px-4 py-2 font-display text-sm uppercase text-black">
            Ganhe 10% de desconto no seu orçamento
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Pedidos padronizados?{" "}
            <Link to="/produtos" className="font-bold text-primary hover:underline">
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
          className="border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="q-name" className="text-xs font-bold uppercase tracking-widest">
                Nome
              </label>
              <input
                id="q-name"
                name="name"
                required
                maxLength={100}
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="q-email" className="text-xs font-bold uppercase tracking-widest">
                E-mail
              </label>
              <input
                id="q-email"
                name="email"
                type="email"
                required
                maxLength={255}
                className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="q-phone" className="text-xs font-bold uppercase tracking-widest">
              Telefone / WhatsApp
            </label>
            <input
              id="q-phone"
              name="phone"
              type="tel"
              required
              maxLength={20}
              placeholder="(98) 90000-0000"
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <div className="mt-5">
            <span className="text-xs font-bold uppercase tracking-widest">Anexo de arquivo</span>
            <label
              htmlFor="q-file"
              className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-input px-4 py-4 text-sm text-muted-foreground hover:border-primary"
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
            <label htmlFor="q-message" className="text-xs font-bold uppercase tracking-widest">
              Mensagem
            </label>
            <textarea
              id="q-message"
              name="message"
              rows={4}
              maxLength={1000}
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="press mt-7 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Enviar <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
