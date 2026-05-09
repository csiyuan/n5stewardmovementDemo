import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowUpRight } from "lucide-react";

export interface AudiencePageProps {
  eyebrow: string;
  title: string;
  italicWord: string;
  intro: string;
  image: string;
  imageAlt: string;
  promises: { title: string; desc: string }[];
  journey: { step: string; title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
}

export function AudiencePage(p: AudiencePageProps) {
  return (
    <PageShell navOverlay>
      <section className="relative min-h-[85svh] flex items-end overflow-hidden bg-ink">
        <img src={p.image} alt={p.imageAlt} width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative container-x pb-24 pt-40 text-ivory grid md:grid-cols-12 gap-10">
          <div className="md:col-span-9 space-y-6 animate-rise">
            <div className="flex items-center gap-3">
              <span className="gold-rule bg-gold" />
              <span className="eyebrow text-ivory/70">{p.eyebrow}</span>
            </div>
            <h1 className="serif-display text-5xl md:text-7xl text-ivory">
              {p.title.split(p.italicWord).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <em className="italic text-gold font-normal">{p.italicWord}</em>}
                </span>
              ))}
            </h1>
            <p className="max-w-xl text-lg text-ivory/80 leading-relaxed">{p.intro}</p>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-5">
              <span className="eyebrow text-gold">What you'll find</span>
              <h2 className="serif-display text-4xl md:text-5xl mt-3">Built for your context.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {p.promises.map((pr, i) => (
              <div key={pr.title} className="bg-secondary p-10">
                <span className="serif-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="serif-display text-2xl mt-3 mb-3">{pr.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-28">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Your pathway</span>
            <h2 className="serif-display text-4xl md:text-5xl mt-3">A clear next step.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 divide-y divide-border border-y border-border">
            {p.journey.map((j) => (
              <div key={j.title} className="py-8 grid grid-cols-12 gap-4">
                <div className="col-span-2 serif-display text-3xl text-gold">{j.step}</div>
                <div className="col-span-10">
                  <h3 className="serif-display text-2xl mb-2">{j.title}</h3>
                  <p className="text-muted-foreground">{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-ivory">
        <div className="container-x text-center max-w-3xl mx-auto space-y-6">
          <span className="gold-rule bg-gold inline-block" />
          <h2 className="serif-display text-4xl md:text-6xl text-ivory">{p.ctaTitle}</h2>
          <p className="text-ivory/75 text-lg">{p.ctaDesc}</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium hover:bg-ivory transition-colors">
            Get started <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
