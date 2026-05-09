import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import groupImg from "@/assets/group-table.jpg";
import leadersImg from "@/assets/leaders.jpg";
import proImg from "@/assets/professional.jpg";
import conferenceImg from "@/assets/conference.jpg";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  Church,
  ExternalLink,
  HandCoins,
  Heart,
  Lightbulb,
  MapPin,
  MessageCircle,
  Plus,
  Minus,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/groups")({
  component: GroupsPage,
  head: () => ({
    meta: [
      { title: "Groups — N5 Stewardship Movement" },
      {
        name: "description",
        content:
          "Whether you're an individual, family, faith leader or finance professional — find your place in the N5 movement.",
      },
    ],
  }),
});

/* ─── Section nav tabs (sequence from image 5) ─────────── */
const sections = [
  { id: "individuals", label: "Individuals, Families & Groups" },
  { id: "faith-leaders", label: "Faith-Based Leaders" },
];

/* ─── Tab 1: Individuals data ──────────────────────────── */
const individualsAccordion = [
  {
    title: "Why We Exist",
    body: (
      <div className="space-y-4">
        <p>With over 2,300 verses on money, the Bible provides one of the most comprehensive frameworks for financial stewardship—yet it is often overlooked.</p>
        <p>The N5 Stewardship Movement bridges this gap by equipping believers with practical, biblical tools to steward resources with purpose and impact.</p>
        <p>Whether you’re starting out or seasoned in life, join a growing movement committed to transforming lives, strengthening families, and advancing God’s Kingdom through faithful stewardship.</p>
      </div>
    ),
  },
  {
    title: "What We're Based On",
    body: (
      <div className="space-y-4">
        <p>The N5 Stewardship Movement draws inspiration from Nehemiah 5, where financial injustice disrupted an entire society—yet the solutions were already within reach. What was needed were people who understood the responsibility of stewardship and were willing to bridge the gap between need and resources.</p>
        <p>It is a powerful reminder: how we manage money can either build people up—or quietly oppress them.</p>
      </div>
    ),
  },
  {
    title: "How We Equip",
    body: "Through social media, courses, conferences, and multi-platform resources, N5 brings biblical financial stewardship to life—making it accessible, practical, and purpose-driven, not just technical.",
  },
  {
    title: "Our Goal",
    body: (
      <div className="space-y-4">
        <p>At its core, N5 creates space for honest and practical conversations about money—how it shapes our identity, influences our decisions, and impacts our relationships and divine purpose.</p>
        <p>Above all, it is about knowing God, understanding ourselves, and stewarding our resources in a way that honors Him.</p>
      </div>
    ),
  },
];

const believersExpect = [
  { icon: Users, title: "Meeting Place", desc: "N5 creates safe spaces for believers to meet like-minded Christians, learn, reflect and discuss money matters together in community. Hebrews 10:24-25" },
  { icon: MessageCircle, title: "Real Issues Discussed", desc: "Real-world issues discussed with a biblical worldview allows individuals, couples, and small groups to align themselves to what the Word has made available. Hebrews 4:12" },
  { icon: Lightbulb, title: "Values Challenged", desc: "The transformative power of the Word guides each person to renew minds so that we do not continue to conform to the patterns of this world — offering counterculture thinking. Romans 12:2" },
  { icon: BookOpen, title: "Industry Resources", desc: "Tools, blueprints, and templates are made available together with professional expertise to help believers make wiser decisions and become better stewards. 1 Corinthians 4:2" },
];

