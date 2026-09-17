import { stats } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section aria-label="Impact" className="border-y border-border">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "px-4 py-8 sm:px-6",
              i > 0 && "border-t border-border md:border-t-0 md:border-l",
            )}
          >
            <p className="font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
