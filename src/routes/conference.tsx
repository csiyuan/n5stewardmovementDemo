import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import conferenceImg from "@/assets/conference.jpg";
import { ArrowUpRight, Calendar, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/conference")({
  component: ConferencePage,
  head: () => ({
    meta: [
      { title: "Conference 2025 — N5 Stewardship Movement" },
      { name: "description", content: "Two days of teaching, worship and community around biblical financial stewardship. Singapore, August 2025." },
      { property: "og:image", content: conferenceImg },
    ],
  }),
});

function ConferencePage() {
  return (
    <PageShell navOverlay>
      {/* Hero */}
      <section className="relative min-h-[90svh] flex items-end overflow-hidden bg-ink">
        <img src={conferenceImg} alt="Conference auditorium" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative container-x pb-24 pt-40 text-ivory grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8 space-y-6 animate-rise">
            <div className="flex items-center gap-3">
              <span className="gold-rule bg-gold" />
              <span className="eyebrow text-ivory/70">N5 Conference 2025 · Singapore</span>
            </div>
            <h1 className="serif-display text-5xl md:text-7xl lg:text-[5.5rem] text-ivory">
              The faithful <em className="italic text-gold font-normal">steward</em>.
            </h1>
            <p className="max-w-xl text-lg text-ivory/80">
              Two days. Thousands of believers. One conviction — that the Church can lead the way
              in stewarding money for kingdom impact.
            </p>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-ivory/80">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-gold" /> 22–23 August 2025</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Singapore</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-gold" /> 5,000+ stewards</span>
            </div>
            <div className="pt-4">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium hover:bg-ivory transition-colors">
                Register interest <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-28">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow text-gold">Programme</span>
            <h2 className="serif-display text-4xl md:text-5xl mt-3">Two days, shaped for the steward.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 divide-y divide-border border-y border-border">
            {[
              ["Day 01", "The Heart of the Steward", "Plenary teaching on the biblical theology of money, opened by worship and testimony."],
              ["Day 01", "Stewardship Tracks", "Choose your track: Family Finance · Church Leaders · Marketplace · Investing for Eternity."],
              ["Day 02", "The Generous Life", "Practical workshops on giving, debt, savings, and legacy decisions."],
              ["Day 02", "Sent Out", "Closing gathering — commissioning the movement back to homes, churches and cities."],
            ].map(([d, t, desc]) => (
              <div key={t} className="py-8 grid grid-cols-12 gap-4">
                <div className="col-span-3 eyebrow text-gold">{d}</div>
                <div className="col-span-9">
                  <h3 className="serif-display text-2xl mb-2">{t}</h3>
                  <p className="text-muted-foreground">{desc}</p>
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
          <h2 className="serif-display text-4xl md:text-6xl text-ivory">Come and be equipped.</h2>
          <p className="text-ivory/75 text-lg">
            Tickets open February 2025. Register your interest to be the first to know.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium hover:bg-ivory transition-colors">
            Register interest <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
