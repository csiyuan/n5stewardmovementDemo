import { W as jsxRuntimeExports } from "./server-Dq3LepHd.js";
import { P as PageShell, L as Link } from "./router-BABGM9sJ.js";
import { A as ArrowUpRight } from "./arrow-up-right-BRKhHh_d.js";
function AudiencePage(p) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { navOverlay: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[85svh] flex items-end overflow-hidden bg-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.imageAlt, width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover opacity-65" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container-x pb-24 pt-40 text-ivory grid md:grid-cols-12 gap-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-9 space-y-6 animate-rise", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-ivory/70", children: p.eyebrow })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "serif-display text-5xl md:text-7xl text-ivory", children: p.title.split(p.italicWord).map((part, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          part,
          i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-gold font-normal", children: p.italicWord })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-lg text-ivory/80 leading-relaxed", children: p.intro })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-12 gap-10 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-gold", children: "What you'll find" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "serif-display text-4xl md:text-5xl mt-3", children: "Built for your context." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-px bg-border", children: p.promises.map((pr, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "serif-display text-3xl text-gold", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "serif-display text-2xl mt-3 mb-3", children: pr.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: pr.desc })
      ] }, pr.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Your pathway" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "serif-display text-4xl md:text-5xl mt-3", children: "A clear next step." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 md:col-start-6 divide-y divide-border border-y border-border", children: p.journey.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 serif-display text-3xl text-gold", children: j.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "serif-display text-2xl mb-2", children: j.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: j.desc })
        ] })
      ] }, j.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-ink text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x text-center max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule bg-gold inline-block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "serif-display text-4xl md:text-6xl text-ivory", children: p.ctaTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/75 text-lg", children: p.ctaDesc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium hover:bg-ivory transition-colors", children: [
        "Get started ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
export {
  AudiencePage as A
};
