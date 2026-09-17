import { useMemo, useState, type ReactNode } from "react";
import { skillGroups } from "@/data/resume";
import { cn } from "@/lib/utils";

const ALL = "all";

export function Skills() {
  const [active, setActive] = useState<string>(ALL);
  const groups = useMemo(
    () => (active === ALL ? skillGroups : skillGroups.filter((g) => g.id === active)),
    [active],
  );

  return (
    <section id="skills" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-label text-subtle">Stack</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Tools I live in</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            SIEM, EDR, intel, and lab tooling from 24×7 operations — not a slide deck.
          </p>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Skill categories"
        >
          <FilterChip selected={active === ALL} onClick={() => setActive(ALL)}>
            All
          </FilterChip>
          {skillGroups.map((group) => (
            <FilterChip
              key={group.id}
              selected={active === group.id}
              onClick={() => setActive(group.id)}
            >
              {group.label}
            </FilterChip>
          ))}
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.id} className="rounded-lg bg-card p-5 shadow-border">
              <h3 className="text-sm font-medium text-accent">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={cn(
        "h-10 shrink-0 rounded-full px-4 text-sm transition-colors duration-150",
        selected
          ? "bg-primary text-primary-foreground"
          : "bg-transparent text-muted-foreground shadow-border hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
