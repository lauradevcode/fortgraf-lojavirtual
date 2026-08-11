export function Logo({
  className = "",
  inverted = false,
  size = "md",
}: {
  className?: string;
  inverted?: boolean;
  size?: "md" | "lg";
}) {
  const wordSize = size === "lg" ? "text-5xl sm:text-6xl" : "text-2xl";
  const markSize = size === "lg" ? "h-11 w-11" : "h-6 w-6";
  const subSize = size === "lg" ? "text-[0.7rem] tracking-[0.42em]" : "text-[0.45rem] tracking-[0.3em]";

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-end gap-2">
        <span
          className={`font-display leading-none ${wordSize} ${inverted ? "text-white" : "text-foreground"}`}
        >
          FORT
        </span>
        <span className={`grid grid-cols-2 gap-[2px] ${markSize} shrink-0`}>
          <span className="bg-cmyk-c" />
          <span className="bg-cmyk-m" />
          <span className="bg-cmyk-y" />
          <span className={inverted ? "bg-white" : "bg-foreground"} />
        </span>
      </div>
      <span
        className={`mt-1 font-semibold uppercase ${subSize} ${
          inverted ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        Com. Gráfica e Editora
      </span>
    </div>
  );
}
