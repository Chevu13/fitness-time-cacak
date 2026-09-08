import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Blago kašnjenje u odnosu na susedne elemente (0–0.2). */
  delay?: number;
  /** Koliko element „doleti" odozdo, u pikselima. */
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
};

/**
 * Reveal na skrol bez JavaScripta — CSS scroll-driven animacija (`animation-timeline: view()`).
 * Ako pregledač to ne podržava, sadržaj je prosto odmah vidljiv, pa nikada ne može „nestati".
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: Tag = "div",
}: Props) {
  const style = {
    "--rd": `${Math.round(delay * 180)}%`,
    "--ry": `${y}px`,
  } as CSSProperties;

  return (
    <Tag className={className ? `reveal ${className}` : "reveal"} style={style}>
      {children}
    </Tag>
  );
}
