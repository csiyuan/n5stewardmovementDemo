import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-congregation.jpg";

import groupImg from "@/assets/group-table.jpg";
import leadersImg from "@/assets/leaders.jpg";
import proImg from "@/assets/professional.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "N5 Stewardship Movement — Steward money God's way" },
      { name: "description", content: "A movement equipping the Body of Christ across Asia to align finances with biblical wisdom for lasting Kingdom impact." },
      { property: "og:title", content: "N5 Stewardship Movement — Asia" },
      { property: "og:description", content: "Steward money God's way, together in community." },
      { property: "og:image", content: heroImg },
    ],
  }),
});

function Marquee() {
  const words = ["Wisdom", "Stewardship", "Generosity", "Community", "Kingdom Impact", "Faithfulness"];
  const row = [...words, ...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-6">
      <div className="flex gap-16 whitespace-nowrap animate-marquee">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-16 font-display text-3xl md:text-4xl text-ink/80">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <PageShell navOverlay>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[580px] flex flex-col justify-center overflow-hidden bg-ink pt-24 pb-12 md:pt-28 md:pb-20">
        {/* Immersive Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={heroImg}
            alt="Congregation worshipping at N5 Stewardship gathering"
            className="h-full w-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
        
        {/* Central Content Column */}
        <div className="relative container-x w-full">
          <div className="flex flex-col gap-6 md:gap-10 animate-rise">
            
            {/* Top Content Block - Text remains focused */}
            <div className="space-y-4 md:space-y-6 max-w-4xl">
              {/* Subtitle / Eyebrow */}
              <div className="flex items-center gap-4 text-ivory/80">
                <span className="w-8 h-px bg-gold shrink-0" />
                <span className="eyebrow text-ivory/70 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase">
                  A movement across Asia
                </span>
              </div>

              {/* Headline */}
              <h1 className="serif-display text-[clamp(2rem,6.8vw,4.8rem)] leading-[1.05] text-ivory drop-shadow-2xl">
                Steward your finances with <em className="text-gold not-italic font-normal italic">biblical wisdom</em>
                <br className="hidden md:block" /> for lasting Kingdom impact.
              </h1>

              {/* Description */}
              <p className="max-w-xl text-[clamp(0.9rem,1.8vw,1.1rem)] text-ivory/80 leading-relaxed font-light">
                Align your finances with biblical wisdom. Walk with believers committed
                to faithful stewardship, generous living, and lasting kingdom impact.
              </p>
            </div>

            {/* Action Area - Buttons & Scripture aligned after 785px */}
            <div className="grid gap-8 md:grid-cols-12 md:items-end pt-4 w-full">
              {/* Buttons Block */}
              <div className="md:col-span-7 flex flex-wrap items-center gap-6 md:gap-8">
                <Link
                  to="/learn"
                  className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-ivory transition-all duration-500 shadow-2xl"
                >
                  Start today
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-ivory/90 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:text-gold transition-colors group"
                >
                  Our story
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Scripture Block - Aligned to far right of container-x */}
              <div className="md:col-span-5 md:justify-self-end md:text-right md:border-r md:border-l-0 border-l border-gold/30 md:pr-6 md:pl-0 pl-8 py-1.5 [animation-delay:400ms] max-w-sm">
                <p className="text-ivory/50 text-[clamp(0.7rem,1.2vw,0.85rem)] leading-relaxed font-display italic">
                  "Each of you should use whatever gift you have received to serve others,
                  as faithful stewards of God's grace."
                </p>
                <span className="block mt-2 not-italic font-sans text-[clamp(0.5rem,0.8vw,0.6rem)] tracking-[0.3em] uppercase text-gold font-bold">
                  — 1 PETER 4:10
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* JOIN THE MOVEMENT */}
      <section className="py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="gold-rule" />
                <span className="eyebrow">Three pathways</span>
              </div>
              <h2 className="serif-display text-4xl md:text-5xl">
                Join the <em className="italic text-gold font-normal">movement</em>.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you are walking the journey personally, leading a community,
                or serving clients professionally — there is a place for you in N5.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {pillars.map((p, i) => (
              <Link
                key={p.to}
                to={p.to}
                className="group bg-background p-10 hover-lift relative"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8 bg-secondary">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="eyebrow text-gold">0{i + 1}</span>
                <h3 className="serif-display text-3xl mt-3 mb-4 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm tracking-wide text-ink">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}

const pillars = [
  {
    to: "/church-community" as const,
    img: groupImg,
    title: "Individuals, Families & Groups",
    desc: "Align your finances with biblical principles. Grow in wisdom and generosity alongside fellow believers.",
  },
  {
    to: "/faith-based-leaders" as const,
    img: leadersImg,
    title: "Faith-Based Leaders",
    desc: "Equip your church or organisation with practical, biblical stewardship teaching that transforms lives.",
  },
  {
    to: "/financial-professionals" as const,
    img: proImg,
    title: "Finance Professionals",
    desc: "Integrate biblical stewardship into your practice and join a community of faith-aligned advisors.",
  },
];

const stats = [
  { value: "5K+", label: "Stewards equipped" },
  { value: "120+", label: "Partner churches" },
  { value: "12", label: "Asian nations" },
];
