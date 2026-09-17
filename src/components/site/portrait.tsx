import { profile } from "@/data/resume";

export function Portrait() {
  return (
    <figure className="rounded-xl bg-card p-2 shadow-border">
      <div className="portrait-stage relative overflow-hidden rounded-lg">
        <img
          src={profile.portraitHref}
          alt={`Portrait of ${profile.name}`}
          width={720}
          height={900}
          className="portrait-image aspect-portrait w-full object-cover object-top"
        />
        <span className="portrait-scan" aria-hidden />
        <span className="portrait-hud" aria-hidden />
        <span className="portrait-radar" aria-hidden />
      </div>
      <figcaption className="flex items-center justify-between px-2 py-2.5">
        <span className="text-xs font-medium uppercase tracking-label text-subtle">
          Cam 01 · SOC
        </span>
        <span className="flex items-center gap-2 text-xs text-ok">
          <span className="live-dot" aria-hidden />
          Live
        </span>
      </figcaption>
    </figure>
  );
}
