import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-label text-subtle">Experience</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Where the work happened
        </h2>

        <ol className="mt-12 space-y-4">
          {experience.map((job, index) => (
            <ExperienceCard key={job.company} job={job} defaultOpen={index === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceCard({
  job,
  defaultOpen,
}: {
  job: (typeof experience)[number];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const headingId = `${job.company.replace(/\s+/g, "-").toLowerCase()}-heading`;

  return (
    <li className="rounded-xl bg-card shadow-border">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 rounded-xl p-5 text-left sm:p-6"
        aria-expanded={open}
        aria-controls={`${headingId}-panel`}
        onClick={() => setOpen((v) => !v)}
      >
        <div>
          <p className="text-sm text-muted-foreground">
            {job.start} — {job.end}
            {job.location ? ` · ${job.location}` : ""}
          </p>
          <h3 id={headingId} className="mt-1 font-display text-2xl leading-snug">
            {job.role}
          </h3>
          <p className="mt-1 text-sm text-accent">{job.company}</p>
        </div>
        <span
          className={cn(
            "mt-1 flex size-10 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-transform duration-200 ease-[var(--ease-smooth-out)]",
            open && "rotate-180",
          )}
        >
          <ChevronDown className="size-5" />
        </span>
      </button>
      <div
        id={`${headingId}-panel`}
        hidden={!open}
        className="border-t border-border px-5 pb-6 pt-4 sm:px-6"
      >
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {job.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
