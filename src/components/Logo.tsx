import logoAsset from "@/assets/grafica-jd-logo.png.asset.json";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  inverted?: boolean;
  size?: "md" | "lg";
}) {
  return (
    <img
      src={logoAsset.url}
      alt="Gráfica JD — Serviços Gráficos"
      width={225}
      height={225}
      className={`${size === "lg" ? "h-44 w-44 sm:h-52 sm:w-52" : "h-16 w-16"} rounded-full object-contain ${className}`}
    />
  );
}
