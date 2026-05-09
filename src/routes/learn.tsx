import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import bibleImg from "@/assets/still-bible.jpg";
import proImg from "@/assets/professional.jpg";
import conferenceImg from "@/assets/conference.jpg";
import wiseMoneyImg from "@/assets/wisemonysteward.png";
import financialCoachingImg from "@/assets/financialstewardship.png";
import { FeatureCard } from "@/components/ui/feature-card";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  ExternalLink,
  HeartHandshake,
  Play,
  Quote,
  Users,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight
} from "lucide-react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

export const Route = createFileRoute("/learn")({
  component: LearnPage,
  head: () => ({
    meta: [
      { title: "Learn — N5 Stewardship Movement" },
      {
        name: "description",
        content:
          "Courses, testimonials and video resources to align your finances with biblical wisdom.",
      },
    ],
  }),
});

/* ─── Data ─────────────────────────────────────────────────── */

const courses = [
  {
    num: "01",
    img: wiseMoneyImg,
    badge: "For every believer",
    title: "Wise Money Stewards",
    tagline:
      "A transformational 9-lesson discipleship course designed to align your finances with God's Word.",
    description:
      "Developed from over 30 years of financial experience, this interactive journey combines Scripture, practical frameworks, and guided discussions to move you from insight to action. Gain proven tools and biblical principles to steward your finances with clarity and purpose.",
    benefits: [
      "Build a strong, biblical foundation for money and stewardship",
      "Clarify your God-given responsibilities in managing finances",
      "Understand key financial principles through a Kingdom lens",
      "Create a simple, practical, and holistic financial plan",
      "Connect with like-minded Christians & professionals for community",
    ],
    audience:
      "This course is for believers who desire to honour God with their finances and live out a biblical worldview of money in everyday life. Ideal for individuals, couples, small groups, and churches seeking practical discipleship in financial stewardship.",
    note: "The 15-hour course can be conducted in various formats (e.g. in-person, virtually, over 2 sessions or multiple sessions).",
    icon: BookOpen,
    link: "https://n5stewardsasia.squarespace.com/courses-1",
  },
  {
    num: "02",
    img: financialCoachingImg,
    badge: "For leaders & finance professionals",
    title: "Financial Stewardship Coaching Program",
    tagline:
      "A comprehensive 3-module certification programme equipping faith-based leaders and finance professionals to become effective financial stewardship coaches.",
    description:
      "Built on over 30 years of real-world experience by the founder of the N5 Stewardship Movement, this highly interactive course blends Scripture, practical frameworks, and guided discussions — moving you from knowledge to action.",
    benefits: [
      "Establish a solid, Scripture-based foundation for coaching",
      "Master impactful, biblically grounded money conversations",
      "Develop powerful financial coaching and counselling capabilities",
      "Gain practical tools, proven frameworks, & actionable blueprints",
      "Network with like-minded faith-driven leaders & finance professionals",
    ],
    curriculum: [
      "Module 1 – Biblical Financial Stewardship Principles (Wise Money Stewards · 2 Days)",
      "Module 2 – Practical Financial Coaching (1 Day)",
      "Module 3 – Practical Financial Counselling (1 Day)",
    ],
    audience:
      "This course is for faith-based leaders and finance-based professionals who desire to serve the Body of Christ in biblical financial discipleship and/or biblical financial coaching/counselling. Ideal for home group leaders, pastors, ministry leaders, Christian financial professionals and other finance-related professionals.",
    icon: Briefcase,
    link: "https://n5stewardsasia.squarespace.com/courses-1",
  },
];

