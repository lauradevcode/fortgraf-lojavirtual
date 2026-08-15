import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { InkBar } from "@/components/PrintMarks";

const label = "font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/60";

export function SiteFooter() {
  return (
    <footer className="bg-ink-k text-paper">
      <InkBar className="w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-block bg-paper px-5 py-4">
            <Logo />
          </div>
          <p className={`mt-6 ${label}`}>Dados institucionais</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
            FortGraf — Com. Gráfica e Editora Ltda. Impressão offset, digital e comunicação visual em
            São Luís do Maranhão.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-paper/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-y" />
              <span>Rua da Estrela, 245 — Centro, São Luís — MA, 65010-000</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ink-c" />
              <span>Segunda a sexta, 8h às 18h · Sábado, 8h às 12h</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-m" />
              <a href="tel:+559832227139" className="font-mono hover:text-ink-y">
                (98) 3222-7139
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-paper" />
              <a href="mailto:contato@fortgraf.ind.br" className="font-mono hover:text-ink-y">
                contato@fortgraf.ind.br
              </a>
            </li>
          </ul>

          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social FortGraf"
                className="grid h-10 w-10 place-items-center border border-paper/30 transition-colors hover:border-ink-red hover:bg-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border border-paper/20">
          <iframe
            title="Localização da FortGraf em São Luís"
            src="https://www.google.com/maps?q=Centro,+S%C3%A3o+Lu%C3%ADs+-+MA&output=embed"
            loading="lazy"
            className="h-72 w-full lg:h-full"
          />
        </div>
      </div>

      <div className="border-t border-paper/20 px-4 py-5 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-paper/50 sm:px-6">
        © {new Date().getFullYear()} FortGraf — Com. Gráfica e Editora. Todos os direitos reservados.
      </div>
    </footer>
  );
}
