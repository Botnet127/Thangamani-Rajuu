import { useState } from "react";
import { coverage } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Coverage() {
  const [selected, setSelected] = useState<(typeof coverage)[number]>(coverage[0]);

  return (
    <section id="coverage" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-label text-subtle">
          MITRE ATT&CK
        </p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Detection coverage</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Techniques I have actually triaged, hunted, or written detections for — select a cell.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {coverage.map((tech) => {
              const on = selected.id === tech.id;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelected(tech)}
                  className={cn(
                    "min-h-20 rounded-md p-3 text-left shadow-border transition-[background-color,box-shadow] duration-150",
                    on
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:shadow-border-hover",
                  )}
                >
                  <span
                    className={cn(
                      "block text-xs",
                      on ? "text-primary-foreground/70" : "text-subtle",
                    )}
                  >
                    {tech.id}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug">{tech.name}</span>
                </button>
              );
            })}
          </div>

          <aside className="rounded-xl bg-card p-5 shadow-border sm:p-6">
            <p className="text-xs font-medium uppercase tracking-label text-subtle">
              {selected.id} · {selected.tactic}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight">{selected.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {selected.note}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
