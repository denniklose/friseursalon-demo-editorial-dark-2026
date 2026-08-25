import type { ReactNode } from "react";

export default function BentoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`bento-card ${className}`.trim()}>{children}</article>;
}