/* ─── Tab 2: Faith-Based Leaders data ─────────────────── */
const faithAccordion = [
  {
    title: "Why N5? Issues Beneath The Surface",
    body: "N5 Stewards Asia was born out of a growing concern: that financial struggles quietly shape the lives, relationships and well being of many within the Church. Debt, loss of income, financial pressure and lifestyle expectations, wealth transfer to the next generation, are not just economic issues they are pastoral realities that affect families, marriages and communities.",
  },
  {
    title: "Why the Church Matters in This Conversation",
    body: (
      <div className="space-y-4">
        <p>Faith leaders often encounter the real-life effects of financial pressure long before anyone else. Conversations about provision, stress, generosity, family tension, and future uncertainty frequently surface in pastoral care.</p>
        <p>N5 recognises that financial stewardship is not merely a technical subject—it is a discipleship issue. How people handle money shapes their priorities, relationships, and long-term direction.</p>
        <p>That is why this movement is intentionally focused on equipping the Church first—creating space for honest, practical conversations about money that move beyond theory and address real life.</p>
      </div>
    ),
  },
  {
    title: "Who Is It For?",
    body: "Since its beginnings in 2021, the movement has grown into a grassroots network of believers, churches and marketplace professionals committed to learning and living out Scripture-rooted principles around money, debt, wealth and legacy.",
  },
  {
    title: "What Is The Biblical Foundation Behind N5?",
    body: (
      <div className="space-y-4">
        <p>The N5 movement is rooted in Nehemiah 5 a moment when the rebuilding of Jerusalem came to a halt because of debt, inequality and financial oppression among God's people. The crisis was not external; it was internal. Families were mortgaging their land, borrowing to survive, and even losing their children to debt slavery.</p>
        <p>Yet, the solutions were readily available within those very walls. Resources could be stewarded in such a way that the kingdom works could continue and advance!</p>
        <p>That passage became the inspiration for the N5 Stewardship Movement. Its central message is simple: when financial hardship and injustice exist within a community, the work of rebuilding lives can stall. N5 seeks to help restore a culture of stewardship so that individuals, families and churches can move forward together.</p>
      </div>
    ),
  },
  {
    title: "How Do We Equip?",
    body: "Through gatherings, teaching sessions and collaborative events, N5 focuses on topics such as debt, generosity, legacy, financial decision-making and healthy communication about money within families.",
  },
];

const faithPartnership = [
  "Rediscover values-driven stewardship and responsibility in everyday life",
  "Equip individuals and families with practical understanding around debt, planning and legacy",
  "Encourage conversations that strengthen financial resilience within the church body",
  "Build connections between spiritual formation and real-world financial decisions",
];

/* ─── Tab 3: Finance Professionals data ───────────────── */
const financeAccordion = [
  {
    title: "Why We Exist",
    body: "N5 Stewards Asia exists to raise a community of faith-aligned, competent, ethically grounded and kingdom-focused finance-based professionals who see their work as more than transactions and compensations.",
  },
  {
    title: "What We're Based On",
    body: "The Movement draws inspiration from Nehemiah 5, where financial injustice disrupted an entire society — a reminder that how money is managed can either build people up or quietly oppress them.",
  },
  {
    title: "How We Equip",
    body: "Through conferences, discipleship, training tracks and practitioner gatherings, N5 creates space for real conversations around biblical worldview on money, values and responsibility — not just technical planning.",
  },
  {
    title: "Our Goal",
    body: "The aim is to help finance-based professionals develop a stewardship mindset: one that integrates sound biblical financial principles with long-term impact on families, communities and nations.",
  },
];

const financeExpect = [
  { icon: Users, title: "Meeting Place", desc: "A convening point for financial planners who believe their role carries influence beyond plans and portfolios." },
  { icon: Briefcase, title: "Marketplace Community", desc: "The community brings together practitioners, industry leaders and marketplace voices — bridging people and workplaces." },
  { icon: MessageCircle, title: "Real Issues Discussed", desc: "We explore real-world dilemmas such as debt, inequality, stewardship, legacy planning, and ethical practices." },
  { icon: ShieldCheck, title: "Industry Expertise", desc: "Real-world practitioners with experience in banking, finance, insurance, and advisory work ensure conversations remain grounded." },
];

const financePrograms = [
  { title: "First Things First", items: ["Bi-weekly online meetings", "Sharing & applying the Word", "Breakout discussions and prayer", "Starting the work week together"] },
  { title: "Bi-Weekly / Monthly Ekklesia", items: ["Bi-weekly / monthly in company", "Mutual encouragement & edification", "Sharing in a safe space", "Praying for each other, company, industry"] },
  { title: "In-Person Meetings", items: ["Quarterly industry-level event / retreat", "Special industry-related topics", "Connecting with fellow Christian financial professionals", "Praying corporately as an industry"] },
  { title: "Annual Conference", items: ["Annual event", "Wide-ranging personal & industry-related topics", "Serving fellow financial professionals and Christians", "Aligning corporate destiny"] },
  { title: "Training & Certification", items: ["Ongoing training and certification", "Equipping professionals to serve in biblical financial stewardship", "Learning and growing with fellow Christian financial professionals"] },
];

