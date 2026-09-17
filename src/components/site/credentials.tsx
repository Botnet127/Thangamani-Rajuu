import { certifications, education } from "@/data/resume";

export function Credentials() {
  return (
    <section id="credentials" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-label text-subtle">Education</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">School</h2>
          <div className="mt-8 rounded-xl bg-card p-5 shadow-border sm:p-6">
            <p className="text-sm text-muted-foreground">{education.year}</p>
            <h3 className="mt-2 font-display text-2xl leading-snug">{education.degree}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{education.school}</p>
            <p className="mt-4 text-sm text-accent">{education.detail}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-label text-subtle">
            Certifications
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">Credentials</h2>
          <ul className="mt-8 divide-y divide-border rounded-xl bg-card shadow-border">
            {certifications.map((cert) => (
              <li key={cert} className="px-5 py-4 text-sm text-foreground sm:px-6 sm:text-base">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
