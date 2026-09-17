import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Portrait } from "@/components/site/portrait";
import { QuoteRotator } from "@/components/site/quote-rotator";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-anime" />
        <div className="hero-anime-veil" />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-start lg:gap-x-12 lg:py-28">
        <div className="flex min-w-0 flex-col gap-8 max-lg:contents lg:flex-1">
          <div className="hero-stagger max-lg:order-1">
            <p className="text-xs font-medium uppercase tracking-label text-muted-foreground">
              SOC Tier 1 & 2 · {profile.location}
            </p>
            <h1 className="mt-5 font-display text-hero leading-none tracking-tight text-foreground">
              {profile.firstName}
              <br />
              <span className="italic">{profile.lastName}</span>
            </h1>
            <QuoteRotator />
          </div>

          <div className="flex flex-col gap-8 max-lg:order-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="ok">{profile.availability}</Badge>
              <Badge variant="outline">{profile.relocation}</Badge>
              <Badge variant="accent">{profile.title}</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">
                  Start a conversation
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={profile.resumeHref} download>
                  <Download />
                  Download résumé
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-lg:contents lg:w-72 lg:shrink-0">
          <div className="flex justify-center max-lg:order-2 lg:justify-end">
            <div className="w-full max-w-52">
              <Portrait />
            </div>
          </div>
          <aside className="rounded-xl bg-card p-5 shadow-border max-lg:order-4 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-label text-subtle">Now</p>
            <p className="mt-3 font-display text-2xl leading-snug text-foreground">
              Security Analyst at Verizon
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              May 2023 — Present · Chennai. Monitoring Splunk, QRadar, Google SecOps,
              and CrowdStrike in a 24×7 rotating SOC.
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Based</dt>
                <dd className="flex items-center gap-1.5 text-right text-foreground">
                  <MapPin className="size-3.5 text-subtle" />
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Target</dt>
                <dd className="text-right text-foreground">Dubai, UAE</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                <dt className="text-muted-foreground">Notice</dt>
                <dd className="text-right text-ok">Immediate</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