const specialties = [
  { label: "Financial Counselling", img: proImg },
  { label: "Insurance Planning", img: proImg },
  { label: "Investment Planning", img: proImg },
  { label: "Faith-Based Investing", img: proImg },
  { label: "Estate Planning", img: proImg },
  { label: "Legacy Planning", img: proImg },
  { label: "Financial Education", img: proImg },
  { label: "Financial Coaching", img: proImg },
  { label: "Money Management", img: proImg },
  { label: "Retirement Planning", img: proImg },
];

const featuredProfessionals = [
  {
    name: "John Lim CFP CFSC",
    role: "Lead Stewardship Coach",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
    bio: "I invested the first 12 years of my career in financial services immediately after graduation. I...",
    specialties: ["Estate Planning", "Faith-Based"],
    address: "123 Shenton Way, #12-00 Kingdom Building, Singapore 123456",
    phone: "9123 4567",
    email: "godlyman@kingdomcome.com",
    website: "kingdomcome.com",
    canBook: true,
  },
  {
    name: "Sarah Lim",
    role: "Investment Strategist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
    bio: "Specializing in faith-based investing and wealth alignment, Sarah helps clients steward their capital.",
    specialties: ["Investing", "Faith-Based"],
    address: "88 Market Street, #05-01 CapitaSpring, Singapore 048948",
    phone: "9876 5432",
    email: "sarah.lim@n5stewards.com",
    website: "sarahsteward.com",
    canBook: true,
  },
  {
    name: "David Chen",
    role: "Debt Freedom Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    bio: "Practical guidance for individuals seeking to break free from debt and establish a solid foundation.",
    specialties: ["Debt Mgmt", "Counselling"],
    address: "10 Anson Road, #22-02 International Plaza, Singapore 079903",
    phone: "9234 5678",
    email: "david.chen@freedom.sg",
    website: "chencoaching.com",
    canBook: false,
  },
  {
    name: "Esther Low",
    role: "Retirement Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
    bio: "Guiding believers through retirement planning with a focus on long-term stewardship and purpose.",
    specialties: ["Retirement", "Education"],
    address: "15 Beach Road, #03-05 Singapore 189677",
    phone: "9345 6789",
    email: "esther.low@goldenyears.sg",
    website: "estherlow.com",
    canBook: true,
  },
  {
    name: "Michael Wong",
    role: "Insurance Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop",
    bio: "Expert advice on risk management and protection aligned with biblical principles of stewardship.",
    specialties: ["Insurance", "Protection"],
    address: "6 Temasek Boulevard, #12-01 Suntec Tower 4, Singapore 038986",
    phone: "9456 7890",
    email: "michael.wong@stewardship.sg",
    website: "wonginsurance.com",
    canBook: true,
  },
  {
    name: "Grace Tan",
    role: "Money Management Coach",
    image: "https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?w=800&auto=format&fit=crop",
    bio: "Helping young families build strong financial habits and align their spending with their values.",
    specialties: ["Budgeting", "Education"],
    address: "1 Raffles Place, #44-01 One Raffles Place, Singapore 048616",
    phone: "9567 8901",
    email: "grace.tan@values.sg",
    website: "gracetan.com",
    canBook: false,
  },
];

