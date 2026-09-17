import { profile } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-label text-subtle">About</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Four years inside the queue
            </h2>
          </div>
          <figure className="max-w-72 overflow-hidden rounded-xl bg-card p-2 shadow-border">
            <img
              src="/anime-operator.jpg"
              alt="Anime illustration of a cybersecurity operator at a SOC desk"
              width={600}
              height={800}
              className="portrait-image aspect-art w-full rounded-lg object-cover object-top"
            />
            <figcaption className="px-2 py-2.5 text-xs uppercase tracking-label text-subtle">
              Night shift · illustrated
            </figcaption>
          </figure>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>{profile.summary}</p>
          <p>
            Grounded in Windows and Linux fundamentals, TCP/IP, DNS, and HTTP/S, with
            working familiarity across Defender, SentinelOne, and Trend Micro. I write
            tickets with real timelines, hand over cleanly across 24×7 shifts, and
            stay ready to relocate to Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}
