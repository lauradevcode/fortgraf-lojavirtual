/** Marcas de corte (cruzes finas) nos 4 vértices, como numa prova de impressão. */
export function CropMarks({ className = "" }: { className?: string }) {
  const cross = (
    <span className="relative block h-2 w-2">
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink-k" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink-k" />
    </span>
  );
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      <span className="absolute left-1 top-1">{cross}</span>
      <span className="absolute right-1 top-1">{cross}</span>
      <span className="absolute bottom-1 left-1">{cross}</span>
      <span className="absolute bottom-1 right-1">{cross}</span>
    </span>
  );
}

/** Barra de registro CMYK. */
export function InkBar({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`grid grid-cols-4 ${className}`}>
      <span className="h-1 bg-ink-c" />
      <span className="h-1 bg-ink-m" />
      <span className="h-1 bg-ink-y" />
      <span className="h-1 bg-ink-k" />
    </span>
  );
}