/* ─── Sticky section nav (same pattern as Learn) ──────── */
function SectionNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const NAV_OFFSET = 160; // Offset to trigger active state slightly before section hits top

    const getActiveSection = () => {
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_OFFSET) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", getActiveSection, { passive: true });
    getActiveSection();
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  return (
    <div className="sticky top-20 z-30 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-x">
        <nav className="flex gap-2 overflow-x-auto py-5" aria-label="Groups page sections">
          {sections.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(s.id);
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 140;
                    window.scrollTo({ top, behavior: "smooth" });
                    setActiveSection(s.id);
                  }
                }}
                className={`group relative flex-shrink-0 px-6 py-4 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 whitespace-nowrap ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                <span 
                  className={`absolute bottom-2 left-6 right-6 h-[2.5px] bg-gold rounded-full transition-all duration-300 origin-left ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`} 
                />
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* ─── Reusable accordion-style list ───────────────────── */
function AccordionList({ items, groupId = "accordion" }: { items: { title: string; body: React.ReactNode }[], groupId?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-y border-ink/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} className="border-b border-ink/15 last:border-b-0">
            <button 
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-secondary transition-colors group"
            >
              <span className="serif-display text-lg md:text-xl">{item.title}</span>
              <span className={`text-gold text-2xl leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 md:px-8 pb-8 pt-0 text-ink/80 leading-relaxed max-w-3xl font-medium">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── 4-column feature grid ───────────────────────────── */
function FeatureGrid({ items, cardBg = "bg-background" }: { items: { icon: typeof Users; title: string; desc: string }[], cardBg?: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={cn(
            "group/card border border-border p-8 shadow-sm hover:border-gold/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
            cardBg
          )}
        >
          <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark mb-6 group-hover/card:scale-110 transition-transform duration-500">
            <item.icon className="h-6 w-6" strokeWidth={2} />
          </div>
          <h4 className="serif-display text-xl mb-3 text-ink">{item.title}</h4>
          <p className="text-sm text-ink/70 leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
function GroupsPage() {
  const [openIndividuals, setOpenIndividuals] = useState<number>(-1);
  const [openFaith, setOpenFaith] = useState<number>(-1);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Groups"
        title="Stewardship is best lived together."
        intro="Whether you're an individual, family, faith leader or finance professional — find your place in the N5 movement and walk the stewardship journey in community."
      />

      <SectionNav />

      {/* ══════════════════════════════════════════════════════
          1. INDIVIDUALS, FAMILIES & GROUPS
      ══════════════════════════════════════════════════════ */}
      <section id="individuals" className="bg-white scroll-mt-28 border-t border-ink/15">
        {/* Part 01 / Header */}
        <div className="relative bg-ink text-ivory py-24 overflow-hidden border-b border-gold/20">
          <div className="absolute inset-0 opacity-10">
            <img src={groupImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container-x">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <span className="eyebrow text-gold block mb-4 uppercase tracking-[0.3em]">Part 01 / Individuals</span>
                <h2 className="serif-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.05]">
                  Individuals, Families <br />
                  <span className="italic text-gold">& Groups.</span>
                </h2>
                <p className="text-xl text-ivory/80 max-w-xl leading-relaxed font-light">
                  Align your faith with finance. Learn biblical wisdom to steward your resources with purpose and honor God.
                </p>
                <div className="mt-10">
                  <a href="https://n5stewardsasia.squarespace.com/church-community" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gold text-ink px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-ivory transition-all duration-300">
                    Learn more <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 hidden md:block">
                <div className="aspect-[4/5] bg-gold/5 border border-gold/20 rounded-sm relative p-4">
                  <img src={groupImg} alt="Groups" className="w-full h-full object-cover rounded-sm shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 1: Why partner (FAQ Style) */}
        <div className="py-24 bg-white">
          <div className="container-x">
            <div className="grid lg:grid-cols-12 gap-20 items-start">
              {/* Left Column: Title & CTA */}
              <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-40">
                <div className="space-y-4">
                  <h3 className="serif-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
                    Why partner <br />
                    <span className="italic text-gold">with N5.</span>
                  </h3>
                  <p className="text-ink/60 leading-relaxed font-light">
                    Join a movement committed to bridging the gap between biblical truth and financial stewardship.
                  </p>
                </div>
                
                {/* CTA Box */}
                <div className="bg-secondary/50 border border-gold/10 p-10 rounded-sm space-y-6">
                  <h4 className="serif-display text-2xl text-ink">Ready to start?</h4>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    Begin your journey with our foundational stewardship course today.
                  </p>
                  <a href="https://n5stewardsasia.squarespace.com/church-community" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px] group">
                    Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right Column: Numbered Accordions */}
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {individualsAccordion.map((item, idx) => (
                    <div key={idx} className="group bg-white border border-ink/5 hover:border-gold/20 transition-all duration-500 rounded-sm overflow-hidden">
                      <button 
                        onClick={() => setOpenIndividuals(openIndividuals === idx ? -1 : idx)}
                        className="flex items-center justify-between w-full p-8 text-left"
                      >
                        <div className="flex items-center gap-8">
                          <span className="serif-display text-xl text-gold/30 font-bold group-hover:text-gold transition-colors duration-500">0{idx + 1}</span>
                          <span className="serif-display text-2xl text-ink font-bold">{item.title}</span>
                        </div>
                        <div className={`h-8 w-8 rounded-full bg-secondary flex items-center justify-center transition-transform duration-500 ${openIndividuals === idx ? "rotate-180 bg-gold" : ""}`}>
                          {openIndividuals === idx ? <Minus className="h-4 w-4 text-ink" /> : <Plus className="h-4 w-4 text-ink/40" />}
                        </div>
                      </button>
                      <div className={`transition-all duration-700 ease-in-out ${openIndividuals === idx ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-8 pb-10 pl-[5.5rem] text-lg text-ink/70 leading-relaxed font-light">
                          {item.body}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expectations Header & Grid */}
        <div className="py-24 bg-white border-t border-ink/15">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow text-gold block mb-4">Impact</span>
                <h3 className="serif-display text-4xl md:text-5xl lg:text-6xl text-ink">What Believers <br /><span className="italic text-gold">Can Expect.</span></h3>
              </div>
              <div className="max-w-md">
                <p className="text-ink/60 text-sm leading-relaxed border-l border-gold pl-6">
                  Join a community where biblical financial stewardship is brought to life through practical, purpose-driven resources and real conversations.
                </p>
              </div>
            </div>
            <FeatureGrid items={believersExpect} cardBg="bg-secondary" />
          </div>
        </div>

        {/* 3. Why Journey With Us */}
        <div className="py-24 bg-white">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-16 items-center">
              {/* 3-Image Collage Layout */}
              <div className="md:col-span-6 relative h-[500px] md:h-[600px] hidden md:block">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                
                {/* Main large image (top right) */}
                <img 
                  src={conferenceImg} 
                  alt="Journey together" 
                  className="absolute top-0 right-0 w-[70%] h-[400px] object-cover rounded-sm shadow-2xl z-10" 
                />
                
                {/* Secondary image (bottom left) */}
                <img 
                  src={groupImg} 
                  alt="Community discussion" 
                  className="absolute bottom-10 left-0 w-[55%] h-[280px] object-cover rounded-sm shadow-xl z-20 border-8 border-secondary" 
                />
                
                {/* Tertiary image (bottom right, overlapping) */}
                <img 
                  src={leadersImg} 
                  alt="Leadership" 
                  className="absolute bottom-0 right-10 w-[40%] h-[220px] object-cover rounded-sm shadow-lg z-30 border-8 border-secondary" 
                />
              </div>

              {/* Mobile single image fallback */}
              <div className="md:hidden relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
                 <img src={conferenceImg} alt="Journey together" className="relative z-10 w-full rounded-sm shadow-2xl" />
              </div>

              <div className="md:col-span-5 md:col-start-8 space-y-8">
                <div>
                  <span className="eyebrow text-gold block mb-4 uppercase">The Heart of N5</span>
                  <h3 className="serif-display text-4xl md:text-5xl leading-[1.1] text-ink">Why Journey <br />With Us</h3>
                </div>
                <div className="space-y-6 text-ink/80 text-lg font-medium leading-relaxed">
                  <p>
                    Biblical financial stewardship is one of the most needed areas of discipleship in the Church today — yet it is rarely taught. Without accountability, believers often struggle to live out what the Word teaches.
                  </p>
                  <p>
                    Learning within a community is essential — where minds are renewed, questions are answered, and wisdom is shared — so that every believer may be equipped for every good work (2 Timothy 3:17).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. FAITH-BASED LEADERS
      ══════════════════════════════════════════════════════ */}
      <section id="faith-leaders" className="bg-white scroll-mt-28 border-t border-ink/15">
        {/* Hero */}
        <div className="relative bg-ink text-ivory overflow-hidden">
          <img src={leadersImg} alt="Faith-based leaders" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative container-x py-28">
            <span className="eyebrow text-gold block mb-3 uppercase">Part 02 / Leaders</span>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-7xl mb-6">
              Faith-Based <br />
              <span className="italic text-gold">Leaders.</span>
            </h2>
            <p className="text-ivory/70 max-w-xl leading-relaxed">
              What if your community's greatest discipleship gap is financial stewardship? For faith leaders, partnering with N5 is about addressing a real and growing need — helping people navigate money with wisdom, responsibility and purpose.
            </p>
            <a href="https://n5stewardsasia.squarespace.com/faith-based-leaders" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-ivory transition-colors">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Accordion */}
        <div className="py-24">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="gold-rule" />
                  <span className="eyebrow">Partnering with N5</span>
                </div>
                <h3 className="serif-display text-3xl md:text-4xl">
                  A Call to Prepare the Church
                </h3>
              </div>
              <div className="md:col-span-7">
                <AccordionList items={faithAccordion} />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 2: Partnership Details */}
        <div className="pt-24 pb-24 bg-white border-t border-ink/15">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow text-gold block mb-4">Engagement</span>
                <h3 className="serif-display text-4xl md:text-5xl text-ink">What Partnership <br /><span className="italic text-gold">Looks Like.</span></h3>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-6 space-y-10">
                <div className="grid gap-8">
                  {faithPartnership.map((item, i) => (
                    <div key={i} className="flex gap-6 group/item items-start p-6 rounded-sm bg-secondary border border-border/50 hover:border-gold/30 transition-all duration-300">
                      <span className="serif-display text-3xl text-gold-dark/40 group-hover/item:text-gold-dark transition-colors duration-300">
                        0{i + 1}
                      </span>
                      <p className="text-xl text-ink/80 leading-relaxed group-hover/item:text-ink transition-colors duration-300 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <div className="relative p-6 border border-gold/20 rounded-sm">
                  <div className="absolute -inset-1 bg-gold/10 blur-sm" />
                  <img src={conferenceImg} alt="Partnership" className="relative z-10 w-full rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
                <div className="md:col-span-7">
                  <AccordionList items={financeAccordion} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What N5 Brings */}
        <div className="pt-24 pb-24 bg-white border-t border-ink/15">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow text-gold block mb-4">Support</span>
                <h3 className="serif-display text-4xl md:text-5xl lg:text-6xl text-ink">What N5 Brings <br /><span className="italic text-gold">To Professionals.</span></h3>
              </div>
            </div>
            <FeatureGrid items={financeExpect} cardBg="bg-secondary" />
          </div>
        </div>

        {/* 2. Bigger vision banner (Dark Intermission) - MOVED HERE */}
        <div className="bg-ink text-ivory py-20">
          <div className="container-x grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4">
              <img src={conferenceImg} alt="The bigger vision" className="w-full opacity-80" />
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5">
              <span className="eyebrow text-gold">The bigger vision</span>
              <p className="serif-display text-2xl md:text-3xl text-ivory leading-relaxed">
                N5 Stewards Asia is building a cross-sector movement where believers, faith-based leaders and finance-based professionals work side by side to strengthen people from the ground up.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Header & Grid */}
        <div className="pt-24 pb-24 bg-white border-t border-ink/15">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <span className="eyebrow text-gold block mb-4">Ecosystem</span>
                <h3 className="serif-display text-4xl md:text-5xl lg:text-6xl text-ink">How We <br /><span className="italic text-gold">Gather Together.</span></h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financePrograms.map((prog, i) => (
                <div 
                  key={prog.title} 
                  className="group/prog bg-secondary border border-border p-10 shadow-sm hover:border-gold/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl serif-display text-gold-dark/30 group-hover/prog:text-gold-dark/60 transition-colors">0{i + 1}</span>
                    <Briefcase className="h-6 w-6 text-gold-dark/60 group-hover/prog:text-gold-dark transition-colors" />
                  </div>
                  <h4 className="serif-display text-2xl mb-6 text-ink font-bold">{prog.title}</h4>
                  <ul className="space-y-4">
                    {prog.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink leading-relaxed group-hover/prog:text-ink transition-colors font-semibold">
                        <Check className="h-4 w-4 text-gold-dark shrink-0 mt-0.5 opacity-60 group-hover/prog:opacity-100 transition-opacity" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>


      </section>

      {/* ══════════════════════════════════════════════════════
          4. FIND A PROFESSIONAL
      ══════════════════════════════════════════════════════ */}
      <section id="find-professional" className="bg-white scroll-mt-28 border-t border-ink/15">
        {/* Part 04 / Header */}
        <div className="relative bg-ink text-ivory py-24 overflow-hidden border-b border-gold/20">
          <div className="absolute inset-0 opacity-10">
            <img src={specialties[0].img} alt="" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-20 container-x">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <span className="eyebrow text-gold block mb-4 uppercase tracking-[0.3em]">Part 04 / Directory</span>
                <h2 className="serif-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-[1.05]">
                  Find Your <br />
                  <span className="italic text-gold">Stewardship Guide.</span>
                </h2>
                <p className="text-xl text-ivory/80 max-w-xl leading-relaxed font-light">
                  Search our curated directory of N5-certified professionals who combine financial expertise with biblical integrity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Bar (Hidden, replaced by inline filters) */}
        <div className="hidden">
          {/* ... */}
        </div>

        {/* Mentor Showcase Grid */}
        <div className="py-24">
          <div className="container-x">
            <div className="mb-12">
              <div className="mb-10">
                <span className="eyebrow text-gold block mb-4 uppercase">Featured</span>
                <h3 className="serif-display text-4xl md:text-5xl">Meet Our <br /><span className="italic">Mentors.</span></h3>
              </div>
              
              {/* Search & Filter Line - Positioned Below Title */}
              <div className="flex flex-col md:flex-row items-stretch gap-4 w-full mb-12">
                <div className="relative group flex-grow lg:max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/30" />
                  <input 
                    type="text" 
                    placeholder="Search by name or description..." 
                    className="w-full h-12 pl-10 pr-4 bg-background border border-border rounded-sm text-sm font-bold focus:border-gold outline-none transition-all shadow-sm"
                  />
                </div>
                
                <div className="relative w-full md:w-64">
                  <select className="w-full h-12 appearance-none px-4 bg-background border border-border rounded-sm text-sm font-bold text-ink/60 focus:border-gold outline-none cursor-pointer shadow-sm">
                    <option>Filter by specialty...</option>
                    <option>Estate Planning</option>
                    <option>Faith-Based Investing</option>
                    <option>Financial Coaching</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="h-4 w-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-4 bg-background border border-border h-12 px-6 rounded-sm shadow-sm md:ml-auto shrink-0">
                  <span className="text-sm font-bold text-ink/60 whitespace-nowrap">Can book a call</span>
                  <div className="w-10 h-5 bg-border rounded-full relative cursor-pointer hover:bg-gold/20 transition-colors">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-ink rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProfessionals.map((pro) => (
                <div key={pro.name} className="group flex flex-col bg-background border border-ink/15 shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
                  {/* Square Image Container */}
                  <div className="aspect-square relative overflow-hidden bg-secondary">
                    <img src={pro.image} alt={pro.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    {pro.canBook && (
                      <div className="absolute top-4 right-4 bg-gold text-ink text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg z-10 animate-pulse">
                        Available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h4 className="serif-display text-xl text-ink mb-1 group-hover:text-gold transition-colors">{pro.name}</h4>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold-dark">{pro.role}</p>
                        <div className="flex items-start gap-1.5 text-[9px] text-ink/40 font-medium leading-relaxed">
                          <MapPin className="h-3 w-3 text-gold-dark/30 mt-0.5 shrink-0" />
                          <span>{pro.address}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-ink/70 leading-relaxed mb-6 italic line-clamp-2">
                      "{pro.bio}"
                    </p>

                    {/* Contact Details with Labels */}
                    <div className="space-y-3 mb-6 border-t border-ink/15 pt-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-ink/30">Phone</span>
                        <div className="flex items-center gap-2 text-[10px] text-ink/60 font-semibold">
                          <div className="w-3.5 h-3.5 text-gold-dark/40"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></div>
                          <span>{pro.phone}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-ink/30">Email</span>
                        <div className="flex items-center gap-2 text-[10px] text-ink/60 font-semibold truncate">
                          <div className="w-3.5 h-3.5 text-gold-dark/40"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
                          <span className="truncate">{pro.email}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-ink/30">Website</span>
                        <div className="flex items-center gap-2 text-[10px] text-ink/60 font-semibold truncate">
                          <div className="w-3.5 h-3.5 text-gold-dark/40"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 3.33-3.56A15.65 15.65 0 0 0 7.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-3.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg></div>
                          <span className="truncate">{pro.website}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-ink/15">
                      <div className="flex flex-col gap-3 mb-6">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-ink/30">Specialties</span>
                        <div className="flex flex-wrap gap-1.5">
                          {pro.specialties.map(s => (
                            <span key={s} className="px-2 py-0.5 bg-secondary text-[8px] font-bold uppercase tracking-wider text-ink/60 border border-border/50">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full bg-ink text-ivory py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-gold hover:text-ink transition-all group/btn">
                        Contact Me
                        <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center border-t border-ink/15 pt-16">
              <a href="https://n5stewardsasia.squarespace.com/find-a-professional" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:text-gold transition-all duration-300">
                <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                View the full directory
              </a>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}
