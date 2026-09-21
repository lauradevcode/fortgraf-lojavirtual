import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

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
            Gráfica JD — Serviços Gráficos e Impressão Digital em Brazlândia, Brasília — DF.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-paper/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-y" />
              <span>Quadra 33, Lote 15, Taguacenter — Brazlândia, Brasília — DF</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-ink-c" />
              <span>Atendimento de segunda a sexta</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-m" />
              <a href="tel:+5561984164287" className="font-mono hover:text-ink-y">
                (61) 98416-4287
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-paper" />
              <a href="mailto:graficajd01@gmail.com" className="font-mono hover:text-ink-y">
                graficajd01@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-7 flex gap-3">
            <a
              href="https://www.instagram.com/grafica_jd01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Gráfica JD"
              className="grid h-10 w-10 place-items-center border border-paper/30 transition-colors hover:border-ink-red hover:bg-ink-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border border-paper/20">
          <iframe
            title="Localização da Gráfica JD em Brazlândia, Brasília"
            src="https://www.google.com/maps?q=Quadra+33,+Lote+15,+Taguacenter,+Brazl%C3%A2ndia,+Bras%C3%ADlia,+DF&output=embed"
            loading="lazy"
            className="h-72 w-full lg:h-full"
          />
        </div>
      </div>

      <div className="border-t border-paper/20 px-4 py-5 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-paper/50 sm:px-6">
        © {new Date().getFullYear()} Gráfica JD — Serviços Gráficos e Impressão Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
