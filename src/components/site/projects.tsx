import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-label text-subtle">Projects</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Labs and playbooks</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Detection engineering, phishing labs, and IR workflows built to shorten time-to-triage.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl bg-card p-5 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover sm:p-6"
            >
              <h3 className="font-display text-2xl leading-snug">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full px-2.5 py-1 text-xs text-muted-foreground shadow-border"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
