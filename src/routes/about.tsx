import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHeader } from "@/components/site/PageHeader";
import { Logos3 } from "@/components/blocks/logos3";
import { CouncilCarousel } from "@/components/ui/council-carousel";
import heroImg from "@/assets/hero-congregation.jpg";
import leaderImg from "@/assets/leaders.jpg";
import bibleImg from "@/assets/still-bible.jpg";
import conferenceImg from "@/assets/conference.jpg";
import groupImg from "@/assets/group-table.jpg";
import faqInquiryImg from "@/assets/faq-inquiry.png";
import contactConnectionImg from "@/assets/contact-connection.png";
import leadershipBg from "@/assets/leadership-bg.png";
import missionsSideImg from "@/assets/missions-side.png";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Plus, Minus, HelpCircle, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — N5 Stewardship Movement" },
      { name: "description", content: "Our story, mission and convictions — equipping the Body of Christ across Asia in biblical stewardship." },
    ],
  }),
});

const aboutSections = [
  { id: "mission", label: "Missions & Beliefs" },
  { id: "leadership", label: "Leadership" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

function SectionNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const NAV_OFFSET = 160;
    const getActiveSection = () => {
      let current = "";
      for (const s of aboutSections) {
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
        <nav className="flex gap-2 overflow-x-auto py-2 no-scrollbar" aria-label="About page sections">
          {aboutSections.map((s) => {
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
                className={`group relative flex-shrink-0 px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${
                  isActive ? "text-ink" : "text-ink/40 hover:text-gold"
                }`}
              >
                {s.label}
                <span 
                  className={`absolute bottom-4 left-8 right-8 h-[2.5px] bg-gold rounded-full transition-all duration-300 origin-left ${
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

const nehemiahText = `1 Now the men and their wives raised a great outcry against their fellow Jews. 2 Some were saying, “We and our sons and daughters are numerous; in order for us to eat and stay alive, we must get grain.”

3 Others were saying, “We are mortgaging our fields, our vineyards and our homes to get grain during the famine.”

4 Still others were saying, “We have had to borrow money to pay the king’s tax on our fields and vineyards. 5 Although we are of the same flesh and blood as our fellow Jews and though our children are as good as theirs, yet we have to subject our sons and daughters to slavery. Some of our daughters have already been enslaved, but we are powerless, because our fields and our vineyards belong to others.”

6 When I heard their outcry and these charges, I was very angry. 7 I pondered them in my mind and then accused the nobles and officials. I told them, “You are charging your own people interest!” So I called together a large meeting to deal with them 8 and said: “As far as possible, we have bought back our fellow Jews who were sold to the Gentiles. Now you are selling your own people, only for them to be sold back to us!” They kept quiet, because they could find nothing to say.

9 So I continued, “What you are doing is not right. Shouldn’t you walk in the fear of our God to avoid the reproach of our Gentile enemies? 10 I and my brothers and my men are also lending the people money and grain. But let us stop charging interest! 11 Give back to them immediately their fields, vineyards, olive groves and houses, and also the interest you are charging them—one percent of the money, grain, new wine and olive oil.”

12 “We will give it back,” they said. “And we will not demand anything more from them. We will do as you say.”`;

const founderProfileText = `Bernard Lim CFP, CFSE, AFCouns, identifies himself first and foremost as a son of Father God, before his vocational calling as a trainer, speaker, and coach in the financial services industry.

A Certified Financial Planner with more than 30 years of experience, Bernard has trained over 10,000 financial services professionals globally, as well as more than 1,000 para-counsellors within the public sector. He is widely recognised as a pioneer in estate and legacy planning, as well as in financial life coaching in Singapore, and is a regular speaker at international events.

In August 2021, the first N5 (Nehemiah 5) Steward conference was held to address the financial crisis within the Church and to provide a platform for biblical financial stewardship.

Since then, the movement has grown into a community of hundreds of Christian financial planners and marketplace professionals, many of whom Bernard disciples in biblically grounded financial wisdom.

Bernard is married to his childhood sweetheart, and they have three adult children. He enjoys reading, cycling, and spending time with his family.`;

const faqs = [
  {
    question: "Who organises N5?",
    answer: "N5 (Nehemiah 5) Movement is grassroots powered by a small core team and a growing community of pastors and marketplace professionals united in advancing biblical financial stewardship for lasting Kingdom impact."
  },
  {
    question: "Who do you partner with?",
    answer: "Our partners include Agathos, Salt&Light, SG500, and The Moolah Group amongst others."
  },
  {
    question: "What makes you different?",
    answer: "The N5 Movement is not simply a financial education programme. It seeks to build an ecosystem of communities committed to living out and advancing biblical financial stewardship across every stage and season of life for lasting Kingdom impact."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us anytime via our contact page or email. We aim to respond as soon as we can."
  }
];

function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleAccordionClick = (idx: number) => {
    const isOpening = openAccordion !== idx;
    setOpenAccordion(isOpening ? idx : null);
    
    if (isOpening) {
      // Longer delay to ensure layout shifts (collapsing other accordion) are accounted for
      setTimeout(() => {
        const element = accordionRefs.current[idx];
        if (element) {
          // Use scrollIntoView with scroll-margin-top for cleaner logic
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Story"
        title="Stewardship birthed from a biblical vision."
        intro="A journey of faith, stewardship, and redemptive impact — equipping the Body of Christ across Asia in biblical stewardship."
      />

      <SectionNav />



      <section id="missions" className="scroll-mt-28">
        <div className="relative bg-ink text-ivory py-32 overflow-hidden border-b border-gold/20">
          <div className="absolute inset-0 opacity-20">
            <img src={missionsSideImg} alt="" className="w-full h-full object-cover grayscale brightness-50" />
          </div>
          <div className="relative container-x">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-8">
                <span className="eyebrow text-gold block mb-4 uppercase tracking-[0.3em]">Part 01 / Missions & Beliefs</span>
                <h2 className="serif-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1]">
                  Missions & <br />
                  <span className="italic text-gold">Beliefs.</span>
                </h2>
                <p className="text-xl md:text-2xl text-ivory/70 max-w-2xl leading-relaxed font-light">
                  We exist to help the Church <span className="italic text-gold">"rebuild the walls"</span> today by restoring biblical stewardship of money, wealth & legacy.
                </p>

              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 p-2 border border-gold/30 rounded-sm shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={missionsSideImg} 
                    alt="Missions and Beliefs" 
                    className="w-full rounded-sm aspect-[4/5] object-cover" 
                  />
                  <div className="absolute inset-0 border border-gold/10 -m-4 rounded-sm -z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-28">
        <div className="relative bg-ink text-ivory py-32 overflow-hidden border-b border-gold/20">
          {/* Subtle Background Overlay */}
          <div className="absolute inset-0 opacity-5">
            <img src={heroImg} alt="" className="w-full h-full object-cover grayscale brightness-50" />
          </div>
          
          <div className="relative container-x">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-8">
                <span className="eyebrow text-gold block mb-4 uppercase tracking-[0.3em]">Part 02 / Leadership</span>
                <h2 className="serif-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1]">
                  A Grassroot <br />
                  <span className="italic text-gold">Movement.</span>
                </h2>
                <p className="text-xl md:text-2xl text-ivory/70 max-w-2xl leading-relaxed font-light">
                  We're a <span className="underline decoration-gold/40 underline-offset-8 text-ivory font-normal">grassroot movement</span> powered by a small core team and a growing community of pastors and marketplace professionals united in advancing <span className="text-gold font-normal italic">biblical financial stewardship</span> for lasting Kingdom impact.
                </p>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 p-2 border border-gold/30 rounded-sm shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={leaderImg} 
                    alt="N5 Leadership Team" 
                    className="w-full rounded-sm aspect-[4/5] object-cover" 
                  />
                  <div className="absolute inset-0 border border-gold/10 -m-4 rounded-sm -z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Council - Integrated into Leadership section */}
        <div className="py-32 bg-white">
          <div className="container-x">
            <div className="text-center mb-24 space-y-4">
              <h2 className="serif-display text-5xl md:text-6xl text-ink font-bold">Advisory Council</h2>
              <div className="h-px w-24 bg-gold mx-auto" />
            </div>
            <CouncilCarousel />
          </div>
        </div>

        {/* Collaborators - Integrated into Leadership section */}
        <Logos3 />
      </section>

      <section id="faq" className="scroll-mt-28">
        {/* Dark Header */}
        <div className="relative bg-ink text-ivory py-24 md:py-32 overflow-hidden border-b border-gold/20">
          <div className="absolute inset-0 opacity-20">
            <img src={bibleImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container-x">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-gold block mb-6 uppercase tracking-[0.3em]">Support</span>
                <h2 className="serif-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1]">
                  Common <br />
                  <span className="italic text-gold">Questions.</span>
                </h2>
                <p className="text-xl md:text-2xl text-ivory/70 max-w-2xl leading-relaxed font-light">
                  Find answers to common questions about the <span className="text-ivory font-normal">N5 Movement</span> and how we work to advance biblical financial stewardship across Asia.
                </p>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 p-2 border border-gold/30 rounded-sm shadow-2xl -rotate-1 group hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={faqInquiryImg} 
                    alt="Seeking Wisdom" 
                    className="w-full rounded-sm aspect-[4/5] object-cover" 
                  />
                  <div className="absolute inset-0 border border-gold/10 -m-4 rounded-sm -z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="py-24 bg-white">
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <h3 className="serif-display text-4xl md:text-5xl mb-6">Frequently Asked <br /><span className="italic text-gold">Questions.</span></h3>
                <p className="text-ink/60 leading-relaxed mb-8">
                  Get clarity on our organization, partnerships, and mission to advance Kingdom impact.
                </p>
                <div className="p-8 bg-secondary border border-border rounded-sm">
                  <h4 className="serif-display text-xl mb-4 text-ink">Still have questions?</h4>
                  <p className="text-sm text-ink/70 mb-6">If you can't find the answer you're looking for, please feel free to reach out to our team.</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:text-ink transition-colors group">
                    Contact Support <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className={cn(
                          "group border border-border/50 rounded-sm transition-all duration-300",
                          isOpen ? "bg-secondary/40 border-gold/30 shadow-lg shadow-gold/5" : "hover:border-gold/20"
                        )}
                      >
                        <button 
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="flex items-center justify-between w-full p-6 text-left"
                        >
                          <div className="flex gap-6 items-center">
                            <span className={cn(
                              "serif-display text-2xl transition-colors duration-300",
                              isOpen ? "text-gold" : "text-ink/20 group-hover:text-ink/40"
                            )}>
                              0{idx + 1}
                            </span>
                            <span className="serif-display text-xl md:text-2xl font-bold text-ink">{faq.question}</span>
                          </div>
                          <div className={cn(
                            "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300",
                            isOpen ? "bg-gold text-white rotate-180" : "bg-ink/5 text-ink group-hover:bg-gold/10 group-hover:text-gold"
                          )}>
                            <Plus className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-45")} />
                          </div>
                        </button>
                        <div className={cn(
                          "overflow-hidden transition-all duration-500 ease-in-out",
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}>
                          <div className="px-6 pb-8 ml-16 mr-10 text-lg text-ink/70 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        {/* Dark Header */}
        <div className="relative bg-ink text-ivory py-24 md:py-32 overflow-hidden border-b border-gold/20">
          <div className="absolute inset-0 opacity-20">
            <img src={conferenceImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative container-x">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-gold block mb-6 uppercase tracking-[0.3em]">Connect</span>
                <h2 className="serif-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1]">
                  Get In <br />
                  <span className="italic text-gold">Touch.</span>
                </h2>
                <p className="text-xl md:text-2xl text-ivory/70 max-w-2xl leading-relaxed font-light">
                  Whether you have a question, an idea, or just want to say hello, feel free to reach out—<span className="text-ivory font-normal">we're here to help.</span>
                </p>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 p-2 border border-gold/30 rounded-sm shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={contactConnectionImg} 
                    alt="Contact N5" 
                    className="w-full rounded-sm aspect-[4/5] object-cover" 
                  />
                  <div className="absolute inset-0 border border-gold/10 -m-4 rounded-sm -z-10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="py-24 bg-secondary">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Info */}
              <div className="space-y-12">
                <div>
                  <h3 className="serif-display text-4xl md:text-5xl lg:text-6xl mb-6">Begin Your <br /><span className="italic text-gold">Stewardship Journey.</span></h3>
                  <p className="text-ink/60 text-lg leading-relaxed max-w-md">
                    Connect with our team and join a movement that carries influence beyond metrics.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="h-14 w-14 rounded-full bg-white border border-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-ink/40 block mb-1">Email us</span>
                      <a href="mailto:team@n5stewards.asia" className="text-xl font-medium text-ink hover:text-gold transition-colors">team@n5stewards.asia</a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-ink/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink/40 block mb-6">Connect on Social</span>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: "Telegram", href: "#" },
                      { name: "Instagram", href: "#" },
                      { name: "Facebook", href: "#" }
                    ].map(social => (
                      <a 
                        key={social.name}
                        href={social.href}
                        className="px-8 py-3 rounded-full bg-ink text-ivory text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all duration-300"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Gallery Grid */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                    <img src={heroImg} alt="Community" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                    <img src={groupImg} alt="Meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                    <img src={leaderImg} alt="Leaders" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                    <img src={conferenceImg} alt="Conference" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageShell>
  );
}

export default AboutPage;