const testimonials = [
  {
    name: "Audrey & Gerald",
    role: "Course Participants",
    initials: "AG",
    image: "https://images.unsplash.com/photo-1516589174184-c68526614488?w=800&auto=format&fit=crop",
    quote:
      "The Wise Money Stewards Course has been deeply transformational for Gerald and me as a couple. It gave us a shared language around money, helping us align not just our finances but also our prayers, decisions and discernment of God's will for our family and the resources He has entrusted to us.",
  },
  {
    name: "Janelle Tan",
    role: "Manulife FA",
    initials: "JT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
    quote:
      "The Financial Stewardship Coaching Programme is grounded, practical, and insightful. I highly recommend this to financial services professionals who seek to integrate their personal faith, values with how they manage their finances!",
  },
  {
    name: "Bernard Ong",
    role: "Finexis Advisory",
    initials: "BO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
    quote:
      "I have always been committed to planning in my clients' best interests. This programme helped me incorporate biblically-based financial planning into my practice, especially for clients who are believers!",
  },
  {
    name: "Hazel Sam",
    role: "Great Eastern Life Assurance",
    initials: "HS",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
    quote:
      "This intentional compilation of biblical insights has empowered me to engage with my clients from a biblically grounded perspective. I am already experiencing the benefits of this refreshed approach!",
  },
  {
    name: "Fuji Yeo",
    role: "Investment Advisor",
    initials: "FY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    quote:
      "This programme was a transformative experience that deepened my understanding of God's purpose for financial stewardship. The biblical insights strengthened my commitment to guide clients toward honouring God!",
  },
];

const videoCategories = [
  { label: "N5 Conference 2025", href: "https://n5stewardsasia.squarespace.com/video-resources/n5-conference-2025" },
  { label: "N5 Conference 2024", href: "https://n5stewardsasia.squarespace.com/video-resources/yoga-for-beginners" },
  { label: "N5 Conference 2023", href: "https://n5stewardsasia.squarespace.com/video-resources/mindful-meditation" },
  { label: "N5 Conference 2022", href: "https://n5stewardsasia.squarespace.com/video-resources/7-day-morning-flow-challenge" },
  { label: "Marketplace", href: "https://n5stewardsasia.squarespace.com/video-resources/marketplace" },
];

const videos = [
  {
    title: "N5 Conference 2025 | Day 1 Session 2",
    category: "N5 Conference 2025",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day1-session2-",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2025 | Day 2 Session 1",
    category: "N5 Conference 2025",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day2-session1-",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2025 | Day 2 Session 2",
    category: "N5 Conference 2025",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day-2-session-2-",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2025 | Day 2 Session 6",
    category: "N5 Conference 2025",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day2-session6-",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2024 | Day One | Part One",
    category: "N5 Conference 2024",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-one",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2024 | Day One | Part Two",
    category: "N5 Conference 2024",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-two",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2024 | Day One | Part Three",
    category: "N5 Conference 2024",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-three",
    thumbnail: conferenceImg,
  },
  {
    title: "N5 Conference 2024 | Day Two | Part One",
    category: "N5 Conference 2024",
    href: "https://n5stewardsasia.squarespace.com/video-resources/v/zhy6665d9yc85rzhb34brhrfafhcgm",
    thumbnail: conferenceImg,
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Rooted in Scripture",
    desc: "Every teaching is anchored in biblical truth, not financial trend.",
  },
  {
    icon: Users,
    title: "Lived in Community",
    desc: "Grow through honest conversation, not isolation. We learn together.",
  },
  {
    icon: HeartHandshake,
    title: "Practically Applied",
    desc: "Real frameworks for real decisions — budgets, debt, giving, investing.",
  },
  {
    icon: Briefcase,
    title: "Kingdom-Oriented",
    desc: "Money is a tool for God's purposes — we steward it with eternity in view.",
  },
];

/* ─── Sticky section nav ────────────────────────────────────── */
const sections = [
  { id: "courses", label: "Courses" },
  { id: "testimonials", label: "Testimonials" },
  { id: "video-resources", label: "Video Resources" },
];

function SectionNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Use a scroll listener to find which section top is closest to (but past) the nav bar
    const NAV_OFFSET = 140; // main nav (80px) + section nav (60px)

    const getActiveSection = () => {
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Section is considered active once its top has crossed the nav offset
        if (rect.top <= NAV_OFFSET) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  return (
    <div className="sticky top-20 z-30 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-x">
        <nav className="flex items-center justify-center gap-12 md:gap-24 overflow-x-auto py-8 no-scrollbar" aria-label="Learn page sections">
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
                className={`group relative flex-shrink-0 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                }`}
              >
                {s.label}
                <span 
                  className={`absolute -bottom-2 left-0 right-0 h-[2.5px] bg-gold transition-all duration-300 origin-left ${
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

/* ─── Page ──────────────────────────────────────────────────── */
function LearnPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Learn"
        title="Wisdom for the steward's heart."
        intro="Courses, teaching, and resources designed to renew the way you think about money — rooted in Scripture, lived in community, oriented toward kingdom impact."
      />

      {/* Sticky section nav */}
      <SectionNav />

      {/* Pillars strip - Dark Mode for contrast */}
      <section className="py-20 bg-ink">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => (
              <div 
                key={idx} 
                className="group/card bg-white/5 border border-white/10 p-8 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500">
                  <p.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="serif-display text-xl mb-3 text-ivory">{p.title}</h3>
                <p className="text-sm text-ivory/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COURSES SECTION
      ══════════════════════════════════════════════════════ */}
      <section id="courses" className="py-28 bg-secondary scroll-mt-28 border-t border-ink/15">
        <div className="container-x">
          {/* Section header */}
          <div className="mb-16">
            <span className="eyebrow text-gold block mb-3">Part 01 / Curriculum</span>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]">
              The Nehemiah 5 <br />
              <span className="italic text-gold">Stewardship Journey.</span>
            </h2>
          </div>

          {/* Course cards - CSS Subgrid Powered Grid for Perfect Alignment */}
          <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 grid-rows-[repeat(11,auto)] items-stretch">
            {courses.map((c, i) => (
              <FeatureCard
                key={c.num}
                num={c.num}
                title={c.title}
                tagline={c.tagline}
                description={c.description}
                items={c.benefits}
                curriculum={"curriculum" in c ? (c as any).curriculum : undefined}
                audience={c.audience}
                note={"note" in c ? (c as any).note : undefined}
                buttonText="Explore & Register"
                glowColor={i % 2 === 0 ? "gold" : "ink"}
                image={c.img}
                badge={c.badge}
                link={c.link}
                imagePosition={i === 1 ? "object-[50%_25%]" : "object-center"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section id="testimonials" className="py-28 bg-ink scroll-mt-28 overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="container-x relative z-10">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 grid md:grid-cols-12 gap-8 items-end"
          >
            <div className="md:col-span-8">
              <span className="eyebrow text-gold block mb-3">Part 02 / Experiences</span>
              <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ivory">
                Stories of <br />
                <span className="italic text-gold">Transformation.</span>
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="text-ivory/70 leading-relaxed">
                From individuals and couples to finance professionals and church leaders —
                N5 has transformed the way thousands across Asia think about money.
              </p>
            </div>
          </motion.div>

          {/* Testimonial Columns */}
          <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[700px] overflow-hidden">
            <TestimonialsColumn 
              testimonials={testimonials.slice(0, 2).map(t => ({ text: t.quote, name: t.name, role: t.role, image: t.image, initials: t.initials }))} 
              duration={20} 
            />
            <TestimonialsColumn 
              testimonials={testimonials.slice(2, 4).map(t => ({ text: t.quote, name: t.name, role: t.role, image: t.image, initials: t.initials }))} 
              className="hidden md:block" 
              duration={25} 
            />
            <TestimonialsColumn 
              testimonials={[testimonials[4], testimonials[0]].map(t => ({ text: t.quote, name: t.name, role: t.role, image: t.image, initials: t.initials }))} 
              className="hidden lg:block" 
              duration={22} 
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO RESOURCES
      ══════════════════════════════════════════════════════ */}
      <section id="video-resources" className="py-28 bg-secondary scroll-mt-28 border-t border-ink/15">
        <div className="container-x">
          {/* Section header */}
          <div className="flex items-end justify-between mb-14 gap-8 flex-wrap">
            <div>
              <span className="eyebrow text-gold block mb-3">Part 03 / Resources</span>
              <h2 className="serif-display text-4xl md:text-5xl text-ink">Video Library.</h2>
            </div>
            <a
              href="https://n5stewardsasia.squarespace.com/video-resources"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink text-ink px-6 py-3 text-xs font-semibold tracking-wide hover:bg-ink hover:text-ivory transition-all"
            >
              Browse all recordings <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {videoCategories.map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-border px-4 py-2 hover:border-gold hover:text-gold transition-colors backdrop-blur-sm"
              >
                {cat.label}
              </a>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {videos.map((v) => (
              <a
                key={v.href}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background hover-lift relative overflow-hidden block"
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden bg-secondary relative">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="h-5 w-5 text-ink fill-ink ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-gold mb-2">
                    {v.category}
                  </p>
                  <h3 className="serif-display text-base leading-snug text-ink group-hover:text-gold transition-colors">
                    {v.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
