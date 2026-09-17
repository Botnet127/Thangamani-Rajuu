import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Coverage } from "@/components/site/coverage";
import { Credentials } from "@/components/site/credentials";
import { Experience } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { Skills } from "@/components/site/skills";
import { Stats } from "@/components/site/stats";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <section className="relative h-36 overflow-hidden border-y border-border sm:h-48" aria-hidden>
          <img
            src="/anime-city.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/50" />
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Coverage />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "bg-card text-foreground shadow-border",
          },
        }}
      />
    </div>
  );
}
