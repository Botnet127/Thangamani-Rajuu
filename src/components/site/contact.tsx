import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Copy, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/resume";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  async function copy(kind: "email" | "phone", value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      toast.success(kind === "email" ? "Email copied" : "Phone copied");
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      toast.error("Could not copy — select the text instead");
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !from.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    const subject = encodeURIComponent(`Role inquiry from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\n— ${name.trim()}\n${from.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client");
  }

  return (
    <section id="contact" className="section-pad scroll-mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-label text-subtle">Contact</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Available now for Dubai
          </h2>
          <p className="mt-4 text-muted-foreground">
            Immediate joiner. Open to relocation. If you have a SOC, detection, or IR seat,
            write directly — no intake form in between.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <CopyRow
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={<Mail className="size-4" />}
                copied={copied === "email"}
                onCopy={() => copy("email", profile.email)}
              />
            </li>
            <li>
              <CopyRow
                label="Phone"
                value={profile.phone}
                href={profile.phoneHref}
                icon={<Phone className="size-4" />}
                copied={copied === "phone"}
                onCopy={() => copy("phone", "+918072663268")}
              />
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-between rounded-lg bg-card px-4 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover"
              >
                <span className="text-sm text-muted-foreground">LinkedIn</span>
                <span className="text-sm text-foreground">{profile.linkedinLabel}</span>
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-card p-5 shadow-border sm:p-6"
          noValidate
        >
          <p className="font-display text-2xl">Send a note</p>
          <div className="mt-6 space-y-4">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                placeholder="Your name"
                suppressHydrationWarning
              />
            </Field>
            <Field label="Email" htmlFor="from">
              <input
                id="from"
                name="from"
                type="email"
                autoComplete="email"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className={fieldClass}
                placeholder="you@company.com"
                suppressHydrationWarning
              />
            </Field>
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} min-h-32 resize-y py-3`}
                placeholder="Role, team, and timing"
                suppressHydrationWarning
              />
            </Field>
          </div>
          <Button type="submit" className="mt-6 w-full sm:w-auto">
            Open email draft
          </Button>
        </form>
      </div>
    </section>
  );
}

const fieldClass =
  "h-11 w-full rounded-md bg-muted px-3 text-sm text-foreground outline-none ring-offset-background placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-label text-subtle">
        {label}
      </span>
      {children}
    </label>
  );
}

function CopyRow({
  label,
  value,
  href,
  icon,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="flex min-h-14 items-center gap-2 rounded-lg bg-card px-3 shadow-border">
      <a href={href} className="flex min-w-0 flex-1 items-center gap-3 py-3 text-sm">
        <span className="text-subtle">{icon}</span>
        <span className="text-muted-foreground">{label}</span>
        <span className="truncate text-foreground">{value}</span>
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="flex size-11 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="size-4 text-ok" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
