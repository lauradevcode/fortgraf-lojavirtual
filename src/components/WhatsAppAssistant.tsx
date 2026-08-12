import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PHONE = "559832227139";

type Msg = { from: "bot" | "user"; text: string };

type Step = {
  id: string;
  question: string;
  options: string[];
};

const steps: Step[] = [
  {
    id: "servico",
    question: "Qual serviço você precisa?",
    options: [
      "Impressão digital / offset",
      "Comunicação visual",
      "Fachada / letra caixa",
      "Materiais de campanha",
      "Comprar na loja online",
    ],
  },
  {
    id: "prazo",
    question: "Para quando você precisa?",
    options: ["Urgente (até 2 dias)", "Nesta semana", "Ainda estou planejando"],
  },
  {
    id: "quantidade",
    question: "Tem ideia da quantidade ou tamanho?",
    options: ["Pequena tiragem", "Grande volume", "Preciso de orientação"],
  },
];

export function WhatsAppAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Olá! Sou a assistente virtual da FortGraf. 👋" },
    { from: "bot", text: steps[0]!.question },
  ]);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [typing, setTyping] = useState(false);
  const [freeText, setFreeText] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const done = stepIndex >= steps.length;

  function pushBot(text: string, delay = 550) {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text }]);
    }, delay);
  }

  function answer(option: string) {
    const step = steps[stepIndex]!;
    setMessages((m) => [...m, { from: "user", text: option }]);
    setAnswers((a) => ({ ...a, [step.id]: option }));
    const next = stepIndex + 1;
    setStepIndex(next);
    if (next < steps.length) {
      pushBot(steps[next]!.question);
    } else {
      pushBot(
        "Perfeito! Já tenho o essencial. Vou te levar para o WhatsApp com o resumo pronto para nossa equipe finalizar o atendimento.",
        700,
      );
    }
  }

  function whatsappUrl(extra?: string) {
    const lines = [
      "Olá, FortGraf! Vim pelo site.",
      answers["servico"] ? `Serviço: ${answers["servico"]}` : "",
      answers["prazo"] ? `Prazo: ${answers["prazo"]}` : "",
      answers["quantidade"] ? `Volume: ${answers["quantidade"]}` : "",
      extra ? `Detalhes: ${extra}` : "",
    ].filter(Boolean);
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  function sendFree() {
    const text = freeText.trim();
    if (!text) return;
    setFreeText("");
    setMessages((m) => [...m, { from: "user", text }]);
    window.open(whatsappUrl(text), "_blank", "noopener");
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar chat" : "Falar no WhatsApp"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg shadow-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        {open ? (
          <X className="relative h-6 w-6 text-white" />
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden className="relative h-7 w-7 fill-white">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.24-4.27c0-4.47 3.65-8.11 8.15-8.11 4.5 0 8.13 3.64 8.13 8.11 0 4.48-3.63 8.11-8.13 8.11Zm4.47-6.07c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.25-.02-.38.1-.5.11-.11.24-.28.36-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.19.86 2.33.98 2.49.12.16 1.7 2.7 4.13 3.68 2.02.82 2.43.66 2.87.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-4 z-[60] flex max-h-[70vh] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-md border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-navy px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-5 w-5 text-white" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold uppercase tracking-wide text-white">
                  Atendimento FortGraf
                </p>
                <p className="text-[0.7rem] text-white/70">Assistente virtual · online</p>
              </div>
            </div>

            <div ref={bodyRef} className="flex-1 space-y-3 overflow-y-auto bg-muted/40 p-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={m.from === "bot" ? "flex" : "flex justify-end"}
                >
                  <p
                    className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-relaxed ${
                      m.from === "bot"
                        ? "bg-card text-foreground shadow-sm"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {m.text}
                  </p>
                </motion.div>
              ))}
              {typing && (
                <div className="flex gap-1 px-1">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      className="h-2 w-2 rounded-full bg-muted-foreground"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-border bg-card p-3">
              {!done && !typing && (
                <div className="flex flex-wrap gap-2">
                  {steps[stepIndex]!.options.map((o) => (
                    <button
                      key={o}
                      type="button"
                      onClick={() => answer(o)}
                      className="rounded-full border border-primary/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              )}

              {done && (
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  Continuar no WhatsApp <Send className="h-4 w-4" />
                </a>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendFree();
                }}
                className="mt-3 flex items-center gap-2"
              >
                <input
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  maxLength={300}
                  placeholder="Escreva sua dúvida..."
                  className="min-w-0 flex-1 border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  aria-label="Enviar para o WhatsApp"
                  className="grid h-9 w-9 shrink-0 place-items-center bg-primary text-primary-foreground transition-colors hover:bg-primary-dark"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
