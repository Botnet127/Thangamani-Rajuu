import { useEffect, useState } from "react";
import { quotes } from "@/data/resume";

export function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="quote-slot mt-6 max-w-xl font-display text-xl italic leading-snug text-muted-foreground sm:text-2xl">
      <span key={index} className="quote-line">
        {quotes[index]}
      </span>
    </p>
  );
}
