import { r as reactExports, W as jsxRuntimeExports, V as React } from "./server-Dq3LepHd.js";
import { c as createLucideIcon, a as cn, m as motion, B as Button, A as ArrowRight, P as PageShell, b as PageHeader, d as conferenceImg } from "./router-BABGM9sJ.js";
import { C as Check, B as BookOpen, a as Briefcase } from "./check-C008BR-r.js";
import { U as Users } from "./users-D3JDja-u.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
      key: "17lmqv"
    }
  ]
];
const HeartHandshake = createLucideIcon("heart-handshake", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const wiseMoneyImg = "/n5stewardmovementDemo/assets/wisemonysteward-Ds7-kGN3.png";
const financialCoachingImg = "/n5stewardmovementDemo/assets/financialstewardship-n4_6N96k.png";
const Card = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function FeatureCard({
  num,
  title,
  tagline,
  description,
  items,
  curriculum,
  audience,
  note,
  buttonText,
  glowColor = "gold",
  className,
  image,
  badge,
  link,
  imagePosition = "object-center"
}) {
  const glowColorMap = {
    gold: {
      glow: "bg-gold/30",
      button: "from-gold to-gold-dark text-ink",
      check: "bg-gold text-ink"
    },
    ink: {
      glow: "bg-ink/15",
      button: "from-ink to-ink/80 text-ivory",
      check: "bg-ink text-gold"
    },
    blue: {
      glow: "bg-blue-600/20",
      button: "from-blue-600 to-cyan-500 text-white",
      check: "bg-blue-600 text-white"
    }
  };
  const selected = glowColorMap[glowColor] || glowColorMap.gold;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      whileHover: { y: -8 },
      transition: { type: "spring", stiffness: 300, damping: 20 },
      className: cn("relative group row-span-11 grid grid-rows-subgrid", className),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: cn(
              "absolute -inset-4 rounded-[2.5rem] blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
              selected.glow
            ),
            animate: {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            },
            transition: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative row-span-11 grid grid-rows-subgrid rounded-[2rem] p-0 bg-background border border-ink/20 shadow-md group-hover:shadow-2xl transition-all duration-700 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 -z-10 opacity-15",
              animate: { rotate: [0, 360] },
              transition: { repeat: Infinity, duration: 30, ease: "linear" },
              style: {
                backgroundImage: glowColor === "gold" ? "radial-gradient(at 0% 0%, #E2B053 0px, transparent 50%), radial-gradient(at 100% 100%, #C4953D 0px, transparent 50%)" : "radial-gradient(at 0% 0%, #0A1121 0px, transparent 50%), radial-gradient(at 100% 100%, #1a2a4a 0px, transparent 50%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -m-[1px] aspect-[16/10] overflow-hidden bg-ink/5 rounded-t-[2rem]", children: [
            image && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: image,
                alt: title,
                className: cn(
                  "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000",
                  imagePosition
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent opacity-80" }),
            badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 bg-background/95 backdrop-blur-md px-4 py-2 rounded-full border border-border/20 shadow-sm z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark", children: badge }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-8 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "serif-display text-4xl text-white drop-shadow-lg opacity-60", children: num }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 pt-8 flex items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "serif-display text-3xl font-bold text-ink min-h-[96px] flex items-start group-hover:text-gold-dark transition-colors duration-500 leading-tight tracking-tight", children: title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-ink/70 font-medium leading-relaxed", children: tagline }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "border-ink/15" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark", children: "WHAT YOU'LL GAIN" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
              "flex items-center justify-center w-5 h-5 rounded-md mt-0.5 shrink-0 shadow-sm transition-transform group-hover:scale-110",
              selected.check
            ), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 stroke-[3]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-ink/80 leading-snug", children: item })
          ] }, index)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-4", children: curriculum && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-4", children: "THE CURRICULUM" }),
            curriculum.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-gold-dark/60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-ink/80", children: m })
            ] }, idx))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 p-6 rounded-2xl border-l-4 border-gold shadow-inner h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-3", children: "WHO SHOULD ATTEND" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-ink/70 leading-relaxed italic", children: [
              '"',
              audience,
              '"'
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 py-2", children: note && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground font-medium italic border-t border-border/20 pt-3", children: [
            "Note: ",
            note
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-8 md:px-10 pb-10 pt-4 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: cn(
                "w-full rounded-2xl py-7 text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-br shadow-xl group-hover:shadow-2xl transition-all duration-300",
                selected.button
              ),
              children: [
                buttonText,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) }) })
        ] })
      ]
    }
  );
}
const TestimonialsColumn = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: props.className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      animate: {
        translateY: "-50%"
      },
      transition: {
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      },
      className: "flex flex-col gap-6 pb-6",
      children: [
        ...new Array(2).fill(0).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(React.Fragment, { children: props.testimonials.map(({ text, image, name, role, initials }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xs w-full group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-gold/30 absolute -top-2 -left-2 group-hover:text-gold/50 transition-colors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-ivory italic relative z-10 font-light", children: [
                  '"',
                  text,
                  '"'
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-6 pt-6 border-t border-white/10", children: [
                image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    width: 40,
                    height: 40,
                    src: image,
                    alt: name,
                    className: "h-10 w-10 rounded-full object-cover border border-gold/40 shadow-sm"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold border border-gold/30", children: initials }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-ivory tracking-tight leading-tight text-sm uppercase", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-gold font-semibold mt-1 opacity-80", children: role })
                ] })
              ] })
            ]
          },
          i
        )) }, index))
      ]
    }
  ) });
};
const courses = [{
  num: "01",
  img: wiseMoneyImg,
  badge: "For every believer",
  title: "Wise Money Stewards",
  tagline: "A transformational 9-lesson discipleship course designed to align your finances with God's Word.",
  description: "Developed from over 30 years of financial experience, this interactive journey combines Scripture, practical frameworks, and guided discussions to move you from insight to action. Gain proven tools and biblical principles to steward your finances with clarity and purpose.",
  benefits: ["Build a strong, biblical foundation for money and stewardship", "Clarify your God-given responsibilities in managing finances", "Understand key financial principles through a Kingdom lens", "Create a simple, practical, and holistic financial plan", "Connect with like-minded Christians & professionals for community"],
  audience: "This course is for believers who desire to honour God with their finances and live out a biblical worldview of money in everyday life. Ideal for individuals, couples, small groups, and churches seeking practical discipleship in financial stewardship.",
  note: "The 15-hour course can be conducted in various formats (e.g. in-person, virtually, over 2 sessions or multiple sessions).",
  icon: BookOpen,
  link: "https://n5stewardsasia.squarespace.com/courses-1"
}, {
  num: "02",
  img: financialCoachingImg,
  badge: "For leaders & finance professionals",
  title: "Financial Stewardship Coaching Program",
  tagline: "A comprehensive 3-module certification programme equipping faith-based leaders and finance professionals to become effective financial stewardship coaches.",
  description: "Built on over 30 years of real-world experience by the founder of the N5 Stewardship Movement, this highly interactive course blends Scripture, practical frameworks, and guided discussions — moving you from knowledge to action.",
  benefits: ["Establish a solid, Scripture-based foundation for coaching", "Master impactful, biblically grounded money conversations", "Develop powerful financial coaching and counselling capabilities", "Gain practical tools, proven frameworks, & actionable blueprints", "Network with like-minded faith-driven leaders & finance professionals"],
  curriculum: ["Module 1 – Biblical Financial Stewardship Principles (Wise Money Stewards · 2 Days)", "Module 2 – Practical Financial Coaching (1 Day)", "Module 3 – Practical Financial Counselling (1 Day)"],
  audience: "This course is for faith-based leaders and finance-based professionals who desire to serve the Body of Christ in biblical financial discipleship and/or biblical financial coaching/counselling. Ideal for home group leaders, pastors, ministry leaders, Christian financial professionals and other finance-related professionals.",
  icon: Briefcase,
  link: "https://n5stewardsasia.squarespace.com/courses-1"
}];
const testimonials = [{
  name: "Audrey & Gerald",
  role: "Course Participants",
  initials: "AG",
  image: "https://images.unsplash.com/photo-1516589174184-c68526614488?w=800&auto=format&fit=crop",
  quote: "The Wise Money Stewards Course has been deeply transformational for Gerald and me as a couple. It gave us a shared language around money, helping us align not just our finances but also our prayers, decisions and discernment of God's will for our family and the resources He has entrusted to us."
}, {
  name: "Janelle Tan",
  role: "Manulife FA",
  initials: "JT",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
  quote: "The Financial Stewardship Coaching Programme is grounded, practical, and insightful. I highly recommend this to financial services professionals who seek to integrate their personal faith, values with how they manage their finances!"
}, {
  name: "Bernard Ong",
  role: "Finexis Advisory",
  initials: "BO",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
  quote: "I have always been committed to planning in my clients' best interests. This programme helped me incorporate biblically-based financial planning into my practice, especially for clients who are believers!"
}, {
  name: "Hazel Sam",
  role: "Great Eastern Life Assurance",
  initials: "HS",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
  quote: "This intentional compilation of biblical insights has empowered me to engage with my clients from a biblically grounded perspective. I am already experiencing the benefits of this refreshed approach!"
}, {
  name: "Fuji Yeo",
  role: "Investment Advisor",
  initials: "FY",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  quote: "This programme was a transformative experience that deepened my understanding of God's purpose for financial stewardship. The biblical insights strengthened my commitment to guide clients toward honouring God!"
}];
const videoCategories = [{
  label: "N5 Conference 2025",
  href: "https://n5stewardsasia.squarespace.com/video-resources/n5-conference-2025"
}, {
  label: "N5 Conference 2024",
  href: "https://n5stewardsasia.squarespace.com/video-resources/yoga-for-beginners"
}, {
  label: "N5 Conference 2023",
  href: "https://n5stewardsasia.squarespace.com/video-resources/mindful-meditation"
}, {
  label: "N5 Conference 2022",
  href: "https://n5stewardsasia.squarespace.com/video-resources/7-day-morning-flow-challenge"
}, {
  label: "Marketplace",
  href: "https://n5stewardsasia.squarespace.com/video-resources/marketplace"
}];
const videos = [{
  title: "N5 Conference 2025 | Day 1 Session 2",
  category: "N5 Conference 2025",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day1-session2-",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2025 | Day 2 Session 1",
  category: "N5 Conference 2025",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day2-session1-",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2025 | Day 2 Session 2",
  category: "N5 Conference 2025",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day-2-session-2-",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2025 | Day 2 Session 6",
  category: "N5 Conference 2025",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2025-day2-session6-",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2024 | Day One | Part One",
  category: "N5 Conference 2024",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-one",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2024 | Day One | Part Two",
  category: "N5 Conference 2024",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-two",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2024 | Day One | Part Three",
  category: "N5 Conference 2024",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/n5-conference-2024-day-one-part-three",
  thumbnail: conferenceImg
}, {
  title: "N5 Conference 2024 | Day Two | Part One",
  category: "N5 Conference 2024",
  href: "https://n5stewardsasia.squarespace.com/video-resources/v/zhy6665d9yc85rzhb34brhrfafhcgm",
  thumbnail: conferenceImg
}];
const pillars = [{
  icon: BookOpen,
  title: "Rooted in Scripture",
  desc: "Every teaching is anchored in biblical truth, not financial trend."
}, {
  icon: Users,
  title: "Lived in Community",
  desc: "Grow through honest conversation, not isolation. We learn together."
}, {
  icon: HeartHandshake,
  title: "Practically Applied",
  desc: "Real frameworks for real decisions — budgets, debt, giving, investing."
}, {
  icon: Briefcase,
  title: "Kingdom-Oriented",
  desc: "Money is a tool for God's purposes — we steward it with eternity in view."
}];
const sections = [{
  id: "courses",
  label: "Courses"
}, {
  id: "testimonials",
  label: "Testimonials"
}, {
  id: "video-resources",
  label: "Video Resources"
}];
function SectionNav() {
  const [activeSection, setActiveSection] = reactExports.useState("");
  reactExports.useEffect(() => {
    const NAV_OFFSET = 140;
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
    getActiveSection();
    window.addEventListener("scroll", getActiveSection, {
      passive: true
    });
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20 z-30 bg-background/98 backdrop-blur-md border-b border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center justify-center gap-12 md:gap-24 overflow-x-auto py-8 no-scrollbar", "aria-label": "Learn page sections", children: sections.map((s) => {
    const isActive = activeSection === s.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `#${s.id}`, onClick: (e) => {
      e.preventDefault();
      const el = document.getElementById(s.id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
        setActiveSection(s.id);
      }
    }, className: `group relative flex-shrink-0 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-ink" : "text-muted-foreground hover:text-ink"}`, children: [
      s.label,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute -bottom-2 left-0 right-0 h-[2.5px] bg-gold transition-all duration-300 origin-left ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}` })
    ] }, s.id);
  }) }) }) });
}
function LearnPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Learn", title: "Wisdom for the steward's heart.", intro: "Courses, teaching, and resources designed to renew the way you think about money — rooted in Scripture, lived in community, oriented toward kingdom impact." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: pillars.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/card bg-white/5 border border-white/10 p-8 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6 group-hover/card:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-6 w-6", strokeWidth: 1.8 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "serif-display text-xl mb-3 text-ivory", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/60 leading-relaxed", children: p.desc })
    ] }, idx)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "courses", className: "py-28 bg-secondary scroll-mt-28 border-t border-ink/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-gold block mb-3", children: "Part 01 / Curriculum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "serif-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1]", children: [
          "The Nehemiah 5 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "Stewardship Journey." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-x-10 lg:gap-x-16 grid-rows-[repeat(11,auto)] items-stretch", children: courses.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { num: c.num, title: c.title, tagline: c.tagline, description: c.description, items: c.benefits, curriculum: "curriculum" in c ? c.curriculum : void 0, audience: c.audience, note: "note" in c ? c.note : void 0, buttonText: "Explore & Register", glowColor: i % 2 === 0 ? "gold" : "ink", image: c.img, badge: c.badge, link: c.link, imagePosition: i === 1 ? "object-[50%_25%]" : "object-center" }, c.num)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "py-28 bg-ink scroll-mt-28 overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8
        }, viewport: {
          once: true
        }, className: "mb-16 grid md:grid-cols-12 gap-8 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-gold block mb-3", children: "Part 02 / Experiences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "serif-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ivory", children: [
              "Stories of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "Transformation." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/70 leading-relaxed", children: "From individuals and couples to finance professionals and church leaders — N5 has transformed the way thousands across Asia think about money." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[700px] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsColumn, { testimonials: testimonials.slice(0, 2).map((t) => ({
            text: t.quote,
            name: t.name,
            role: t.role,
            image: t.image,
            initials: t.initials
          })), duration: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsColumn, { testimonials: testimonials.slice(2, 4).map((t) => ({
            text: t.quote,
            name: t.name,
            role: t.role,
            image: t.image,
            initials: t.initials
          })), className: "hidden md:block", duration: 25 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsColumn, { testimonials: [testimonials[4], testimonials[0]].map((t) => ({
            text: t.quote,
            name: t.name,
            role: t.role,
            image: t.image,
            initials: t.initials
          })), className: "hidden lg:block", duration: 22 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "video-resources", className: "py-28 bg-secondary scroll-mt-28 border-t border-ink/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-14 gap-8 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-gold block mb-3", children: "Part 03 / Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "serif-display text-4xl md:text-5xl text-ink", children: "Video Library." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://n5stewardsasia.squarespace.com/video-resources", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-ink text-ink px-6 py-3 text-xs font-semibold tracking-wide hover:bg-ink hover:text-ivory transition-all", children: [
          "Browse all recordings ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 mb-12", children: videoCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: cat.href, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-border px-4 py-2 hover:border-gold hover:text-gold transition-colors backdrop-blur-sm", children: cat.label }, cat.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-px bg-border", children: videos.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: v.href, target: "_blank", rel: "noopener noreferrer", className: "group bg-background hover-lift relative overflow-hidden block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video overflow-hidden bg-secondary relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.thumbnail, alt: v.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gold/90 group-hover:bg-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5 text-ink fill-ink ml-0.5" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] font-semibold tracking-widest uppercase text-gold mb-2", children: v.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "serif-display text-base leading-snug text-ink group-hover:text-gold transition-colors", children: v.title })
        ] })
      ] }, v.href)) })
    ] }) })
  ] });
}
export {
  LearnPage as component
};
